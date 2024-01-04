/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useRef, useEffect} from 'react';
import { Dimensions } from 'react-native';
import styles from '../../../Styles/SlideShowImage';
import {Image, StyleSheet, View, FlatList} from 'react-native';
import { useRenderHomePage } from '../../../Hook/useRenderHomePage';
export const SlideShowImage = () => {
 
const{flatListRef,ImageSlide}=useRenderHomePage()
  return (
    <View style={styles.SlideShow}>
      <FlatList
        ref={flatListRef}
        data={ImageSlide}
        keyExtractor={(_item, index) => 'key' + index}
        horizontal
        pagingEnabled
        style={styles.FlastlistSlide}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Image key={index} source={item} style={styles.imageSlide}/>
        )}
      />
    </View>
  );
};
