<<<<<<< HEAD

import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
const RegisterScreen = () => {
  const [name, onChangeName] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const navigation = useNavigation();

=======
import React, { FC } from 'react';
import {View,TextInput,TouchableOpacity,Image,Text,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,Platform} from 'react-native';
import useRegisterUserObject from '../../Hook/useRegisterUser';
import styles from '../../Styles/styleRegister';
const RegisterScreen: FC = () => {
  const {username,phone,email,password,errors,onChangeName,onChangeNumber,onChangeEmail,onChangePassword,useNavigationsLogin,handleSignUp} = useRegisterUserObject();
>>>>>>> 9127d9d87e1a23476493b570cfea790261739cd0
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.sectionContainer}>
          <View style={styles.children}>
            <Image source={require('../../Image/logo.png')}style={styles.imageLogo}/>
            <Text style={styles.sectionTitle}>WashWizie</Text>
            {errors.includes('Tên đăng nhập phải có ít nhất 4 ký tự') && (
              <Text style={styles.errorText}>
                Tên đăng nhập phải có ít nhất 4 ký tự
              </Text>
            )}
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeName}
                value={username}
                placeholderTextColor="gray"
                placeholder="Tên đăng nhập"
                cursorColor={'#CCEBFC'}
                style={styles.textInput}
              />
            </View>
            {errors.includes('Số điện thoại phải có đúng 10 ký tự') && (
              <Text style={styles.errorText}>
                Số điện thoại phải có đúng 10 ký tự
              </Text>
            )}
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeNumber}
                placeholderTextColor="gray"
                value={phone}
                placeholder="Số điện thoại"
                style={styles.textInput}
                keyboardType="numeric"
              />
            </View>
            {errors.includes('Email không hợp lệ') && (
              <Text style={styles.errorText}>Email không hợp lệ</Text>
            )}
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangeEmail}
                value={email}
                placeholderTextColor="gray"
                placeholder="Nhập email"
                keyboardType="email-address"
                style={styles.textInput}
              />
            </View>
            {errors.includes(
              'Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc biệt',
            ) && (
              <Text style={styles.errorText}>
                Mật khẩu phải có ít nhất 5 ký tự và chứa ít nhất một ký tự đặc
                biệt
              </Text>
            )}
            <View style={styles.input}>
              <TextInput
                onChangeText={onChangePassword}
                value={password}
                placeholderTextColor="gray"
                placeholder="Nhập mật khẩu"
                secureTextEntry
                style={styles.textInput}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Tạo tài khoản</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
              Bạn đã có tài khoản{' '}
              <TouchableOpacity onPress={useNavigationsLogin}>
                <Text style={styles.TextLogin}>Đăng nhập</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
