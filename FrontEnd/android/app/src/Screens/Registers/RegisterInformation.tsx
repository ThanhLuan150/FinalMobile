import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export function RegisterInformationScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.sectionContainer}>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.sectionTitle}>WashWizie</Text>
      <Image
        source={require('../../Image/imageRegister.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.containTitle}>
        <Text style={styles.boldText}>Quần áo giao tận nơi</Text>
        {'\n'}
        Mọi quần áo được giặt sạch sẽ, gọn gàng và được giao tận nơi!
      </Text>
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRegister}
        onPress={() => navigation.navigate('RegisterScreen')}>
        <Text style={{...styles.buttonText, color: 'white'}}>Đăng ký</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        Bằng việc đăng nhập hoặc đăng ký bạn đã đồng ý với các điều khoản bảo
        mật
      </Text>
    </View>
  );
}

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
  },
  imageLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 200,
    height: 300,
    position: 'absolute',
    top: 100,
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
  buttonLogin: {
    backgroundColor: '#CCEBFC',
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
    position: 'absolute',
    color: 'white',
    top: '55%',
    width: '80%',
  },
  buttonRegister: {
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
    position: 'absolute',
    color: '#CCEBFC',
    top: '65%',
    width: '80%',
    borderWidth: 2,
    borderColor: 'white',
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
    top: '91%',
    width: 350,
    textAlign: 'center',
  },
});
