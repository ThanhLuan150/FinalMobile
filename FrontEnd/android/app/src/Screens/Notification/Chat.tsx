/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/Chat';
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
            </View>
        </ScrollView>
    );
}
export default Chat;
