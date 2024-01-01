/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from '../../Styles/styleLogin';
import {View,Text,TextInput,TouchableOpacity,Image,Alert} from 'react-native';
import useLoginUserObject from '../../Hook/useLogin';
const LoginScreen = () => {
  const {email,setEmail,password,setPassword,navigation,saveToken,AsyncStorage,checkToken,Alert,clearFields,handleLogin} = useLoginUserObject();
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
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        placeholderTextColor="white"
        value={password}
           secureTextEntry
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
