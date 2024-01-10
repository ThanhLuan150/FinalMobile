import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: true,
    text: 'Đánh giá',
    time: '12:00 PM',
    price: '30000 vnd',
  },
  {
    id: '2',
    title: 'Second Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: true,
    text: 'Đánh giá',
    time: '1:30 PM',
    price: '30000 vnd',
  },
  {
    id: '3',
    title: 'Third Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: true,
    text: 'Đánh giá',
    time: '3:45 PM',
    price: '30000 vnd',
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
    status: true,
    text: 'Đánh giá',
    time: '4:00 PM',
    price: '30000 vnd',
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
    status: false,
    text: 'Đánh giá',
    time: '5:15 PM',
    price: '30000 vnd',
  },
  {
    id: '4',
    title: 'Fourth Item',
    image: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
    status: false,
    text: 'Đánh giá',
    time: '4:00 PM',
    price: '30000 vnd',
  },
  {
    id: '5',
    title: 'Fifth Item',
    image: 'https://cdn-icons-png.flaticon.com/512/4596/4596011.png',
    status: false,
    text: 'Đánh giá',
    time: '5:15 PM',
    price: '30000 vnd',
  },
];

type ItemProps = {
  title: string;
  image: string;
  status: boolean;
  text: string;
  time: string;
  price: string;
};

const Item = ({title, image, status, text, time, price}: ItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.leftContent}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.status}>{text}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="arrow-forward" size={20} color={'white'} />
          </View>
        </View>
      </View>
      <View style={styles.rightContent}>
        {status ? (
          <TouchableOpacity style={styles.button}>
            <Text>Hoàn thành</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.status}>Đã huỷ đơn</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

function AllOrder() {
  return (
    <ScrollView style={styles.container}>
      {DATA.map(item => (
        <Item
          key={item.id}
          title={item.title}
          image={item.image}
          text={item.text}
          time={item.time}
          status={item.status}
          price={item.price}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#5A617B',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    borderRadius: 10,
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
  price: {
    fontSize: 12,
    color: 'white',
  },
  cancelButton: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#c25c5d',
  },
  cancelItem: {
    backgroundColor: '#8B0000',
  },
  iconContainer: {
    marginLeft: 10,
    left: '50%',
    bottom: '10%',
  },
  container: {
    backgroundColor: '#353B51',
    flex: 1,
    padding: 20,
  },
});

export default AllOrder;
