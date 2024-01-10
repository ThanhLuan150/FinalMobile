/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import styles from '../../Styles/styleLogin';
import {View,Text,TextInput,TouchableOpacity,Image} from 'react-native';
import useLoginUserObject from '../../Hook/useLogin';
const LoginScreen = () => {
  const {
    email,
    password,
    errors,
    onChangeEmail,
    onChangePassword,
    navigation,
    handleLogin,
    AsyncStorage,
  } = useLoginUserObject();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đăng nhập</Text>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageLogo}
      />
      <Text style={styles.sectionTitle}>WashWizie</Text>
      {errors.includes('Email không hợp lệ') && (
        <Text style={styles.errorText}>
          Email không hợp lệ
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={text => onChangeEmail(text)}
      />
      {errors.includes('Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt') && (
        <Text style={styles.errorText}>
         Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt
        </Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="white"
        value={password}
        secureTextEntry
        onChangeText={text => onChangePassword(text)}
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
