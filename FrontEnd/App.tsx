import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from './android/app/src/Screens/Notification/Notification';
import Chat from './android/app/src/Screens/Notification/Chat';
import DetailChat from './android/app/src/Screens/Notification/DetailChat';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RegisterInformationScreen} from './android/app/src/Screens/Registers/RegisterInformation';
import {OpenScreen} from './android/app/src/Screens/Registers/Open';
import RegisterScreen from './android/app/src/Screens/Registers/RegisterPhone';
import Profile from './android/app/src/Screens/EditProfile/Profile';
import VerifyEmail from './android/app/src/Screens/EditProfile/VerifyEmail';
import SetUpAccount from './android/app/src/Screens/EditProfile/SetUpAccount';
import {AddBookingScreen} from './android/app/src/Screens/Booking/AddBooking';
import {HomePage} from './android/app/src/Screens/Home/HomePage';
import VerificationCodeScreen from './android/app/src/Screens/Registers/VerificationCode';
import KeyboardAvoidingComponent from './android/app/src/Screens/EditProfile/EditProfile';
import RatingScreen from './android/app/src/Screens/Raiting/Raiting';
import RatingSucessfullyScreen from './android/app/src/Screens/Raiting/RaitingSuccessfully';
import EditRatingScreen from './android/app/src/Screens/Raiting/EditRating';
import LoginScreen from './android/app/src/Screens/Login/Login';
import BookScreen from './android/app/src/Screens/Books/OrderIsOnGoing';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {OrderTrackingScreen} from './android/app/src/Screens/Books/OrderTracking';
import {OrderDetail} from './android/app/src/Screens/Books/OrderDetail';
import {ServicePage} from './android/app/src/Screens/AddOrder/Service';
import SearchScreen from './android/app/src/Screens/Home/Search';
import { BranchDetail } from './android/app/src/Screens/AddOrder/BranchDetail';

const Stack = createNativeStackNavigator();

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
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Trang chủ" component={HomePage} />
      <Tab.Screen name="Dịch vụ" component={ServicePage} />
      <Tab.Screen name="Đơn giặt" component={BookScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
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
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
            <Stack.Screen
            name="BranchDetail"
            component={BranchDetail}
            options={{headerShown: false}}
          />
            <Stack.Screen
              name="Addbooking"
              component={AddBookingScreen}
              options={{headerShown: false}}
            />
          <Stack.Screen name="HomeScreen" component={Homestack} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

export default App;
