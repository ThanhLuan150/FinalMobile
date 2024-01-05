/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import {  StyleSheet, Text, View, Image,TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const VerifyEmail: FC = (): JSX.Element => {
    const navigation = useNavigation();
    const useGoback = () =>{
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <View style= {styles.viewbanner}>
                <TouchableOpacity style={{ marginTop:5 }}  onPress={useGoback}>
                    <Image style={styles.image} source={require('../../Image/goback.png')}></Image> 
                </TouchableOpacity>
                <Text style={styles.textVerify}>Xác thực Email</Text>
            </View>
            <KeyboardAvoidingView>
                <View style={styles.viewVerify}>
                    <Text style={styles.textrequire}>Vui lòng xác thực Email của bạn</Text>
                    <Text style={styles.textverify}>Hãy xác thực để bảo mật tài khoản và sử dụng mọi tiện ích trên WashWish</Text>
                    <View style={styles.viewEmail}>
                        <Text style={styles.emailtext}>Email Hiện tại</Text>
                        <View style={{ flexDirection:'row' ,paddingTop:10}}>
                            <TextInput style={styles.textinput} placeholder='Nhập email'></TextInput>
                            <Image style={styles.imageEmail} source={require('../../Image/email.png')}></Image>
                        </View>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textbuton}>Xác thực</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
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
    viewVerify:{
        padding:20,
    },
    textrequire:{
        fontSize:16,
        color:'#fff',
        fontWeight:'600',
    },
    textverify:{
        paddingTop:10,
        fontSize:13,
        color:'#fff',
    },
    viewEmail:{
        paddingTop:20,
    },
    emailtext:{
        color:'#fff',
        fontSize:14,
    },
    textinput:{
        borderRadius:15,
        borderWidth:1,
        borderColor:'#fff',
        width: '100%',
        color:'#fff',
        paddingLeft:20,
    },
    imageEmail:{
        width: 30,
        height: 30,
        position: 'relative',
        right:40,
        top:10,
    },
    viewButton:{
        paddingTop:20,
    },
    button:{
        backgroundColor:'#47506C',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:15,
    },
    textbuton:{
        textAlign:'center',
        fontSize:15,
        color:'#fff',
    }

})
export  default VerifyEmail;