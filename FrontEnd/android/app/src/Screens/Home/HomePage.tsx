/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';

import {Header} from './components/Header';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
import { RenderVoucher } from './components/Voucher';
import { RenderheaderFlastlist } from './RenderheaderFlastlist';
import styles from '../../Styles/HomePage';
export const HomePage = () => {
  const {data} = useQuery({
    queryKey: ['Voucher'],
    queryFn: async () =>
      axios
        .get('https://b38e-14-176-231-248.ngrok-free.app/api/Voucher')
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
