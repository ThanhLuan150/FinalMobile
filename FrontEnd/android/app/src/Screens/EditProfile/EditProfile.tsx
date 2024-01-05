/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, KeyboardAvoidingView, TextInput, Text, Platform, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image} from 'react-native';;
import styles from '../../Styles/EditProfile';
import userEditUsers from '../../Hook/useEditProfile';
const EditProfile = (): JSX.Element => {
  const {username,onChangeUserName,phone,onChangePhone,email,onChangeEmail,navigation,userData,setUserData,isSaving,setIsSaving,goBack,saveProfile} = userEditUsers();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.viewbanner}>
            <TouchableOpacity onPress={goBack}>
              <Image style={styles.image} source={require('../../Image/goback.png')} />
            </TouchableOpacity>
            <Text style={styles.textVerify}>Thông tin tài khoản</Text>
          </View>
          <View style={styles.viewImage}>
          {userData?.image ? (
              <Image style={styles.images} source={{uri: userData.image}} />
            ) : (
              <Image
                style={styles.images}
                source={require('../../Image/th.jpg')}></Image>
            )}
          </View>
          <View style={styles.view}>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Tên người nhận</Text>
              <TextInput
                style={styles.textInput}
                value={username}
                onChangeText={onChangeUserName}
                placeholder="Nhập tên"
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Số điện thoại</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Nhập số điện thoại"
                value={phone}
                onChangeText={onChangePhone}
                placeholderTextColor="#fff"
              />
            </View>
            <View style={styles.viewEdit}>
              <Text style={styles.textEdit}>Nhập email</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Nhập địa chỉ"
                placeholderTextColor="#fff"
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

export default EditProfile;