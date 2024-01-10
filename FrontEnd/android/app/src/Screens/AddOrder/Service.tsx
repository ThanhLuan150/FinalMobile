
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
          `https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/Typeoflaundries/${idKindOf}`
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
