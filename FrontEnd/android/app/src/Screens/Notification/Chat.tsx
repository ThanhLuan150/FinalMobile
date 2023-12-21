/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Chat: FC = (): JSX.Element => {
    const navigation = useNavigation();
    const useNavigationNotification  = () => {
        navigation.navigate('Notification'); 
    };
    const useNavigationDetailChat =() =>{
        navigation.navigate('DetailChat')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.viewNotification}>
                <Text style={styles.textNotification}>Thông báo</Text>
                <Image style={{ width:30,height:30 }} source={require('../../Image/notification1.png')} />
            </View>
            <View style={styles.viewTouchableOpacity} >
                <TouchableOpacity style={styles.button} onPress={useNavigationNotification}>
                    <Text style={styles.text}>Chung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Tin nhắn</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewText}>
                <Image style={{ width:30, height:30 }} source={require('../../Image/massage.png')}></Image>
                <Text style={styles.textToday}>Tin nhắn (2)</Text>
            </View>
            <View style={styles.viewListNotification}>
                <TouchableOpacity style={styles.viewitemNotification} onPress={useNavigationDetailChat}>
                    <View style={styles.viewImgae}>
                        <Image style={{ width:30,height:30 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescription}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                        <View style={{ flexDirection:'row',gap:10 , paddingTop:8 }}>
                            <View style={styles.viewStatus}></View>
                            <Text style={styles.textTime}>bây giờ</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewitemNotification}>
                    <View style={styles.viewImgae}>
                        <Image style={{ width:30,height:30 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescription}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Uư đãi giảm 30%</Text>
                        <View style={{ flexDirection:'row',gap:10 , paddingTop:8 }}>
                            <View style={styles.viewStatus}></View>
                            <Text style={styles.textTime}>12 phút</Text>
                        </View>
                    </View>  
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#353B51',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    viewNotification:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:20,
    },
    textNotification:{
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    viewTouchableOpacity:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        backgroundColor:'#999999',
        paddingTop:5,
        paddingBottom:7,
        paddingLeft:60,
        paddingRight:60,
        borderRadius:20,
    },
    text:{
        color:'#CCEBFC',
        fontWeight:'bold',
        textAlign:'center',
    },
    viewText:{
        flexDirection:'row',
        paddingTop:25,
        gap:15,
    },
    textToday:{
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    textAll:{
        color: '#fff',
        fontSize:12,
        marginTop:7,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },
    viewListNotification:{
        paddingTop:10,
        flexDirection:'column',
        gap:10,
    },
    viewitemNotification:{
        backgroundColor:'#999999',
        padding:15,
        borderRadius:15,
        flexDirection:'row',
        gap:10,
    },
    viewImgae:{
        backgroundColor:'#BBF4FB',
        borderRadius:50,
        padding:15,
    },
    textdescription:{
        color:'#BBF4FB',
        fontWeight:'600',
    },
    textseedetail:{
        color:'#FFF',
        fontWeight:'600',
        fontSize:11,
        marginTop:4,
    },
    textTime:{
        color:'#BBF4FB',
        fontWeight:'600',
        fontSize:11,
        marginTop:1,
    },
    viewStatus:{
        backgroundColor:'#BBF4FB',
        borderRadius:50,
        width:10,
        height:10,
        marginTop:4,
    },
});
export default Chat;
