import {FlatList, Pressable, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {SlideShowImage} from './components/SlideShowImage';
import {RenderMiniGame} from './components/RenderMiniGame';
import {RenderNearLocation} from './components/NearLocation';
import {Image} from 'react-native';
import {renderOrder} from './components/Order';
import styles from '../../Styles/RenderheaderFlastlist';
import {useRenderHomePage} from '../../Hook/useRenderHomePage';
import {useNavigation} from '@react-navigation/native';
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
  const {minigame, branch} = useRenderHomePage();
  const navigation = useNavigation();
  const handleNavigationService = () => {
    navigation.navigate('Dịch vụ');
  };
  return (
    <View style={{position: 'relative'}}>
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
      <View style={styles.ContainerPriceTableImg}>
        <TouchableOpacity onPress={handleNavigationService}>
          <Image
            style={styles.PriceTableImg}
            source={require('../../Image/pricetable.png')}
          />
        </TouchableOpacity>
      </View>
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
