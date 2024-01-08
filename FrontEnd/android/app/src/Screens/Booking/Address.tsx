import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useRef} from 'react';
import {useState} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  PermissionsAndroid,
} from 'react-native';

import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import MapViewDirections from 'react-native-maps-directions';
import Ionicons from 'react-native-vector-icons/Ionicons';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: ' Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const MapsScreen: FC = (): JSX.Element => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const map = useRef<MapView | null>(null);
  const navigation = useNavigation();

  const INITRIAL_LAT = 16.048079;
  const INITRIAL_LNG = 108.20723;
  const INITRIAL_POSITION = {
    latitude: INITRIAL_LAT,
    longitude: INITRIAL_LNG,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);
  const searchPlace = async () => {
    if (!searchText.trim().length) {
      return;
    }
    const google_APIs_url =
      'https://maps.googleapis.com/maps/api/place/textsearch/json';
    const input = searchText.trim();
    const location = `${INITRIAL_LAT},${INITRIAL_LNG}&radius=2000`;
    const url = `${google_APIs_url}?query=${input}&location=${location}&key=AIzaSyBbWcBrNYVn7rA5o7LEYDZxYGDDKfqhGcg`;
    // console.log(url);
    try {
      const resp = await fetch(url);
      const json = await resp.json();
      // console.log(json);
      if (json && json.results) {
        const coords: LatLng[] = [];
        for (const item of json.results) {
          coords.push({
            latitude: item.geometry.location.lat,
            longitude: item.geometry.location.lng,
          });
          console.log(item.geometry, item.formatted_address);
        }
        setResults(json.results);
        if (coords.length) {
          map.current?.fitToCoordinates(coords, {
            edgePadding: {
              top: 50,
              bottom: 50,
              right: 50,
              left: 50,
            },
            animated: true,
          });
          Keyboard.dismiss();
        }
      }
    } catch (error) {}
  };
  return (
    <>
      <MapView
        ref={map}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={INITRIAL_POSITION}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation>
        {results.length
          ? results.map((item, i) => {
              const coord: LatLng = {
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng,
              };
              return (
                <Marker
                  key={`search-item-${i}`}
                  coordinate={coord}
                  title={item.name}
                  description=""
                />
              );
            })
          : null}
        <MapViewDirections
          origin={{
            latitude: INITRIAL_LAT,
            longitude: INITRIAL_LNG,
            }}
          destination={{
            latitude: 16.06110787989272,
            longitude: 108.2450018298927,
          }
          }
          apikey={'AIzaSyBbWcBrNYVn7rA5o7LEYDZxYGDDKfqhGcg'}
          strokeWidth={5}
          strokeColor="darkgreen"
        />
      </MapView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 10,
        }}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={35} color={'black'} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Tìm kiếm chi nhánh"
            placeholderTextColor={'gray'}
            style={styles.searchInput}
            onChangeText={setSearchText}
          />
          <TouchableOpacity>
            <Ionicons name="mic-outline" size={25} color={'gray'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={searchPlace}>
            <Ionicons name="search-outline" size={25} color={'gray'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    flex: 1,
  },
  searchBar: {
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
  backicon: {
    // position: 'absolute',
    // left: 10,
    // top: 25,
  },
});
