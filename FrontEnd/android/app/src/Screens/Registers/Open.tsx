import React from 'react';
import {Image,Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/styleOpen';
export function OpenScreen(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.sectionContainer}
      onPress={() => navigation.navigate('Register')}>
      <Image
        source={require('../../Image/logo.png')}
        style={styles.imageStyle}
      />
      <Text style={styles.openTitle}>WashWizie</Text>
    </TouchableOpacity>
  );
}
