import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
interface RegisterData {
  username: string;
  phone: string;
  email: string;
  password: string;
}
interface RegisterHook {
  username: string;
  phone: string;
  email: string;
  password: string;
  errors: string[];
  onChangeName: (name: string) => void;
  onChangeNumber: (number: string) => void;
  onChangeEmail: (email: string) => void;
  onChangePassword: (password: string) => void;
  navigation: any;
  useNavigationsLogin: () => void;
  handleSignUp: () => void;
  newErrors: string[];
  clearFields: () => void;
  AsyncStorage: any;
}
const useRegisterUser = (): RegisterHook => {
  const [username, onChangeName] = useState<string>('');
  const [phone, onChangeNumber] = useState<string>('');
  const [email, onChangeEmail] = useState<string>('');
  const [password, onChangePassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const navigation = useNavigation();
  const useNavigationsLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const handleSignUp = () => {
    const newErrors: string[] = [];

    if (username.length < 4) {
      newErrors.push('Tên đăng nhập phải có ít nhất 4 ký tự');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const clearFields = () => {
      onChangeName('');
      onChangeNumber('');
      onChangeEmail('');
      onChangePassword('');
    };
    if (phone.length !== 10) {
      newErrors.push('Số điện thoại phải có đúng 10 ký tự');
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      newErrors.push('Email không hợp lệ');
    }
    if (password.length < 5 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      newErrors.push(
        'Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt',
      );
    }
    setErrors(newErrors);
    if (newErrors.length > 0) {
      return;
    }
    const user: RegisterData = {
      username,
      phone,
      email,
      password,
    };
    axios
      .post('https://8dd3-14-176-231-248.ngrok-free.app/api/Register', user)
      .then(response => {
        console.log('User registered:', response.data);
        Alert.alert('Đăng ký thành công');
        AsyncStorage.setItem('registeredEmail', email);
        AsyncStorage.setItem('registeredPassword', password);
        clearFields();
         // Xóa danh sách lỗi
        setErrors([]);
        navigation.navigate('VerificationCodeScreen');
      })
      .catch(error => {
        console.error('Đăng ký thất bại:', error);
        Alert.alert('Đăng ký không thành công');
      });
  };
  return {
    username,
    phone,
    email,
    password,
    errors,
    onChangeName,
    onChangeNumber,
    onChangeEmail,
    onChangePassword,
    navigation,
    useNavigationsLogin,
    handleSignUp,
    AsyncStorage,
  };
};
const useRegisterUserObject = useRegisterUser;
export default useRegisterUserObject;
