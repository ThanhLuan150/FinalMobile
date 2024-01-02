import React, {FC} from 'react';
import {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ServicesScreen: FC = (): JSX.Element => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Ionicons name="add-circle-sharp" />
        <Text>Đơn giặt mới</Text>
      </View>
      <View style={styles.headingsBlock}>
        <Text style={styles.heading}>Hình thức giặt chính:</Text>
        <Text style={styles.subheading}>
          Giúp bạn hiểu hơn về sự hoạt động của mỗi các giặt!
        </Text>
      </View>
      <View>
        <View>
          <Ionicons name="shirt" size={100} color={'#91d3fa'} />
          <View>
            <Text>Giặt Sấy</Text>
            <Text>...ádfasfasgkjlansflak</Text>
          </View>
        </View>
        <View>
          <Ionicons name="shirt-outline" size={100} color={'#91d3fa'} />
          <View>
            <Text>Giặt Hấp</Text>
            <Text>...ádfasfasgkjlansflak</Text>
          </View>
        </View>
      </View>
      <View style={styles.headingsBlock}>
        <Text style={styles.heading}>Bảng giá tham khảo:</Text>
        <Text style={styles.subheading}>
          Giúp bạn hiểu hơn về sự hoạt động của mỗi các giặt!
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    padding: 15,
  },
  headingsBlock: {

  },
  heading: {
    fontWeight: '700',
    color: '#91d3fa',
    marginBottom: 3,
  },
  subheading: {},
});
