/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RatingSucessfullyScreen: FC = (): JSX.Element => {
    const navination =useNavigation();
    const useNavigationEditRating =() =>{
        navination.navigate('EditRatingScreen')
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.textThanks}>Cảm ơn bạn đã tin tưởng và đặt dịch vụ!</Text>
                <Text style={styles.textsucessfully}>Đã hoàn thành</Text>
            </View>
            <View style={styles.viewBill}>
                <View style={styles.bill}>
                    <Text style={styles.text}>Tóm tắt đơn hàng</Text>
                    <View style={styles.bills}>
                        <Text style={styles.textbill}>Đơn hàng</Text>
                        <Text style={styles.textbill}>#88998332</Text>
                    </View>
                    <View style={styles.bills}>
                        <Text style={styles.textbill}>Dịch vụ</Text>
                        <Text style={styles.textbill}>Giặc sấy</Text>
                    </View>
                    <View style={styles.bills}>
                        <Text style={styles.textbill}>Số kg</Text>
                        <Text style={styles.textbill}>7 kg</Text>
                    </View>
                    <View style={styles.bills}>
                        <Text style={styles.textbill}>Ghi chú</Text>
                        <Text style={styles.textbill}>Uỉ đồ</Text>
                    </View>
                    <View style={styles.bills}>
                        <Text style={styles.textbill}>Tổng đơn</Text>
                        <Text style={styles.textbill}>200000</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.text} >Xem chi tiết đơn hàng</Text>
            <Text style={styles.textRev}>Đánh giá 4 sao</Text>
            <View style={styles.viewIcon}>
              <Ionicons color={'yellow'} name="star-outline" size={50} />
              <Ionicons color={'yellow'} name="star" size={50} />
              <Ionicons color={'yellow'} name="star" size={50} />
              <Ionicons color={'yellow'} name="star" size={50} />
              <Ionicons color={'yellow'} name="star" size={50} />
            </View>
            <View style={styles.viewreview}>
              <Text style={styles.textreview}>
                Chân thành cảm ơn vì đã tin tưởng shipper Wirze
              </Text>
              <Text style={styles.textreview}>
                Hãy để lời nhắn đánh giá cho chúng mình đê chúng mình phát triển
                tốt nhất
              </Text>
            </View>
            <View style={styles.viewBill}>
                <View style={styles.bill}>
                    <Text style={{ color:'#fff', }}>Đồ sạch sẽ, thêm thoa , lần sau tôi sẽ để đồ bẩn hon một tháng để ghé tiệm giặc luôn thể ạ, quá tuyệt vời :)))</Text>
                </View>
            </View>
            <View style={styles.viewButtonreview}>
              <TouchableOpacity onPress={useNavigationEditRating} style={styles.buttonreview}>
                <Text style={styles.textReview}>Chỉnh sửa đánh giá</Text>
              </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#353B51',
    },
    view:{
        flexDirection:'column',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50,
    },
    textThanks:{
        color:'#fff',
    },
    textsucessfully:{
        color:'#fff',
        fontSize:37,
    },
    viewBill:{
        padding:20,
    },
    bill:{
        backgroundColor: '#808080',
        borderRadius:15,
        paddingTop:20,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:20,
    },
    text:{
        color:'#fff',
        textAlign:'center',
    },
    bills:{
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textbill:{
        fontSize:16,
        color:'#fff',
    },
    textRev:{
        color:'#fff',
        fontSize:17,
        textAlign:'center',
        padding:10,
    },
    viewIcon:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
    },
    viewreview:{
        flexDirection:'column',
        justifyContent:'flex-start',
        padding:20,
    },
    textreview:{
        color:'#fff',
        fontSize:12,
    },
    viewButtonreview:{
        padding:20,
    },
    buttonreview:{
        backgroundColor:'#1D7CA1',
        padding:20,
        borderRadius:15,
    },
    textReview:{
        color:'#fff',
        textAlign:'center',
        fontSize:15,
        fontWeight:'600',
    },
});
export  default RatingSucessfullyScreen;