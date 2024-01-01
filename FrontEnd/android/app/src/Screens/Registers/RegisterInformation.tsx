/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/RegisterInformation';
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
