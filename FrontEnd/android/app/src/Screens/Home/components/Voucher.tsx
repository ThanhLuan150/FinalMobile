import React from 'react';
import {Pressable, Text} from 'react-native';
import {StyleSheet, View} from 'react-native';

export const RenderVoucher = (item:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.Left}>
        <Text style={styles.nameVoucher}>{item.name}</Text>

        <View style={styles.containerVoucherValue}>
          <Text style={styles.valueVoucher}>{item.value}</Text>
        </View>
      </View>
      <View style={styles.Center}>
        <Text style={styles.Value}>Đơn tối thiểu {item.price}</Text>
        <Text style={styles.Value}>Giảm tối đa {item.priceDiscount}</Text>
        <Text style={styles.Value}>
          🕗{item.startDate}-{item.endDate}
        </Text>
      </View>
      <View style={styles.Right}>
        <Pressable style={styles.button}>
          <Text style={styles.TitleButton}>Dùng ngay</Text>
        </Pressable>
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
    flex: 7,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius:10,
    marginRight:10
  },
  Center: {
    backgroundColor: '#535A74',
    height: 100,
    flex: 12,
    justifyContent: 'center',
  },
  Right: {
    backgroundColor: '#535A74',
    height: 90,
    flex: 4,
    justifyContent: 'center',
    marginRight: 30,
  },
  button: {
    borderColor: 'white',
    borderWidth: 1,
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
  },
});
