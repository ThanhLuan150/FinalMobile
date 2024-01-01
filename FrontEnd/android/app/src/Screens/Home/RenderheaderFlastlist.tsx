import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {SlideShowImage} from './components/SlideShowImage';
import {RenderMiniGame} from './components/RenderMiniGame';
import {RenderNearLocation} from './components/NearLocation';
import {Image} from 'react-native';
import {renderOrder} from './components/Order';
import {useQueries} from '@tanstack/react-query';
import axios from 'axios';
export const RenderheaderFlastlist = () => {
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

  const [minigame, branch] = useQueries({
    queries: [
      {
        queryKey: ['minigame'],
        queryFn: async () =>
          axios
            .get('https://6d5d-2402-9d80-403-e55a-fca1-a7f4-aea5-2f40.ngrok-free.app/api/minigame')
            .then(res => res.data),
      },
      {
        queryKey: ['branch'],
        queryFn: async () =>
          axios
            .get('https://6d5d-2402-9d80-403-e55a-fca1-a7f4-aea5-2f40.ngrok-free.app/api/branch')
            .then(res => res.data),
      },
    ],
  });


  return (
    <View>
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
        <TouchableOpacity>
          <Text style={styles.titleViewOrder}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerCreateOrder}>
        <TouchableOpacity style={styles.squareCreateOrder}>
          <Ionicons style={{color: 'white'}} size={30} name="add-circle" />
          <Text style={{color: 'white'}}>Tạo đơn mới</Text>
        </TouchableOpacity>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderOrder}
          horizontal
        />
      </View>
      <Text style={styles.titlemenu}>Bảng giá</Text>
      <View style={styles.ContainerPriceTableImg}><Image
        style={styles.PriceTableImg}
        source={require('../../Image/pricetable.png')}
      /></View>
      
      <View style={styles.containerViewOrder}>
        <Text style={styles.titleViewOrder}>Các chi nhánh gần bạn</Text>
        <Pressable>
          <Text style={styles.titleViewOrder}>Xem tất cả</Text>
        </Pressable>
      </View>
      <FlatList
        data={branch.data}
        keyExtractor={item => item.id}
        renderItem={RenderNearLocation}
        horizontal
        style={styles.FlashlistRenderLocation}
      />
      <Text style={styles.titlemenu}>Mini Game săn sao</Text>
      <FlatList
        data={minigame.data}
        keyExtractor={item => item.id_minigame}
        renderItem={RenderMiniGame}
        horizontal
      />
      <Text style={styles.titlemenu}>Mã giảm giá</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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
    fontSize: 16,
  },
  squareCreateOrder: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    backgroundColor: '#656b7f',
    marginRight: 10,
  },
  containerCreateOrder: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
  },
  PriceTableImg: {
    width: 350,
    height: 200,
    objectFit: 'fill',
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  titlemenu: {
    marginLeft: 20,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  FlashlistRenderLocation: {
    marginRight: 10,
  },
  ContainerPriceTableImg:{
    alignItems:'center'
  }
});
