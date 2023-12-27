/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Notification from './android/app/src/Screens/Notification/Notification';
import Chat from './android/app/src/Screens/Notification/Chat';
import DetailChat from './android/app/src/Screens/Notification/DetailChat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, Text} from 'react-native';
import {RegisterInformationScreen} from './android/app/src/Screens/Registers/RegisterInformation';
import {OpenScreen} from './android/app/src/Screens/Registers/Open';
import RegisterScreen from './android/app/src/Screens/Registers/RegisterPhone';
import Profile from './android/app/src/Screens/EditProfile/Profile';
import VerifyEmail from './android/app/src/Screens/EditProfile/VerifyEmail';
import SetUpAccount from './android/app/src/Screens/EditProfile/SetUpAccount';
import { HomePage } from './android/app/src/Screens/Home/HomePage';
import VerificationCodeScreen from './android/app/src/Screens/Registers/VerificationCode';
import KeyboardAvoidingComponent from './android/app/src/Screens/EditProfile/EditProfile';
import RatingScreen from './android/app/src/Screens/Raiting/Raiting';
import RatingSucessfullyScreen from './android/app/src/Screens/Raiting/RaitingSuccessfully';
import EditRatingScreen from './android/app/src/Screens/Raiting/EditRating';
import LoginScreen from './android/app/src/Screens/Login/Login';
import LoginSuccessfullyScreeen from './android/app/src/Screens/Login/LoginSuccessfully';
import BookScreen from './android/app/src/Screens/Books/OrderIsOnGoing';
import { OrderTrackingScreen } from './android/app/src/Screens/Books/OrderTracking';
import { OrderDetail } from './android/app/src/Screens/Books/OrderDetail';
const Stack = createNativeStackNavigator();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Homes(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailChat"
            component={DetailChat}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
    </GestureHandlerRootView>)}

const DetailScreen = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};


const Homestack = () => {
  return (
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
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarInactiveTintColor: '#91d3fa',
        tabBarActiveTintColor: '#91d3fa',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#353B51',
        },
      })}>
      <Tab.Screen name="Trang chủ" component={HomePage} />
      <Tab.Screen name="Dịch vụ" component={DetailScreen} />
      <Tab.Screen name="Đơn giặt" component={BookScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false,
       }}>
        <Stack.Screen
          name="Open"
          component={OpenScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterInformationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="VerificationCodeScreen"
          component={VerificationCodeScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="loginSuccessfullyScreeen"
          component={LoginSuccessfullyScreeen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SetUpAccount"
          component={SetUpAccount}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="EditProfile"
          component={KeyboardAvoidingComponent}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="RatingScreen"
          component={RatingScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="RatingSucessfullyScreen"
          component={RatingSucessfullyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditRatingScreen"
          component={EditRatingScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
            name="Notification"
            component={Notification}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="DetailChat"
            component={DetailChat}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookScreen"
            component={BookScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderTrackingScreen"
            component={OrderTrackingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OrderDetail"
            component={OrderDetail}
            options={{headerShown: false}}
          />
        <Stack.Screen name="HomeScreen" component={Homestack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
