import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const OrderDetail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Order Detail Screen</Text>
      <Text style={styles.text}>Order ID: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353B51',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});