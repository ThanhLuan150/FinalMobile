/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './AddBookingStyle';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const NextAddBookingScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const DeliveryComponent: FC = (): JSX.Element => {
    const deliverys = [
      'Bình thường (24 - 32h)',
      'Siêu tốc (2 - 4h)',
      'Hẹn giao sau',
      'Tự tới tiệm lấy',
    ];
    const [deliveryChecked, setdeliveryChecked] = useState(
      'Bình thường (24 - 32h)',
    );

    const toggleTypedelivery = (type: String) =>
      setdeliveryChecked(deliverys.filter(value => value === type)[0]);
    type ItemProps = {item: any; index: number};
    const RenderTypedelivery = ({item}: ItemProps) => {
      const style = StyleSheet.create({
        deliveryclothesCheckedStyle: {
          backgroundColor: deliveryChecked === item ? '#8888' : '#353B51',
          borderColor: deliveryChecked === item ? '#91d3fa' : '#999999',
        },
      });
      return (
        <TouchableOpacity
          style={{
            ...styles.clothesType,
            ...style.deliveryclothesCheckedStyle,
          }}
          id={item}
          onPress={() => toggleTypedelivery(item)}>
          <Text
            style={{
              ...styles.clothesTypeText,
              color: deliveryChecked === item ? '#91d3fa' : '#fff',
            }}>
            {item}
          </Text>
          <Ionicons
            name={
              deliveryChecked === item ? 'radio-button-on' : 'radio-button-off'
            }
            size={20}
            color={deliveryChecked === item ? '#91d3fa' : '#fff'}
          />
        </TouchableOpacity>
      );
    };
    return (
      <>
        <View style={{...styles.headingTexts, marginTop: 10}}>
          <Text style={styles.headingText}>Vận chuyển</Text>
          <Ionicons name="alert-circle" size={18} color={'#91d3fa'} />
        </View>
        <FlatList
          ListFooterComponent={
            <>
              <SetTimeForDeliveryComponent />
              <NoteFromCusComponent />
            </>
          }
          showsVerticalScrollIndicator={false}
          style={{gap: 5}}
          data={deliverys}
          renderItem={RenderTypedelivery}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </>
    );
  };
  const ChoseReceivingAddressComponent: FC = (): JSX.Element => {
    return (
      <>
        <View style={{...styles.headingTexts, marginTop: 10}}>
          <Text style={styles.headingText}>Vận chuyển</Text>
          <Ionicons name="alert-circle" size={18} color={'#91d3fa'} />
        </View>
        <TouchableOpacity
          style={{
            ...styles.clothesType,
            borderColor: '#999999',
          }}
          onPress={() => {
            navigation.navigate('Maps');
          }}>
          <Text
            style={{
              ...styles.clothesTypeText,
              color: '#fff',
            }}>
            Thêm địa chỉ
          </Text>
          <Ionicons name="chevron-forward-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </>
    );
  };
  const SetTimeForDeliveryComponent: FC = (): JSX.Element => {
    return (
      <>
        <View style={{...styles.headingTexts, marginTop: 10}}>
          <Text style={styles.headingText}>Hẹn giờ shipper tới lấy</Text>
          <Text style={{...styles.headingText, color: '#999999'}}>
            Không bắt buộc*
          </Text>
        </View>
        <TextInput style={{backgroundColor:'#999999', paddingRight: 50, borderRadius: 10}} placeholder="Tùy chọn"/>
      </>
    );
  };

  const NoteFromCusComponent: FC = (): JSX.Element => {
    return (
      <>
        <View style={{...styles.headingTexts, marginTop: 10}}>
          <Text style={styles.headingText}>Ghi chú gửi tới WashWizie</Text>
        </View>
        <TextInput placeholder="" />
      </>
    );
  };

  const NextButton: FC = (): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.ButtonText}>Tiếp</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Đơn mới</Text>
      </View>
      <View style={styles.mainContent}>
        <ChoseReceivingAddressComponent />
        <DeliveryComponent/>
      </View>
      <NextButton />
    </View>
  );
};
