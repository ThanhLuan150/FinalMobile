/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';

import {Header} from './components/Header';
import {RenderVoucher} from './components/Voucher';
import {RenderheaderFlastlist} from './RenderheaderFlastlist';
import styles from '../../Styles/HomePage';
import {useRenderHomePage} from '../../Hook/useRenderHomePage';
export const HomePage = () => {
  const {voucher} = useRenderHomePage();
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
