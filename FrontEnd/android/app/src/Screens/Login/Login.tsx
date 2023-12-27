// LoginScreen.js
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    console.log('Đăng nhập với số điện thoại:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>
      <Image
              source={require('../../Image/logo.png')}
              style={styles.imageLogo}
            />
            <Text style={styles.sectionTitle}>WashWizie</Text>
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        placeholderTextColor="white"
        keyboardType="numeric"
        onChangeText={text => setPhoneNumber(text)}
      />
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('loginSuccessfullyScreeen')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
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
  },
  header: {
    fontSize: 30,
    color:'white',
    bottom:50,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
    marginTop: '5%',
    marginBottom :'30%',
    justifyContent: 'center',
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
    top: '1%',
  },
  input: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#CCEBFC',
    width: '90%',
    color: 'white',
    marginBottom: 20,
  },
  buttonLogin: {
    padding: 20,
    marginTop: 20,
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

export default LoginScreen;
