/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
export const Header = () => {
  const navigation = useNavigation();
  const useNavigationNotification = () =>{
    navigation.navigate('Notification')
  }
  return (
    <View style={styles.view}>
      <View style={styles.viewSearch}>
        <Ionicons
          style={{position: 'absolute', top: 10,left:10}}
          color={'#000000'}
          name="search"
          size={30}
        />
        <TextInput
          style={styles.textInputSearch}
          placeholder="Tìm kiếm chi nhánh"
        />
        <Ionicons  style={{position: 'absolute', top: 10,right:10}} color={'#000000'} name="mic-outline" size={30} />
      </View>
      <TouchableOpacity onPress={useNavigationNotification}>
        <Ionicons style={{ marginLeft:15 , marginTop:10,}} color={'#fff'} name="notifications-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  view:{
    padding:20, 
    flexDirection:'row',
  },
  viewSearch:{
    borderRadius:15,
    borderWidth:1,
    backgroundColor:'#fff',
    borderColor:'#FFF',
    paddingLeft:40,
    flexDirection:'row',
  },
  textInputSearch:{
    paddingRight:140,
  }
});
