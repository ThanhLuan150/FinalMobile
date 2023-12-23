import React, {FC} from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const AddBookingScreen: FC = (): JSX.Element => {
  navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          style={styles.backicon}
          name="chevron-back-outline"
          size={35}
        />
        <Text style={styles.headertext}>Đơn mới</Text>
      </View>
      <View style={styles.mainContent}>
        <View style={styles.chooselocation}>
          <View style={styles.locationtexts}>
            <Text style={styles.locationtext}>Chi nhánh giặt:</Text>
            <TouchableOpacity>
              <Text style={styles.mapslink}>Thay đổi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.locationdetail}>
            <Text>ádflk</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
  },
  mainContent: {
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  backicon: {
    position: 'absolute',
    left: 10,
  },
  headertext: {
    fontSize: 20,
  },
  mapslink: {
    fontSize: 12,
  },
  locationtext: {
    fontWeight: '700',
  },
  locationtexts: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chooselocation: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationdetail: {
    width: '100%',
    height: 80,
    backgroundColor: '#999999',
    marginTop: 15,
    borderRadius: 15,
    padding: 10,
  },
});
