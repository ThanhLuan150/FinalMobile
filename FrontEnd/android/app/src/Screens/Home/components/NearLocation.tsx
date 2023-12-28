import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';

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
const styles = StyleSheet.create({
  viewitemNotification: {
    backgroundColor: '#5A617B',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    marginStart: 20,
    marginRight: 10,
  
  },
  viewImgae: {
    width: 70,
    height: 50,
    objectFit:'contain'
  },
  textdescription: {
    color: '#BBF4FB',
    fontWeight: '600',
  },
  textseedetail: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 11,
    marginTop: 4,
  },
  textTime: {
    color: '#BBF4FB',
    fontWeight: '600',
    fontSize: 11,
    marginTop: 1,
  },
  viewStatus: {
    backgroundColor: '#BBF4FB',
    borderRadius: 50,
    width: 10,
    height: 10,
    marginTop: 4,
  },
});
