import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const StatusOrder = () => {
  return (
    <View style={styles.statusContainer}>
      <View style={styles.iconStatusfullbg}>
        <Text style={styles.tickIcon}>√</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.iconStatusfullbg}>
        <Text style={styles.tickIcon}>√</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.iconStatus}></View>
      <View style={styles.line}></View>
      <View style={styles.iconStatus}></View>
      <View style={styles.line}></View>
      <View style={styles.iconStatus}></View>
      <View style={styles.line}></View>
      <View style={styles.iconStatus}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStatus: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: '#AADDFA',
    borderWidth: 2,
    alignItems: 'center',
  },
  iconStatusfullbg: {
    width: 20,
    height: 20,
    backgroundColor: '#AADDFA',
    borderRadius: 15,
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    width: 30,
    height: 2,
    backgroundColor: '#AADDFA',
  },
  tickIcon: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});
