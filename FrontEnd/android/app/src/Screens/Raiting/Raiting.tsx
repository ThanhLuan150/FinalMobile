/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {ScrollView,Text,View,Image,TouchableOpacity,TextInput,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import styles from '../../Styles/Raiting';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const RatingScreen: FC = (): JSX.Element => {
    const navigation = useNavigation();
    const useNavigationRatingSucessfully =() =>{
        navigation.navigate('RatingSucessfullyScreen')
    }
    return (
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.view}>
              <Image source={require('../../Image/ss.png')}></Image>
            </View>
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
            <View style={styles.viewrevieww}>
              <TouchableOpacity style={styles.viewbutton}>
                <Text style={styles.text}>Cẩn thận</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewbutton}>
                <Text style={styles.text}>Vấn đề vệ sinh</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewrevieww}>
              <TouchableOpacity style={styles.viewbutton}>
                <Text style={styles.text}>Giao tận tay</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.viewbutton}>
                <Text style={styles.text}>Thân thiện</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewTextInput}>
              <TextInput
                style={styles.TextInput}
                placeholderTextColor={'#fff'}
                placeholder="Cụ thể (nếu có)"></TextInput>
            </View>
            <View style={styles.viewupload}>
                <TouchableOpacity style={styles.button}>
                  <Ionicons color={'#1D7CA1'} name="camera-outline" size={30} />
                  <Text style={styles.textupload}>Thêm video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Ionicons color={'#1D7CA1'} name="image-outline" size={30} />
                  <Text style={styles.textupload}>Thêm hình ảnh</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.viewButtonreview}>
              <TouchableOpacity onPress={useNavigationRatingSucessfully}style={styles.buttonreview}>
                <Text style={styles.textReview}>Đánh giá</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
};
export  default RatingScreen;
