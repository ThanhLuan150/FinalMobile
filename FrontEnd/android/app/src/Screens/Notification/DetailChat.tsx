/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import styles from '../../Styles/DetailChat';
import {
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {WebView} from 'react-native-webview';
const DetailChat: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const useGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
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
      <View style={{flex: 1}}>
        <WebView
          source={{
            uri: 'https://tawk.to/chat/6597caf20ff6374032bcd9c9/1hjd4387k',
          }}
        />
      </View>
    </>
  );
};

export default DetailChat;
