/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
// import { useState } from 'react';
import {  StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
                <TouchableOpacity style={{ marginTop:5 }}  onPress={useGoback}>
                    <Image style={styles.image} source={require('../../Image/goback.png')}></Image> 
                </TouchableOpacity>
                <Text style={styles.textVerify}>Thuyết lập tài khoản</Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={useNavigationEditProfile} style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Thông tin cá nhân</Text>
                    <Image style={styles.images} source={require('../../Image/ten.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Gối giặc của tôi</Text>
                    <Image style={styles.images} source={require('../../Image/ten.png')}></Image>
                </View>
                <View style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Quyền riêng tư</Text>
                    <Image style={styles.images} source={require('../../Image/ten.png')}></Image>
                </View>
                <View style={styles.viewinfo}>
                    <Text style={styles.textDelete}>Xóa tài khoản</Text>
                </View>
            </View>
        </View>
    )
}
const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#353B51',
    },
    viewbanner:{
        flexDirection:'row',
        padding:20,
        gap:50,
    },
    image:{
        width: 20,
        height: 20,
    },
    textVerify:{
        fontSize:20,
        color:'#fff',
        marginBottom:7,
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