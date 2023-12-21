import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

const RegisterScreen = () => {
  const [number, onChangeNumber] = React.useState('');
  const [text, onChangeText] = React.useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.sectionContainer}>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.sectionTitle}>WashWizie</Text>

      <Text style={styles.textName}>
        Nhập tên <Text style={{color:'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.inputName}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="white"
        placeholder="Candy Le"
      />
      <Text style={styles.textPhone}>
        Nhập số điện thoại<Text style={{color:'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.inputNumber}
        onChangeText={onChangeNumber}
        placeholderTextColor="white"
        value={number}
        placeholder="0325453657"
      />
      <Text style={styles.textEmail}>
        Nhập Email <Text style={{color:'red'}}>*</Text>
      </Text>
      <TextInput
        style={styles.inputEmail}
        onChangeText={onChangeText}
        value={text}
        placeholderTextColor="white"
        placeholder="hothihuong1234@gmail.com"
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.buttonRegister} onPress={()=>navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        Bằng việc đăng nhập hoặc đăng ký bạn đã đồng ý với các điều khoản bảo
        mật
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#353B51',
    height: '100%',
    alignItems: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginTop: -16,
    paddingBottom: 650,
    justifyContent: 'center',
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  inputEmail: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCEBFC',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    top: 450,
    position: 'absolute',
    color: 'white',
  },
  inputNumber: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCEBFC',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    top: 330,
    position: 'absolute',
    color: 'white',
  },
  inputName: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCEBFC',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    top: 200,
    position: 'absolute',
    color: 'white',
  },
  textName: {
    top: 160,
    left: 30,
    position: 'absolute',
    color: 'white',
  },
  textPhone: {
    top: 290,
    left: 30,
    position: 'absolute',
    color: 'white',
  },
  textEmail: {
    top: 420,
    left: 30,
    position: 'absolute',
    color: 'white',
  },

  containTitle: {
    height: '100%',
    position: 'absolute',
    color: 'white',
    top: 400,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonRegister: {
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
    position: 'absolute',
    color: '#CCEBFC',
    top: 530,
    width: 350,
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
  termsText: {
    position: 'absolute',
    color: '#CCEBFC',
    top: 710,
    width: 350,
    textAlign: 'center',
  },
});

export default RegisterScreen;
