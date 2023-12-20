import React from 'react';
import { Image, Pressable, StyleSheet, Text, View} from 'react-native';
import { renderOrder } from './components/Order';
const DATA = [
  {
    id: 'bd7acbea',
    status: 'success',
    date: '12/12/2023',
  },
  {
    id: '3ac68afc',
    status: 'success',
    date: '12/12/2023',
  },
  {
    id: '58694a0f',
    status: 'success',
    date: '12/12/2023',
  },
];

export const OrderTracking = () => {
  return (
    <View style={styles.container}>
      {renderOrder({item: DATA})}
      <Image
        style={styles.icon}
        source={require('../../Image/iconForViewOrder.png')}
      />
      <View style={styles.message}>
        <Text style={styles.Statustitle}>Đang giặt đồ...</Text>
        <Text style={styles.title}>
          Xin vui lòng chờ, chúng mình vẫn đang xử lý đơn hàng hàng của bạn
        </Text>
        <Text style={styles.title}>
          <Image
           style={styles.iconClock}
            source={require('../../Image/clockIcon.png')}
          />
          Sẽ hoàn tất trong 2 tiếng
        </Text>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.titlebutton}>Chi tiết đơn đặt</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
   
  },
  icon: {
    width: 350,
    height: 350,
    margin:50,
  },
  message: {
    alignItems: 'center',
    margin: 10,
  },
  Statustitle: {
    color: 'white',
    fontSize: 25,
  },
  title: {
    color: 'white',
    fontWeight: '300',
  },
  button: {
    backgroundColor: '#7EB9C1',
    padding: 10,
    borderRadius: 15,
  },
  titlebutton: {
    color: 'black',
  },
  iconClock:{
    width:50,
    height:50
  }
});
