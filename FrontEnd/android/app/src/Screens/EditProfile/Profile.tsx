/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {ScrollView,Text,View,Image,TouchableOpacity,Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../Styles/Profile';
import useProfiles from '../../Hook/userProfile';
const Profile: React.FC = (): JSX.Element => {
  const {navigation,useNavigationVerifyEmail,useNavigationSetUpAccount,isEnabled,toggleSwitch,useNavigationRating,handleLogout,userData,} = useProfiles();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewNotification}>
        <Text style={styles.textNotification}>WashWish</Text>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../Image/notification1.png')}
        />
      </View>
      <View style={{paddingTop: 10,marginBottom:20}}>
        <View style={styles.viewbannerProfile}>
          <View style={styles.viewImage}>
            {userData?.image ? (
              <Image style={styles.images} source={{uri: userData.image}} />
            ) : (
              <Image
                style={styles.images}
                source={require('../../Image/th.jpg')}></Image>
            )}
          </View>
          <View style={styles.viewInformation}>
            <Text style={styles.testname}>{userData?.username}</Text>
            <View style={styles.viewRank}>
              <Text style={styles.textRank}>Hạng Vàng</Text>
              <Image
                style={styles.icon}
                source={require('../../Image/star.png')}
              />
            </View>
            <Text style={styles.testname}>{userData?.phone}</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.iconstar}>
            <Image
              style={styles.Image}
              source={require('../../Image/edit.png')}
            />
          </TouchableOpacity>
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
              source={require('../../Image/voucherss.png')}
            />
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
              <Ionicons
                color={'#fff'}
                name="chevron-forward-outline"
                size={35}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
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
          <TouchableOpacity
            style={styles.viewInfomation}
            onPress={handleLogout}>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Ionicons color={'#fff'} name="star" size={30} />
              <Text style={styles.text}>Đăng xuất</Text>
            </View>
            <Ionicons color={'#fff'} name="chevron-forward-outline" size={35} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Profile;
