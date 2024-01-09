import React from 'react';
import {Text} from 'react-native';
import {Image, View} from 'react-native';
import styles from '../../../Styles/RenderMiniGame';
export const RenderMiniGame = ({item}:any) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
};
