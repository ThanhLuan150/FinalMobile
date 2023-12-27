import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function OrderTrackingScreen(): React.JSX.Element {
  const route = useRoute();

  type ItemProps = {
    title: string;
    image: string;
    status: string;
    time: string;
  };
  const { title, image, status, time } = route.params as ItemProps;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <View style={styles.leftContent}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>{status}</Text>
          </View>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.button}>
            <Text>Giặt thường</Text>
          </View>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Image
        source={require('../../Image/trackingscreen.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.containTitle}>
        <Text style={styles.boldText}>Đang giặt đồ ...</Text>
        {'\n'}
        Vui lòng chờ, chúng mình đang xử lý đơn hơn của bạn.
      </Text>

      <TouchableOpacity
        style={styles.buttonDetail}
        onPress={() => navigation.navigate('OrderDetail')}>
        <Text style={styles.buttonText}>Chi tiết đơn hàng</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353B51',
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: '#5A617B',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    borderRadius: 10,
    bottom:'20%',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    alignItems: 'flex-end',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  status: {
    fontSize: 14,
    color: 'white',
    top: '10%',
  },
  button: {
    backgroundColor: '#CCEBFC',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  time: {
    fontSize: 12,
    color: 'white',
  },
  containTitle: {
    height: '100%',
    position: 'absolute',
    color: 'white',
    top: '70%',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  imageStyle: {
    bottom:'10%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonDetail: {
    backgroundColor: '#CCEBFC',
    padding: 20,
    top:'10%',
    borderRadius: 10,
    width: '80%',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
