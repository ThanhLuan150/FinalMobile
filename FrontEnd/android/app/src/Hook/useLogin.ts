import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
interface LoginData {
  email: string;
  password: string;
}
interface LoginHook {
  email: string;
  password: string;
  errors: string[];
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  navigation: any;
  handleLogin: () => void;
  AsyncStorage: any;
}
const useLoginUser = (): LoginHook => {
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const navigation = useNavigation();
  const handleLogin = () => {
    const newErrors: string[] = [];
    const clearFields = () => {
      onChangeEmail('');
      onChangePassword('');
    };
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      newErrors.push('Email không hợp lệ');
    }
    if (password.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.push(
        'Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt',
      );
    }
    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }
    const user: LoginData = {
      email,
      password,
    };
    axios
      .post('https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/Login', user)
      .then(response => {
        console.log('User logged in:', response.data);
        Alert.alert('Đăng nhập thành công');
         // Xóa danh sách lỗi
         clearFields();
         // Xóa danh sách
      setErrors([]);
       const token = AsyncStorage.setItem('token', response.data.token);
        console.log(token);
        navigation.navigate('HomeScreen');
      })
      .catch(error => {
        console.error('Đăng nhập thất bại:', error);
        Alert.alert('Đăng nhập không thành công');
      });
  };
  return {
    email,
    password,
    errors,
    onChangeEmail,
    onChangePassword,
    navigation,
    handleLogin,
    AsyncStorage,
  };
};
const useLoginUserObject = useLoginUser;
export default useLoginUserObject;