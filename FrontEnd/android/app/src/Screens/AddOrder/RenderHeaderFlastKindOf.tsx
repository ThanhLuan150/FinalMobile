import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
export const RenderHeaderFlastKindOf = ({onDropdownChange}) => {
  const navigation = useNavigation();
  const data = [
    {label: 'Giá giặt sấy', value: 1},
    {label: 'Giá giặt hấp', value: 2},
  ];
  const [value, setValue] = useState(0);
  console.log('value', value);

  return (
    <View>
      <TouchableOpacity style={styles.squareCreateOrder} onPress={() => {navigation.navigate("Addbooking")}}>
        <Ionicons style={{color: 'lightblue'}} size={30} name="add-circle" />
        <Text style={{color: 'white'}}>Đơn giặt mới</Text>
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitleMain}>Hình thức giặt chính:</Text>
        <Text style={styles.textTitle}>
          Giúp bạn hiểu hơn về sự hoạt động của mỗi cách giặt!
        </Text>
      </View>
      <View style={styles.containerService}>
        <View style={styles.icon}>
          <Ionicons name="shirt" size={80} color={'#91d3fa'} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.nameDesc}>Giặt sấy</Text>
          <Text style={styles.textDesc}>
            Dành cho hầu hết các quần áo thường ngày cũng như chăn/ drap/
            gối,...Tính tiện lợi cao. Gía cả hợp lý.
          </Text>
        </View>
      </View>
      <View style={styles.containerService}>
        <View style={styles.icon}>
          <Ionicons name="shirt-outline" size={80} color={'#91d3fa'} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.nameDesc}>Giặt hấp</Text>
          <Text style={styles.textDesc}>
            {' '}
            Dành cho các sản phẩm mang tính đặc thù. Sau khi giặt xong đồ vẫn
            giữ nguyên form dáng, không nhăn, đồ bền cao.
          </Text>
        </View>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitleMain}>Bảng giá tham khảo:</Text>
        <Text style={styles.textTitle}>
          Giá tiền sẽ giao động tùy theo cân nặng của đồ.
        </Text>
      </View>
      <View style={styles.containerKindOf}>
        <Text style={styles.nameKindOf}>Loại đồ giặt</Text>

        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          itemTextStyle={styles.itemTextStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          placeholder="Giá giặt sấy"
          onChange={item => {
            setValue(item.value);
            onDropdownChange(item.value)
          }}
        />
      </View>
  
    </View>
  );
};
const styles = StyleSheet.create({

  squareCreateOrder: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#535A74',
    margin: 20,
  },
  textTitleMain: {
    color: 'lightblue',
    fontWeight: 'bold',
  },
  textTitle: {
    color: 'white',
    fontSize: 12,
  },
  containerTitle: {
    marginLeft: 20,
  },
  containerService: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#535A74',
    borderRadius: 15,
    padding: 20,
  },
  icon: {
    flex: 1,
  },
  desc: {
    flex: 2,
  },
  textDesc: {
    color: 'white',
    fontSize: 12,
  },
  nameDesc: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdown: {
    backgroundColor: 'white',
    width: 125,
    borderRadius: 5,
    paddingLeft: 10,
  },
  placeholderStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  selectedTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  itemTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
  containerKindOf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  nameKindOf: {
    color: 'lightblue',
    fontWeight: 'bold',
  },
  
});
