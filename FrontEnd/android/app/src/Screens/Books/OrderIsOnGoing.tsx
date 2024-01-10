import * as React from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllOrder from './AllOrder';
import styles from '../../Styles/OrderIsOnGoing';
const DATA = [
  {
    id: '1',
    title: 'First Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: 'Đang xử lý...',
    time: '12:00 PM',
  },
  {
    id: '2',
    title: 'Second Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: 'Đang xử lý...',
    time: '1:30 PM',
  },
  {
    id: '3',
    title: 'Third Item',
    image:
      'https://i.pinimg.com/564x/87/2c/73/872c73c3cb5b5465132375eae3396d1d.jpg',
    status: 'Đang xử lý...',
    time: '3:45 PM',
  },
];

type ItemProps = {
  title: string;
  image: string;
  status: string;
  time: string;
};

const Item = ({ title, image, status, time, navigation }: ItemProps & { navigation: any }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate('OrderTrackingScreen', { title, image, status, time })}>
    <View style={styles.leftContent}>
      <Image source={{uri: image}} style={styles.image} />
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
  </TouchableOpacity>
);

export function OrderIsOnGoing(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            title={item.title}
            image={item.image}
            status={item.status}
            time={item.time}
            navigation={navigation}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function BookScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#353B51',
        },
      }}>
      <Tab.Screen
        name="Tất cả đơn hàng"
        component={AllOrder}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({focused}) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              Tất cả đơn hàng
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Đang diễn ra"
        component={OrderIsOnGoing}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarLabel: ({focused}) => (
            <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
              Đang diễn ra
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export const App = () => (
  <NavigationContainer>
    <BookScreen />
  </NavigationContainer>
);

