/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import styles from '../../Styles/DetailChat';
import {ScrollView,Text,View,Image,Pressable,TouchableWithoutFeedback,Keyboard,KeyboardAvoidingView,TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const DetailChat: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const useGoBack = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView style={styles.keyboard}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.scrollview}>
          <View style={styles.viewbanner}>
            <Pressable onPress={useGoBack}>
              <Image
                style={{width: 20, height: 30}}
                source={require('../../Image/goback.png')}
              />
            </Pressable>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../Image/support.png')}
            />
            <Text style={styles.textSupport}>Trung Tâm trợ giúp </Text>
          </View>
          <View style={{padding: 10}}>
            <View style={styles.viewItemMessage}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../Image/support.png')}
              />
              <View style={styles.viewmessagesupport}>
                <Text>
                  Hello ,bạn bên mình có dịch vụ giặc xả siêu sạch luôn ạ
                </Text>
              </View>
            </View>
            <View style={styles.viewItemMessageCustomer}>
              <View style={styles.viewmessageCustomer}>
                <Text style={styles.textmessageCustomer}>Hello ạ</Text>
              </View>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={require('../../Image/huongho.jpg')}
              />
            </View>
            <View style={styles.viewItemMessageCustomer}>
              <View style={styles.viewmessageCustomer}>
                <Text style={styles.textmessageCustomer} numberOfLines={2}>
                  Tôi muốn giặc đồ ạ tại hơn tuần nay tôi chưa có giặc đồ{' '}
                </Text>
              </View>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={require('../../Image/huongho.jpg')}
              />
            </View>
            <View style={styles.viewItemMessage}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../Image/support.png')}
              />
              <View style={styles.viewmessagesupport}>
                <Text>Bạn chờ trong giây lát nha</Text>
              </View>
            </View>
            <View style={styles.viewItemMessageCustomer}>
              <View style={styles.viewmessageCustomer}>
                <Text style={styles.textmessageCustomer}>Oki bạn nha</Text>
              </View>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={require('../../Image/huongho.jpg')}
              />
            </View>
            <View style={styles.viewItemMessage}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../Image/support.png')}
              />
              <View style={styles.viewmessagesupport}>
                <Text>Bạn chờ trong giây lát nha</Text>
              </View>
            </View>
            <View style={styles.viewItemMessageCustomer}>
              <View style={styles.viewmessageCustomer}>
                <Text style={styles.textmessageCustomer}>Oki bạn nha</Text>
              </View>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={require('../../Image/huongho.jpg')}
              />
            </View>
            <View style={styles.viewItemMessage}>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../Image/support.png')}
              />
              <View style={styles.viewmessagesupport}>
                <Text>Bạn chờ trong giây lát nha</Text>
              </View>
            </View>
          </View>
          <View style={styles.viewInputChat}>
            <Image
              style={{width: 30, height: 30, marginTop: 11}}
              source={require('../../Image/add.png')}
            />
            <TextInput style={styles.input} placeholder="Nhập thông tin" />
            <Image
              style={{width: 30, height: 30, marginTop: 11}}
              source={require('../../Image/send.png')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default DetailChat;
