/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const useNavigationVerifyEmail = () => {
    navigation.navigate('VerifyEmail');
  };
  const useNavigationSetUpAccount = () => {
    navigation.navigate('SetUpAccount');
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const useNavigationRating = () => {
    navigation.navigate('RatingScreen');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewNotification}>
        <Text style={styles.textNotification}>WashWish</Text>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../Image/notification1.png')}
        />
      </View>
      <View style={{paddingTop: 20}}>
        <View style={styles.viewbannerProfile}>
          <View style={styles.viewImage}>
            <Image
              style={styles.images}
              source={require('../../Image/huongho.jpg')}></Image>
          </View>
          <View style={styles.viewInformation}>
            <Text style={styles.testname}>Ho Thi Huong</Text>
            <View style={styles.viewRank}>
              <Text style={styles.textRank}>Hạng Vàng</Text>
              <Image
                style={styles.icon}
                source={require('../../Image/star.png')}></Image>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.iconstar}>
            <Image
              style={styles.Image}
              source={require('../../Image/edit.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop: 10, paddingBottom: 20}}>
        <View style={styles.viewVerify}>
          <Text style={styles.textVerify}>
            Xác thực tài khoản giúp tài khoản bảo mật tốt hơn
          </Text>
          <View
            style={{
              paddingTop: 10,
              paddingBottom: 8,
              paddingRight: 10,
            }}>
            <TouchableOpacity
              style={styles.Button}
              onPress={useNavigationVerifyEmail}>
              <Text style={styles.textButton}>Xác thực</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.viewStar}>
        <View style={styles.viewStarUser}>
          <Ionicons name="star" size={50} color={'yellow'} />
          <View style={styles.viewQuatityStar}>
            <Text style={styles.testStar}>Sao Wizie</Text>
            <Text style={styles.textAllStar}>1200 Sao</Text>
          </View>
        </View>
        <View style={styles.viewStarUser}>
          <Image
            style={styles.imageStar}
            source={require('../../Image/voucherss.png')}></Image>
          <View style={styles.viewQuatityStar}>
            <Text style={styles.testStar}>Voucher</Text>
            <Text style={styles.textAllStar}>20 Voucher </Text>
          </View>
        </View>
      </View>
      <View style={styles.setupInformation}>
        <TouchableOpacity
          onPress={useNavigationSetUpAccount}
          style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="person" size={30} />
            <Text style={styles.text}>Thiết lập tài khoản</Text>
          </View>
          <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={}
          style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="volume-high" size={30} />
            <Text style={styles.text}>Âm thanh hoặc rung</Text>
          </View>
          <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
        </TouchableOpacity>
        <View style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="moon" size={30} />
            <Text style={styles.text}>Chế độ tối</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', marginTop: 3}}>Tắt</Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <TouchableOpacity
          //   onPress={}
          style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="volume-high" size={30} />
            <Text style={styles.text}>Âm thanh hoặc Rung</Text>
          </View>
          <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={}
          style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="language" size={30} />
            <Text style={styles.text}>Ngôn ngữ</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Text>Tiếng Việt</Text>
            <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   onPress={}
          style={styles.viewInfomation}>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              alignItems: 'center',
            }}>
            <Ionicons color={'#fff'} name="volume-high" size={30} />
            <Text style={styles.text}>Âm thanh hoặc Rung</Text>
          </View>
          <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={useNavigationRating}
          style={styles.viewInfomation}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <Ionicons color={'#fff'} name="star" size={30} />
            <Text style={styles.text}>Đánh giá của tôi</Text>
          </View>
          <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353B51',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  viewNotification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  textNotification: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewbannerProfile: {
    backgroundColor: '#808080',
    flexDirection: 'row',
    gap: 10,
    borderRadius: 15,
  },
  viewImage: {
    padding: 20,
  },
  images: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'yellow',
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: 3,
    marginLeft: 15,
  },
  iconstar: {
    height: 30,
    width: 30,
    marginTop: 20,
    marginLeft: 40,
  },
  viewInformation: {
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: 'column',
    gap: 10,
  },
  testname: {
    fontSize: 16,
    color: '#47506C',
    fontWeight: '600',
  },
  viewRank: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop: 4,
    paddingBottom: 5,
  },
  textRank: {
    fontSize: 10,
    color: 'black',
  },
  viewVerify: {
    backgroundColor: '#1D7CA1',
    flexDirection: 'row',
    gap: 20,
    borderRadius: 15,
    paddingRight: 10,
  },
  textVerify: {
    fontSize: 11,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    color: '#fff',
  },
  Button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 7,
  },
  textButton: {
    fontSize: 10,
  },
  viewStar: {
    flexDirection: 'row',
    gap: 13,
  },
  viewStarUser: {
    width: '48%',
    backgroundColor: '#808080',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  imageStar: {
    height: 50,
    width: 50,
  },
  viewQuatityStar: {
    marginTop: 10,
  },
  testStar: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'right',
    marginRight: 1,
  },
  textAllStar: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  setupInformation: {
    paddingTop: 20,
  },
  viewInfomation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  Image: {
    width: 30,
    height: 30,
  },
  text: {
    color: '#fff',
    marginTop: 4,
  },
});

export default Profile;
