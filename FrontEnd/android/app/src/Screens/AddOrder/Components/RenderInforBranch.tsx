import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
export const RenderInforBranch = () => {
  
  return (
    <View style={styles.containerInfBranch}>
      {data.detailBranch?.[0] && (
        <>
          <Text style={styles.Nametitle}>{branch.name}</Text>
          <Text style={styles.Addresstitle}>
            {branch.address}
          </Text>
          <View style={styles.line}></View>
        </>
      )}
      <View style={styles.itemContainer}>
        <View>
          <MaterialCommunityIcons
            color={'white'}
            size={20}
            name="washing-machine"></MaterialCommunityIcons>
        </View>
        <View>
          <Text style={styles.title}>Còn 12 máy trống</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          color={'white'}
          size={20}></MaterialCommunityIcons>
        <Text style={styles.title}>
          Cách đây {data.detailBranch[0].location}
        </Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="ticket-percent"
          color={'white'}
          size={20}></MaterialCommunityIcons>
        <Text style={styles.title}>Uư đãi freeship</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.itemContainer}>
        <MaterialCommunityIcons
          name="star"
          color={'white'}
          size={20}></MaterialCommunityIcons>
        <Text style={styles.title}>Đánh giá và nhận xét</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerInfBranch: {
    backgroundColor: '#5A617B',
    alignItems: 'center',
    margin: 50,
    borderRadius: 15,
    padding: 20,
  },
  Nametitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
  },
  Addresstitle: {
    color: 'white',
    margin: 5,
  },
  itemContainer: {
    flexDirection: 'row',
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
