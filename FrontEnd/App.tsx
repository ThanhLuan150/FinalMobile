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
            if (route.name === 'Homes') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Details') {
              iconName = focused ? 'list-sharp' : 'list-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
              // You can return any component that you like here!
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: '#91d3fa',
          headerShown: false,
        })}>
        <Tab.Screen name="Homes" component={HomeDrawerScreen} />
        <Tab.Screen name="Details" component={DetailScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
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
