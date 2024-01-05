import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../Styles/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const Header = () => {
  const navigation = useNavigation();
  const useNavigationNotification = () => {
    navigation.navigate('Notification');
  };
  const useNavigationSearch =() =>{
    navigation.navigate('SearchScreen');
  };
  return (
      <View style={styles.view}>
        <View style={styles.viewSearch}>
          <Ionicons
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ position: 'absolute', top: 5, left: 10 }}
            color={'#000000'}
            name="search"
            size={30}
          />
          <TouchableOpacity onPress={useNavigationSearch}
            style={styles.textInputSearch}
           >
            <Text>Nhập từ khóa tìm kiếm</Text>
            </TouchableOpacity>
          <Ionicons
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ position: 'absolute', top: 4, right: 10 }}
            color={'#000000'}
            name="mic-outline"
            size={30}
          />
        </View>
        <TouchableOpacity onPress={useNavigationNotification}>
          <Ionicons
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ marginLeft: 15, marginBottom: 10 }}
            color={'#fff'}
            name="notifications-outline"
            size={30}
          />
        </TouchableOpacity>
      </View>
  );
};