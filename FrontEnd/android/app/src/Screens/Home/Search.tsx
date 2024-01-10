/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import styles from '../../Styles/Search';
import { useQuery } from '@tanstack/react-query';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation từ React Navigation

import useSearchs from '../../Hook/useSearch';
interface Branch {
  name: string;
  address: string;
}
const SearchScreen = (): JSX.Element => {
  const { searchValue,handleSearch,filteredData,navigateToDetail,} = useSearchs();
  return (
    <View style={styles.viewsearch}>
      <View style={styles.view}>
        <View style={styles.viewSearch}>
          <Ionicons
            style={{ position: 'absolute', top: 10, left: 10 }}
            color={'#000000'}
            name="search"
            size={30}
          />
          <TextInput
            style={styles.textInputSearch}
            placeholder="Tìm kiếm chi nhánh"
            value={searchValue}
            onChangeText={handleSearch }
          />
          <Ionicons
            style={{ position: 'absolute', top: 10, right: 10 }}
            color={'#000000'}
            name="mic-outline"
            size={30}
          />
        </View>
      </View>
      <View style={styles.viewSearches}>
      <Text style={styles.textall}>Tất cả các chi nhánh WashWish</Text>
      {searchValue && (
        <FlatList
          data={filteredData}
          contentContainerStyle={{ gap: 10, paddingTop: 20, paddingBottom: 20 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.viewbranch}  onPress={() => navigateToDetail(item)}>
              <View style={styles.showItem}>
                <View style={styles.viewlocation}>
                  <Ionicons color={'#B3E0FB'} name="location" size={25} />
                </View>
                <View style={styles.viewAddress}>
                  <Text style={styles.textname}>{item.name}</Text>
                  <Text style={styles.textname}>{item.address}</Text>
                </View>
              </View>
              <View style={styles.viewborder} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
    </View>
  );
};
export default SearchScreen;
