import React from 'react';
import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const styles = StyleSheet.create({
  Iconwashing: {
    width: 20,
    height: 20,
  },
  iconContainer: {
    borderColor: '#7EB9C1',
    borderWidth: 2.5,
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5A617B',
    borderRadius: 10,
    alignItems: 'center',
   padding:2,
   marginRight:8
  },
  IdOrder: {
    color: 'white',
  },
  reBuyButton:{
    backgroundColor:'#7EB9C1',
    marginTop:20,
    borderRadius:10
  },
  title:{
    fontWeight:'bold',
    padding:10,
    color:'white'
  },
  containerButton:{
   
  }
});