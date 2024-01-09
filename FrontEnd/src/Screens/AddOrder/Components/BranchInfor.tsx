import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  containerIcon: {
    flex: 1,
  },
  containerTitle: {
    flex: 6,
  },
  line: {
    backgroundColor: 'white',
    width: 200,
    height: 2,
    margin: 10,
  },
  title: {
    color: 'white',
    marginLeft: 5,
    padding: 5,
  },
});
