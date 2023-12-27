import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const VerificationCodeScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const navigation = useNavigation();

  const handleVerification = () => {
    console.log('Entered OTP:', otp.join(''));
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.sectionTitle}>WashWizie</Text>
      <Text style={styles.optTextTop}>Nhập mã xác minh</Text>
      <Text style={styles.optTextCenter}>
        Mã xác thực OTP đã được gửi qua tin nhăn của số
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
            onChangeText={text => {
              const newOtp = [...otp];
              newOtp[index] = text;
              setOtp(newOtp);
            }}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353B51',
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    bottom: '5%',
  },
  imageLogo: {
    bottom: '7%',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optTextTop: {
    fontSize: 30,
    color: 'white',
    top: '2%',
  },
  optTextCenter: {
    color: 'white',
    top: '4%',
  },
  optTextBottom: {
    color: 'white',
    top: '400%',
  },
  optText: {
    color: 'black',
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
    top: '17%',
    textAlign: 'center',
    fontSize: 18,
    width: '15%',
    borderColor: '#CCEBFC',
    color: 'white',
  },
  buttonOTP: {
    paddingVertical: 16,
    marginTop: '40%',
    borderRadius: 10,
    color: '#CCEBFC',
    width: '70%',
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: '#CCEBFC',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VerificationCodeScreen;
