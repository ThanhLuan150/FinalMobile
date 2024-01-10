
import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RenderHeaderFlastKindOf} from './RenderHeaderFlastKindOf';
import axios from 'axios';
import {RenderItemKindOf} from './Components/RenderItemKindOf';
import {View} from 'react-native';

export const ServicePage = () => {
  const [idKindOf, setidKindOf] = useState(1);
  const [data, setData] = useState([]);
  const handleDropdownChange = (selectedValue: any) => {
    setidKindOf(selectedValue);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ef75-2402-9d80-456-7df4-90c8-4f68-1d2a-39b0.ngrok-free.app/api/Typeoflaundries/${idKindOf}`
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [idKindOf]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.typeoflaundries}
        keyExtractor={item => item.id_typeoflaundries}
        ListHeaderComponent={() => (
          <RenderHeaderFlastKindOf onDropdownChange={handleDropdownChange} />
        )}
        renderItem={RenderItemKindOf}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
});
