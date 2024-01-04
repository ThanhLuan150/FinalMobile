/* eslint-disable react-native/no-inline-styles */
<<<<<<< HEAD
import React, { useEffect } from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
=======
import React from 'react';
import {FlatList, View} from 'react-native';
>>>>>>> cae8b2a49f71a588f1a8f200fc1722633172fcb9

import {Header} from './components/Header';
import {RenderVoucher} from './components/Voucher';
import {RenderheaderFlastlist} from './RenderheaderFlastlist';
import styles from '../../Styles/HomePage';
import {useRenderHomePage} from '../../Hook/useRenderHomePage';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export const HomePage = () => {
  const {data} = useQuery({
    queryKey: ['Voucher'],
    queryFn: async () =>
      axios
<<<<<<< HEAD
        .get('https://fakestoreapi.com/products')
        .then(res => res.data),
  });
  console.log('voucher',data);
=======
        .get('https://11b8-2402-9d80-41c-2e10-8c41-b1d9-1301-ee09.ngrok-free.app/api/Voucher')
        .then(res => res.data),
  });
  console.log('voucher',data); 
  const {voucher} = useRenderHomePage();

>>>>>>> cae8b2a49f71a588f1a8f200fc1722633172fcb9
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={voucher.data}
        ListHeaderComponent={RenderheaderFlastlist}
        renderItem={RenderVoucher}
        keyExtractor={item => item.id_voucher}
      />
    </View>
  );
};
