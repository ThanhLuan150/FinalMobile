/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image,Text, View} from 'react-native';
import styles from '../../../Styles/NearLocation';
export const RenderNearLocation = ({item}: any) => {
  return (
    <TouchableOpacity style={styles.viewitemNotification}>
      <Image
        style={styles.viewImgae}
        source={require('../../../Image/logo.png')}></Image>
      <View>
        <Text style={styles.textdescription}>{item.name}</Text>
        <View style={{flexDirection: 'row', gap: 10, paddingTop: 8}}>
          <Text style={styles.textTime}>🕑 Mở cửa 8AM</Text>
        </View>
        <View>
          <Text>⭐4.9/5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
