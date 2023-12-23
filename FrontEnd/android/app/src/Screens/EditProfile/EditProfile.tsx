/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
const EditProfile = () => {
  const navigation = useNavigation();
  const useGoback = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.viewbanner}>
            <TouchableOpacity style={{marginTop: 5}} onPress={useGoback}>
              <Image
                style={styles.image}
                source={require('../../Image/goback.png')}></Image>
            </TouchableOpacity>
            <Text style={styles.textVerify}>Thông tin tài khoản</Text>
          </View>
          <View style={styles.view}>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Tên người nhận</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập tên người nhận"
                placeholderTextColor={'#fff'}></TextInput>
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Số điện thoại</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập số điện thoại"
                placeholderTextColor={'#fff'}></TextInput>
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Nhập địa chỉ</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập địa chỉ"
                placeholderTextColor={'#fff'}></TextInput>
            </View>
            <View style={{ paddingTop:40, paddingLeft:20, paddingRight:20,}}>
                <View style={styles.viewEdit}>
                <TouchableOpacity style={styles.button}>
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
    flexDirection:'column',
    justifyContent:'space-evenly',
  },
  viewbanner: {
    flexDirection: 'row',
    gap: 50,
    // position: 'absolute',
    // top:30,
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
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EditProfile;