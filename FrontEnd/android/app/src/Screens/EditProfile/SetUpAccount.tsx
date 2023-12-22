/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
// import { useState } from 'react';
import {  StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SetUpAccount: FC = (): JSX.Element => {
    const navigation = useNavigation();
    const useGoback = () =>{
        navigation.goBack()
    }
    const useNavigationEditProfile =() =>{
        navigation.navigate('EditProfile');
    }
    return (
        <View style={styles.container}>
            <View style= {styles.viewbanner}>
                <TouchableOpacity style={{alignItems: 'center' }}  onPress={useGoback}>
                    <Ionicons name="chevron-back-outline" size={30} />
                </TouchableOpacity>
                <Text style={styles.textVerify}>Thiết lập tài khoản</Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Thông tin cá nhân</Text>
                    <Ionicons name="chevron-forward-outline" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Gối giặc của tôi</Text>
                    <Ionicons name="chevron-forward-outline" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Quyền riêng tư</Text>
                    <Ionicons name="chevron-forward-outline" size={35} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textDelete}>Xóa tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#353B51',
    },
    viewbanner: {
        width: '100%',
        alignItems: 'center',
        flexDirection:'row',
        padding:10,
        // gap:70,
    },
    image:{
        width: 20,
        height: 20,
    },
    textVerify:{
        fontSize:20,
        color: '#fff',
        marginLeft: '21%',
    },
    view:{
        padding:20,
    },
    viewinfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:20,
    },
    textInfo:{
        fontSize:18,
        color:'#fff',
    },
    images:{
        width: 30,
        height: 30,
    },
    textDelete:{
        fontSize:18,
        color:'red',
    }
})
export  default SetUpAccount;