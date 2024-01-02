import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import axios from 'axios';
const useLogin = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    // Kiểm tra xem token có tồn tại khi màn hình được mount
    useEffect(() => {
      checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Lưu token vào AsyncStorage kèm theo thời gian hết hạn
    const saveToken = async (token: string) => {
      const expirationDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days from now
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('tokenExpiration', expirationDate.toString());
    };
    // Kiểm tra xem token có hợp lệ trong AsyncStorage hay không
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      const expirationDate = await AsyncStorage.getItem('tokenExpiration');
      if (token && expirationDate) {
        // Kiểm tra xem token có hợp lệ dựa trên thời gian hết hạn
        if (new Date().getTime() < parseInt(expirationDate)) {
          Alert.alert('Đăng nhập thành công!');
          navigation.navigate('HomeScreen');
        } else {
           // Xóa token đã hết hạn và quay về màn hình LoginScreen
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('tokenExpiration');
          Alert.alert('Phiên đăng nhập hết hạn, vui lòng đăng nhập lại.');
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'LoginScreen' }],
            })
          );
        }
      }
    };
    const clearFields = () => {
      setEmail('');
      setPassword('');
    };
    const handleLogin = async () => {
      try {
        // Get registration information from AsyncStorage
        const registeredEmail = await AsyncStorage.getItem('registeredEmail');
        const registeredPassword = await AsyncStorage.getItem('registeredPassword');
        if (registeredEmail && registeredPassword) {
          // Send login request with registration information
          const response = await axios.post('https://b9b7-14-176-231-248.ngrok-free.app/api/Login', {
            email: registeredEmail,
            password: registeredPassword,
          });
          console.log('API Response:', response.data);
          const {token} = response.data;
            await AsyncStorage.setItem('token', token);// Lưu token nhận được vào AsyncStorage
            console.log('Đăng nhập thành công');
            Alert.alert('Đăng nhập thành công !');
            navigation.navigate('HomeScreen');
          }
        }
      catch (error) {
        console.log('Đăng nhập thất bại',error);
      }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        navigation,
        saveToken,
        AsyncStorage,
        checkToken,
        Alert,
        clearFields,
        handleLogin,
    };
};

const useLoginUserObject = useLogin;
export default useLoginUserObject;
