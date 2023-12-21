import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusOrder } from './components/StatusOrder';

export const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.CustomerIf}>
        <Text style={styles.title}>
          <Ionicons color={'#7EB9C1'} name="location"></Ionicons>Địa chỉ nhận
          hàng
        </Text>
        <Text style={styles.titleif}>Nguyễn Văn A</Text>
        <Text style={styles.titleif}>0932307025</Text>
        <Text style={styles.titleif}>101B Lê Hữu Trác</Text>
      </View>
      <Text style={styles.DetailTitle}>
        <Ionicons color={'#7EB9C1'} name="basket"></Ionicons>Chi tiết đơn hàng
      </Text>
      <View style={styles.DetailIfContainer}>
        <Text style={styles.DetailIf}>Giặt đồ</Text>
        <Text style={styles.DetailIf}>7kg</Text>
        <Text style={styles.DetailIf}>70.000</Text>
      </View>
      <View style={styles.DetailIfContainer}>
        <Text style={styles.DetailIf}>Giặt đồ</Text>
        <Text style={styles.DetailIf}>7kg</Text>
        <Text style={styles.DetailIf}>70.000</Text>
      </View>
      <View style={styles.DetailIfContainer}>
        <Text style={styles.DetailIf}>Giặt đồ</Text>
        <Text style={styles.DetailIf}>7kg</Text>
        <Text style={styles.DetailIf}>70.000</Text>
      </View>
      <View style={styles.underLine}></View>
      <View style={styles.generalIfContainer}>
        <View style={styles.generalIf}>
          <Text  style={styles.titlegeneralIf}>Ngày nhận dự kiến:</Text>
          <Text  style={styles.titlegeneralIf}>21/12/2023</Text>
        </View>
        <View style={styles.generalIf}>
          <Text style={styles.titlegeneralIf}>Tổng đơn:</Text>
          <Text style={styles.titlegeneralIf}>200.000đ</Text>
        </View>
      </View>

      <Text style={styles.PaymentMethod}> <Ionicons color={'#7EB9C1'} name="wallet"></Ionicons>Phương thức thanh toán</Text>
      <Text style={styles.NamePaymentMethod}>Thanh toán bằng thẻ ngân hàng</Text>

      <View style={styles.StatusContainer}>
        <Text style={styles.titleStatus}>🕑 Tình trạng đơn hàng</Text>
        <StatusOrder/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
  title: {
    color: '#7EB9C1',
    fontWeight: 'bold',
  },
  titleif: {
    color: 'white',
  },
  CustomerIf: {
    marginHorizontal: 30,
    marginVertical: 30,

  },
  DetailTitle: {
    color: '#7EB9C1',
    fontWeight: 'bold',
    marginHorizontal: 30,
  },
  DetailIf: {
    color: 'white',
  },
  DetailIfContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:5
  },
  underLine: {
    backgroundColor: 'white',
    width: 340,
    height: 1.5,
    marginTop: 10,
    marginBottom:10,
    marginHorizontal: 30,
  },
  generalIfContainer: {
    marginHorizontal: 30,
  },
  generalIf:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5
  },
  titlegeneralIf:{
    color:'white'
  },
  PaymentMethod:{
    color:'#7EB9C1',
    marginHorizontal:30,
    fontWeight:'bold',
    marginTop:10,
    marginBottom:10
  },
  NamePaymentMethod:{
    marginHorizontal:30,
    color:'white'
  },
  StatusContainer:{
    marginHorizontal:30,
    marginTop:20
  },
  titleStatus:{
    color:'#7EB9C1'
  },
  iconStatusfullbg: {
    width: 20,
    height: 20,
    backgroundColor: '#AADDFA',
    borderRadius: 15,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
