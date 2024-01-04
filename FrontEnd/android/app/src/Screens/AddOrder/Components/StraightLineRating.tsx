import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface StraightLineRatingProps {
    numOfLine: number;
    widthLeft: number; 
    widthRight: number; 
  }
  
export const StraightLineRating = ({numOfLine,widthLeft,widthRight}:StraightLineRatingProps) => {
  return (
    <View style={styles.containerLineItem}>
      <Text style={styles.numberOfLine}>{numOfLine}</Text>
      <View style={styles.LineItemContainer}>
        <View style={{...styles.LineItem, width: widthLeft}}></View>
        <View style={{...styles.LineItem2, width: widthRight}}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerLineItem: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  numberOfLine: {
    color: 'white',
  },
  LineItemContainer: {
    flexDirection: 'row',
  },
  LineItem: {
    height: 3,
    borderRadius: 20,
    marginLeft: 5,
    backgroundColor: 'yellow',
  },
  LineItem2: {
    height: 3,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  
});
