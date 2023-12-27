/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Pressable,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {SlideShowImage} from './components/SlideShowImage';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {renderOrder} from './components/Order';
import {RenderNearLocation} from './components/NearLocation';
import {RenderMiniGame} from './components/RenderMiniGame';
import {RenderVoucher} from './components/Voucher';
import { Header } from './components/Header';

export const HomePage = () => {
  const DATA = [
    {
      id: 'bd7acbea',
      price: 100000,
      date: '12/12/2023',
    },
    {
      id: '3ac68afc',
      price: 100000,
      date: '12/12/2023',
    },
    {
      id: '58694a0f',
      price: 100000,
      date: '12/12/2023',
    },
  ];
  const DATA2 = [
    {
      id: '#1',
      name: 'WashWizie Dinh Ngoc Son',
      time: '08AM',
    },
    {id: '#2', name: 'WashWizie Dinh Ngoc Son', time: '08AM'},
    {id: '#3', name: 'WashWizie Dinh Ngoc Son', time: '08AM'},
  ];
  const DataMiniGame = [
    {
      id: '#1',
      name: 'Thử tài sắp chữ',
      image: 'https://rohto.com.vn/images/2015/minigame_072015.png',
    },
    {
      id: '#2',
      name: 'Chăm cún đổi quà',
      image:
        'https://cdn.tgdd.vn/Files/2018/11/11/1130520/dog-run-pet-dog-simulator_1280x720-800-resize.jpg',
    },
    {
      id: '#3',
      name: 'Nông trại Wizie',
      image:
        'https://didongviet.vn/dchannel/wp-content/uploads/2022/05/game-nong-trai-mobile-01.jpg',
    },
    {
      id: '#4',
      name: 'Tìm hình giống nhau',
      image:
        'https://st.gamevui.com/images/image/2023/05/25/tim-cap-hinh-giong-nhau-640.jpg',
    },
    {
      id: '#5',
      name: 'Nhìn hình đoán chữ',
      image:
        'https://verbalearn.org/wp-content/uploads/2023/05/dap-an-duoi-hinh-bat-chu.png',
    },
  ];

  const DataVoucher = [
    {
      id: '#1',
      name: 'Thành viên mới',
      value: 'Giảm 20%',
      price: '100k',
      priceDiscount: '20k',
      startDate: '23/12/2023',
      endDate: '25/12/2023',
    },
    {
      id: '#2',
      name: 'Mã vận chuyển',
      value: 'FREE SHIP',
      price: '25k',
      priceDiscount: '25k',
      startDate: '23/12/2023',
      endDate: '25/12/2023',
    },
    {
      id: '#3',
      name: 'KH Thân thiết',
      value: 'Giảm 50%',
      price: '100k',
      priceDiscount: '50k',
      startDate: '23/12/2023',
      endDate: '25/12/2023',
    },
  ];
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        <View style={styles.header} />
        <View>{SlideShowImage()}</View>
        <View style={styles.feature}>
          <View>
            <Ionicons style={{color: '#88cbd1'}} size={40} name="save" />
            <Text style={styles.titleFeature}>Gói giặt Wizezie</Text>
          </View>
          <View>
            <Ionicons
              style={{color: '#88cbd1'}}
              size={40}
              name="calendar-number"
            />
            <Text style={styles.titleFeature}>Lịch hẹn định kỳ</Text>
          </View>
          <View>
            <Ionicons style={{color: '#88cbd1'}} size={40} name="mail-unread" />
            <Text style={styles.titleFeature}>Góp ý khiếu nại</Text>
          </View>
          <View>
            <Ionicons style={{color: '#88cbd1'}} size={40} name="people" />
            <Text style={styles.titleFeature}>Hỗ trợ tư vấn</Text>
          </View>
        </View>

        <View style={styles.containerViewOrder}>
          <Text style={styles.titleViewOrder}>Đơn giặt gần đây</Text>
          <Pressable>
            <Text style={styles.titleViewOrder}>Xem tất cả</Text>
          </Pressable>
        </View>

        <View style={styles.containerCreateOrder}>
          <View style={styles.squareCreateOrder}>
            <Ionicons style={{color: 'white'}} size={30} name="add-circle" />
            <Text style={{color: 'white'}}>Tạo đơn mới</Text>
          </View>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderOrder}
            horizontal
          />
        </View>
        <Text style={styles.titlemenu}>Bảng giá</Text>
        <Image
          style={styles.PriceTableImg}
          source={require('../../Image/pricetable.png')}
        />
        <View style={styles.containerViewOrder}>
          <Text style={styles.titleViewOrder}>Các chi nhánh gần bạn</Text>
          <Pressable>
            <Text style={styles.titleViewOrder}>Xem tất cả</Text>
          </Pressable>
        </View>
        <FlatList
          data={DATA2}
          keyExtractor={item => item.id}
          renderItem={RenderNearLocation}
          horizontal
        />
        <Text style={styles.titlemenu}>Mini Game săn sao</Text>
        <FlatList
          data={DataMiniGame}
          keyExtractor={item => item.id}
          renderItem={RenderMiniGame}
          horizontal
        />
        <Text style={styles.titlemenu}>Mã giảm giá</Text>
        {DataVoucher.map(item => RenderVoucher(item))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
  header: {},
  feature: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 30,
  },
  titleFeature: {
    color: 'white',
    fontWeight: 'bold',
    width: '65%',
  },
  containerViewOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleViewOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
  squareCreateOrder: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#656b7f',
    marginRight: 10,
  },
  containerCreateOrder: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  PriceTableImg: {
    width: 351,
    height: 200,
    marginTop: 10,
    marginLeft: 15,
    marginRight:30,
    marginBottom: 30,
    borderRadius: 20,
  },
  titlemenu: {
    marginLeft: 20,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize:20
  },
});
