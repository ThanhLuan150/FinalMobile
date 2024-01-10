import React from 'react';
import { Image,Text, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from '../../Styles/OrderTracking';
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
