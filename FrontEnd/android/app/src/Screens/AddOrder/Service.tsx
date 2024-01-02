/* eslint-disable react/no-unstable-nested-components */
// import React, {FC} from 'react';
// import {useState} from 'react';

// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   FlatList,
//   TextInput,
//   Platform,
//   KeyboardAvoidingView,
//   ScrollView,
// } from 'react-native';

// import {useNavigation} from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export const ServicesScreen: FC = (): JSX.Element => {
//   return (
//     <ScrollView style={styles.container}>
//       <View>
//         <Ionicons name="add-circle-sharp" />
//         <Text>Đơn giặt mới</Text>
//       </View>
//       <View style={styles.headingsBlock}>
//         <Text style={styles.heading}>Hình thức giặt chính:</Text>
//         <Text style={styles.subheading}>
//           Giúp bạn hiểu hơn về sự hoạt động của mỗi các giặt!
//         </Text>
//       </View>
//       <View>
//         <View>
//           <Ionicons name="shirt" size={100} color={'#91d3fa'} />
//           <View>
//             <Text>Giặt Sấy</Text>
//             <Text>...ádfasfasgkjlansflak</Text>
//           </View>
//         </View>
//         <View>
//           <Ionicons name="shirt-outline" size={100} color={'#91d3fa'} />
//           <View>
//             <Text>Giặt Hấp</Text>
//             <Text>...ádfasfasgkjlansflak</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.headingsBlock}>
//         <Text style={styles.heading}>Bảng giá tham khảo:</Text>
//         <Text style={styles.subheading}>
//           Giúp bạn hiểu hơn về sự hoạt động của mỗi các giặt!
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#353B51',
//     padding: 15,
//   },
//   headingsBlock: {

//   },
//   heading: {
//     fontWeight: '700',
//     color: '#91d3fa',
//     marginBottom: 3,
//   },
//   subheading: {},

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
