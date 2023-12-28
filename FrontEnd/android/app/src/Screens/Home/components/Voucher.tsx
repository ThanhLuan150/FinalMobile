import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet, View} from 'react-native';

export const RenderVoucher = ({item}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.Left}>
        <Text style={styles.nameVoucher}>{item.name_voucher}</Text>

        <View style={styles.containerVoucherValue}>
          <Text style={styles.valueVoucher}>{item.code}</Text>
        </View>
      </View>
      <View style={styles.Center}>
        <Text style={styles.Value}>Đơn tối thiểu 50k</Text>
        <Text style={styles.Value}>Giảm tối đa {item.discount_amount}</Text>
        <Text style={styles.Value}>
          🕗{item.start_date} đến {item.end_date}
        </Text>
      </View>
      <View style={styles.Right}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.TitleButton}>Dùng ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#535A74',
    borderRadius:10,
    marginLeft: 20,
    marginRight:10,
    marginTop:10,
    marginBottom:20,
  },
  Left: {
    backgroundColor: '#6D7693',
    height: 100,
    flex: 1.5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius:10,
    marginRight:10
  },
  Center: {
    backgroundColor: '#535A74',
    height: 100,
    flex: 2,
    justifyContent: 'center',
  },
  Right: {
    backgroundColor: '#535A74',
    height: 90,
    flex: 1,
    justifyContent: 'center',
    marginRight: 30,
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    padding:10,
    borderRadius: 10,
    alignItems: 'center',
  },
  TitleButton: {
    color: 'white',
  },
  ball: {
    backgroundColor: 'black',
    width: 20,
    height: 20,
    borderRadius: 50,
  },
  nameVoucher: {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
    fontSize:13,
    paddingTop:5,
    paddingBottom:5,
    paddingLeft:2,
    paddingRight:2,
    borderTopLeftRadius: 10,
  },
  valueVoucher: {
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center',
  },
  containerVoucherValue: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Value: {
    color: 'white',
    fontSize:10
  },
});
