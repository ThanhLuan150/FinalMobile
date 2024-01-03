/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import { ScrollView,Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/Notificarion';
const Notification: FC = (): JSX.Element => {
    const navigation = useNavigation();
    const useNavigationChat  = () => {
        navigation.navigate('Chat'); 
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.viewNotification}>
                <Text style={styles.textNotification}>Thông báo</Text>
                <Image style={{ width:30,height:30 }} source={require('../../Image/notification1.png')} />
            </View>
            <View style={styles.viewTouchableOpacity}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Chung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={useNavigationChat}>
                    <Text style={styles.text}>Tin nhắn</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textToday}>Hôm nay</Text>
                <Text style={styles.textAll}>Xem Tất cả</Text>
            </View>
            <View style={styles.viewListNotification}>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImgae}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescription}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                    </View>
                    <View>
                        <Text style={styles.textTime}>12 phút</Text>
                        <View style={styles.viewStatus}></View>
                    </View>
                </View>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImgae}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescription}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Uư đãi giảm 30%</Text>
                    </View>
                    <View>
                        <Text style={styles.textTime}>12 phút</Text>
                        <View style={styles.viewStatus}></View>
                    </View>
                </View>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImage}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescriptionnostatus}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                    </View>
                    <View>
                        <Text style={styles.textTimee}>12 phút</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textToday}>1 tuần trước</Text>
            </View>
            <View style={styles.viewListNotification}>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImage}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescriptionnostatus}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                    </View>
                    <View>
                        <Text style={styles.textTimee}>5 ngày </Text>
                    </View>
                </View>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImage}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescriptionnostatus}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                    </View>
                    <View>
                        <Text style={styles.textTimee}>5 ngày</Text>
                    </View>
                </View>
                <View style={styles.viewitemNotification}>
                    <View style={styles.viewImage}>
                        <Image style={{ width:20,height:20 }} source={require('../../Image/Voucher.png')}></Image>
                    </View>
                    <View>
                        <Text style={styles.textdescriptionnostatus}>Tặng vé quẩy miễn phí vào 22/12</Text>
                        <Text style={styles.textseedetail}>Xem để nhận vé ngay nhé!</Text>
                    </View>
                    <View>
                        <Text style={styles.textTimee}>5 ngày</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default Notification;