import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {renderOrder} from './components/Order';
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
      <View style={styles.statusContainer}>
        <View style={styles.iconStatusfullbg}>
          <Text style={styles.tickIcon}>√</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.iconStatusfullbg}>
          <Text style={styles.tickIcon}>√</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.iconStatus}></View>
        <View style={styles.line}></View>
        <View style={styles.iconStatus}></View>
        <View style={styles.line}></View>
        <View style={styles.iconStatus}></View>
        <View style={styles.line}></View>
        <View style={styles.iconStatus}></View>
      </View>

      <View style={styles.message}>
        <Image
          style={styles.icon}
          source={require('../../Image/iconForViewOrder.png')}
        />
        <Text style={styles.Statustitle}>Đang giặt đồ...</Text>
        <Text style={styles.title}>
          Xin vui lòng chờ, chúng mình vẫn đang xử lý đơn hàng hàng của bạn
        </Text>
        <Text style={styles.title}>
            🕗Sẽ hoàn tất trong 2 tiếng
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
    width: 300,
    height: 300,
    margin: 50,
  },
  message: {
    alignItems: 'center',
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
    padding: 15,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
  },
  titlebutton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  iconClock: {
    width: 50,
    height: 50,
  },
  iconStatus: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor:'#AADDFA',
    borderWidth:2,
    alignItems: 'center',
  },
  iconStatusfullbg: {
    width: 20,
    height: 20,
    backgroundColor: '#AADDFA',
    borderRadius: 15,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: '#AADDFA',
  },
  tickIcon: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
