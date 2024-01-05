/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
//tạo biến lưu giá trị thay đổi, tạo function update api put sự thay đổi đó lên api 
import AsyncStorage from '@react-native-async-storage/async-storage';
import useProfiles from '../../Hook/userProfile';

const EditProfile: React.FC = (): JSX.Element => {
  const {
    navigation,
    userData,
  } = useProfiles();
  const [name, onChangeName] = useState('');
  const [phone] = useState('');
  const [email, onChangeAddress] = useState('');
  const [password] = useState('');
  const goBack = () => {
    navigation.goBack();
  };

  const saveProfile = async () => {
    try {
      // Save profile information to AsyncStorage
      const profileData = { name, phone, email };
      await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      console.log('Profile saved:', profileData);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.viewbanner}>
            <TouchableOpacity onPress={goBack}>
              <Image style={styles.image} source={require('../../Image/goback.png')} />
            </TouchableOpacity>
            <Text style={styles.textVerify}>Thông tin tài khoản</Text>
          </View>
          <View style={styles.viewImage}>
            {userData && userData.image && (
              <Image style={styles.images} source={{ uri: userData.image }} />
            )}
          </View>
          <View style={styles.view}>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Tên người nhận</Text>
              <TextInput
                style={styles.textInput}
                value={userData?.username || ''}
                onChangeText={onChangeName}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Số điện thoại</Text>
              <TextInput
                style={styles.textInput}
                value={userData?.phone}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Nhập địa chỉ</Text>
              <TextInput
                style={styles.textInput}
                value={userData?.email || ''}
                onChangeText={onChangeAddress}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Nhập password</Text>
              <TextInput
                style={styles.textInput}
                value={userData?.password || ''}
                onChangeText={onChangeAddress}
                placeholderTextColor={'#fff'}
              />
            </View>
            <View style={{ paddingTop: 40, paddingLeft: 20, paddingRight: 20 }}>
              <View style={styles.viewEdit}>
                <TouchableOpacity style={styles.button} onPress={saveProfile}>
                  <Text style={styles.textButton}>Lưu Thông Tin</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353B51',
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  viewbanner: {
    flexDirection: 'row',
    gap: 50,
    bottom: '1%',
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  image: {
    width: 20,
    height: 20,
  },
  textVerify: {
    fontSize: 20,
    color: '#fff',
  },
  view: {
    padding: 15,
    flexDirection: 'column',
    gap: 15,
  },
  viewEdit: {
    flexDirection: 'column',
    gap: 15,
  },
  textEdit: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '600',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 15,
    paddingLeft: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#47506C',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 15,
    marginTop: 5,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
export default EditProfile;
