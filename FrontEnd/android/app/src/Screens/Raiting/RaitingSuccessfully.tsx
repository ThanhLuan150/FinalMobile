/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {ScrollView,Text,View,TouchableOpacity} from 'react-native';
import styles from '../../Styles/RatingSucessfully';
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
export  default RatingSucessfullyScreen;