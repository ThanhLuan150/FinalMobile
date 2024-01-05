import React from 'react';
import { Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../../Styles/BranchInfor';
interface propsRenderItemInfor {
  nameIcon: string;
  title: string;
  location?:string
}
export const RenderItemInfor = ({nameIcon, title,location}: propsRenderItemInfor) => {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.containerIcon}>
          <MaterialCommunityIcons
            color={'white'}
            size={20}
            name={nameIcon}></MaterialCommunityIcons>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}{location}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
    </>
  );
};

