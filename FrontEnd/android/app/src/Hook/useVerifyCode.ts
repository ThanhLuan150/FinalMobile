import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from "react-native";
import { APIlink } from './API';

interface UseVerificationUserProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
  navigation: any;
  otpInputs: React.MutableRefObject<any[]>;
  handleVerification: () => void;
  focusNextInput: (index: number) => void;
}

const useVerifycationUser = (): UseVerificationUserProps => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const navigation = useNavigation();
  const otpInputs = useRef<any[]>([]);

  const handleVerification = () => {
    const enteredOTP = otp.join('');
    AsyncStorage.getItem('registeredEmail').then((email: string | null) => {
      axios
        .post(`${APIlink}/api/Verify`, {
          email,
          otp: enteredOTP,
        })
        .then((response) => {
          console.log('Verification successful:', response.data);
          Alert.alert('Xác thực thành công!');
          navigation.navigate('LoginScreen');
        })
        .catch((error) => {
          Alert.alert('Xác thực không thành công');
          console.error('Verification failed:', error);
        });
    });
  };

  const focusNextInput = (index: number) => {
    if (otpInputs.current[index + 1]) {
      otpInputs.current[index + 1].focus();
    }
  };
  return {
    otp,
    setOtp,
    navigation,
    otpInputs,
    handleVerification,
    focusNextInput,
  };
};
const useVerifycationUserObject = useVerifycationUser;
export default useVerifycationUserObject;
