import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../../Styles/Order';
export const renderOrder = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.Iconwashing}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
          }}
        />
      </View>
      <View>
        <Text style={styles.IdOrder}>#{item.id}</Text>
        <Text style={styles.IdOrder}>{item.date}</Text>
        <TouchableOpacity >
            <Text style={styles.title}>Đánh giá </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerButton}>
        <Text style={styles.IdOrder}>{item.price}</Text>
        <TouchableOpacity style={styles.reBuyButton}>
            <Text style={styles.title}>Đặt lại </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};