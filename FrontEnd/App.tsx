import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text} from 'react-native';

const HomeDrawerScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};
const DetailScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Detail</Text>
    </View>
  );
};
const SettingsStackScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Setting</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused, color, size}) => {
            let iconName: string = '';
            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Dịch vụ') {
              iconName = focused ? 'shirt-sharp' : 'shirt-outline';
            } else if (route.name === 'Đơn giặt') {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (route.name === 'Tài khoản') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: '#91d3fa',
          tabBarActiveTintColor: '#91d3fa',
          headerShown: false,
          tabBarStyle:{
            backgroundColor: '#353B51',
          },
        })}>
        <Tab.Screen name="Trang chủ" component={HomeDrawerScreen} />
        <Tab.Screen name="Dịch vụ" component={DetailScreen} />
        <Tab.Screen name="Đơn giặt" component={SettingsStackScreen} />
        <Tab.Screen name="Tài khoản" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default App;
