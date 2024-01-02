import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { View} from 'react-native';
import styles from '../../../Styles/Voucher';
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

