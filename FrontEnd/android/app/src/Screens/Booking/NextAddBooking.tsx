/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, {FC, useState} from 'react';
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
import {useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {AsyncStorage} from 'react-native';
import axios from 'axios';
import {APIlink} from '../../Hook/API';
import {Order} from './AddBooking';

export const NextAddBookingScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const route = useRoute();
  const newOrder = route.params;
  const [nextOrder, setNextOrder] = useState(newOrder);
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
    const RenderTypedelivery = ({item, index}: ItemProps) => {
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
          onPress={() => {
            toggleTypedelivery(item);
            setNextOrder(Object.assign(nextOrder, {id_transports: index + 1}));
          }}>
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
          ListFooterComponent={<NoteFromCusComponent />}
          showsVerticalScrollIndicator={false}
          style={{gap: 5}}
          data={deliverys}
          renderItem={RenderTypedelivery}
          keyExtractor={(item, index) => `${item}-${index}`}
        />
      </>
    );
  };

  const NoteFromCusComponent: FC = (): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (text: any) => {
      setInputValue(text);
      setNextOrder(Object.assign(nextOrder, {note: text}));
    };
    return (
      <>
        <View style={{...styles.headingTexts, marginTop: 10}}>
          <Text style={styles.headingText}>Ghi chú gửi tới WashWizie</Text>
        </View>
        <TextInput
          style={{
            backgroundColor: '#899999',
            paddingLeft: 10,
            borderRadius: 10,
            height: 100,
          }}
          placeholder=""
          value={inputValue}
          onChangeText={handleInputChange}
        />
      </>
    );
  };
  const queryClient = useQueryClient();
  const postBooking = useMutation({
    mutationFn: async (data: any) => {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.post(`${APIlink}/api/orders`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
    onSettled: () => {
      console.log('vao day get');
      queryClient.invalidateQueries({queryKey: ['getUser']});
    },
  });
  interface NewData {
    id_user: number;
    id_branch: number;
    id_service: number;
    id_typeoflaundries: number;
    id_transports: number;
    id_washingliquids: number;
    id_fabricsofteners: number;
    id_extraservices: number;
    id_voucher: number;
    delivery_time: string;
    address: string;
    note: string;
    total_price: string;
}
  const rearrangeKeys = (originalData: any): NewData => {
    return {
      id_user: originalData.id_user,
      id_branch: originalData.id_branch,
      id_service: originalData.id_service,
      id_typeoflaundries: originalData.id_typeoflaundries,
      id_transports: originalData.id_transports,
      id_washingliquids: originalData.id_washingliquids,
      id_fabricsofteners: originalData.id_fabricsofteners,
      id_extraservices: originalData.id_extraservices,
      id_voucher: originalData.id_voucher,
      delivery_time: originalData.delivery_time,
      address: originalData.address,
      note: originalData.note,
      total_price: originalData.total_price,
    };
  };
  const NextButton: FC = (): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => {
          // navigation.navigate('ConfirmBooking', newOrder);
          postBooking.mutate(nextOrder);
          console.log('Được ',rearrangeKeys(nextOrder));
          navigation.navigate('Trang chủ');
        }}>
        <Text style={styles.ButtonText}>Đặt đơn</Text>
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
        <DeliveryComponent />
      </View>
      <NextButton />
    </View>
  );
};
