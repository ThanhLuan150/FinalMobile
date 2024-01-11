import React, {FC} from 'react';
// import {useState} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

// import {useNavigation} from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './AddBookingStyle';
// import {useOrderStore} from '../../Hook/useAddNewOder';
import {useRoute} from '@react-navigation/native';
export const ConfirmBookingScreen: FC = (): JSX.Element => {
  const route = useRoute();
  const nextOrder = route.params;
  return (
    <View>
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => {
          console.log(nextOrder);
        }}>
        <Text style={styles.ButtonText}>Đặt đơn</Text>
      </TouchableOpacity>
    </View>
  );
};
