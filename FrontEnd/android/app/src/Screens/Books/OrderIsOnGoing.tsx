import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import { renderOrder } from './components/Order';

const DATA = [
  {
    id: 'bd7acbea',
    status: 'success',
    date: '12/12/2023',
  },
  {
    id: '3ac68afc',
    status: 'success',
    date: '12/12/2023',
  },
  {
    id: '58694a0f',
    status: 'success',
    date: '12/12/2023',
  },
];



export const OrderIsOnGoing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.title}>Đang diễn ra</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.title}>Tất cả đơn hàng</Text>
        </Pressable>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={renderOrder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#5A617B',
    borderRadius: 10,
    margin: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: '#AADDFA',
    padding: 5,
  },
  
});
