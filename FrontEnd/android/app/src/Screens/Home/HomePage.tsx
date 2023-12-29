/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {Header} from './components/Header';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { RenderVoucher } from './components/Voucher';
import { RenderheaderFlastlist } from './RenderheaderFlastlist';

export const HomePage = () => {
  // const DataVoucher = [
  //   {
  //     id: '#1',
  //     name: 'Thành viên mới',
  //     value: 'Giảm 20%',
  //     price: '100k',
  //     priceDiscount: '20k',
  //     startDate: '23/12/2023',
  //     endDate: '25/12/2023',
  //   },
  //   {
  //     id: '#2',
  //     name: 'Mã vận chuyển',
  //     value: 'FREE SHIP',
  //     price: '25k',
  //     priceDiscount: '25k',
  //     startDate: '23/12/2023',
  //     endDate: '25/12/2023',
  //   },
  //   {
  //     id: '#3',
  //     name: 'KH Thân thiết',
  //     value: 'Giảm 50%',
  //     price: '100k',
  //     priceDiscount: '50k',
  //     startDate: '23/12/2023',
  //     endDate: '25/12/2023',
  //   },
  // ];
  const {data} = useQuery({
    queryKey: ['Voucher'],
    queryFn: async () =>
      axios
        .get('https://e636-14-176-231-248.ngrok-free.app/api/Voucher')
        .then(res => res.data),
  });
  console.log('voucher',data);
  
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        ListHeaderComponent={RenderheaderFlastlist}
        renderItem={RenderVoucher}
        keyExtractor={item => item.id_voucher}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
  header: {},
});
