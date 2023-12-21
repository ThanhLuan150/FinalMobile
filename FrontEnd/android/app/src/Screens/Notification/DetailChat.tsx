/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
//   TouchableOpacity,
} from 'react-native';
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
            <View style={styles.viewItemMessageCustomer}>
              <View style={styles.viewmessageCustomer}>
                <Text style={styles.textmessageCustomer}>Oki bạn nha</Text>
              </View>
              <Image
                style={{width: 40, height: 40, borderRadius: 50}}
                source={require('../../Image/huongho.jpg')}
              />
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
const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  viewbanner: {
    backgroundColor: '#353B51',
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    zIndex: 1,
  },
  textSupport: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    marginTop: 3,
  },
  scrollview: {},
  viewItemMessage: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    gap: 10,
    paddingRight: 100,
  },
  viewmessagesupport: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    padding: 10,
  },
  viewItemMessageCustomer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
    paddingBottom: 20,
    paddingLeft: 100,
  },
  viewmessageCustomer: {
    backgroundColor: '#353B51',
    padding: 10,
    borderRadius: 15,
  },
  textmessageCustomer: {
    color: '#fff',
    fontWeight: '600',
    flexWrap: 'wrap',
  },
  viewInputChat: {
    paddingLeft: 10,
    paddingRight: 20,
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    width: '80%',
    borderRadius: 15,
    paddingLeft: 20,
    zIndex: 1,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
});
export default DetailChat;
