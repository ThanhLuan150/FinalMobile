import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import useVerifycationUserObject from '../../Hook/useVerifyCode';
import styles from '../../Styles/styleVerifycationCode';
const VerificationCodeScreen = () => {
  const { otp,
    setOtp,
    otpInputs,
    handleVerification,
    focusNextInput} = useVerifycationUserObject();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.sectionTitle}>WashWizie</Text>
      <Text style={styles.optTextTop}>Nhập mã xác minh</Text>
      <Text style={styles.optTextCenter}>
        Mã xác thực OTP đã được gửi qua tin nhăn gmail
      </Text>
      <Text style={styles.optTextCenter}>(84+) 0334547855</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => {
              const newOtp = [...otp];
              newOtp[index] = text;
              setOtp(newOtp);
              if (text !== '') {
                focusNextInput(index);
              }
            }}
            ref={(input) => (otpInputs.current[index] = input)}
            onSubmitEditing={() => focusNextInput(index)}
          />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.optTextBottom}>
          Gửi lại mã OTP (Còn lại 60 giây)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonOTP} onPress={handleVerification}>
        <Text style={styles.buttonText}>Xác minh</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationCodeScreen;
