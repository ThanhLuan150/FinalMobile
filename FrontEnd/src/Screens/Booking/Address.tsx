import React, {FC} from 'react';
import {useState} from 'react';

import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MapsScreen: FC = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const searchPlace = () => {
    if (!searchText.trim().length) {
      return;
    }
  };
  const INITRIAL_POSITION = {
    latitude: 16.048079,
    longitude: 108.20723,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={INITRIAL_POSITION}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation
      />
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Tìm kiếm chi nhánh"
          placeholderTextColor={'gray'}
          style={styles.searchInput}
        />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={25} color={'gray'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={25} color={'gray'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  },
  searchBar: {
    position: 'absolute',
    top: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    gap: 10,
    borderRadius: 50,
  },
  searchInput: {
    color: 'black',
    width: 150,
  },
});
