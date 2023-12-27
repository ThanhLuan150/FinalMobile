/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChooseLocationComponent: FC = (): JSX.Element => {
  const defaultTextColor = 'white';
  return (
    <View style={styles.chooselocation}>
      <View style={styles.locationtexts}>
        <Text style={styles.headingText}>Chi nhánh giặt:</Text>
        <TouchableOpacity>
          <Text style={styles.mapslink}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.locationdetail}>
        <Image
          source={require('../../Image/logo.png')}
          style={styles.locationImage}
        />
        <View style={styles.locationCardTexts}>
          <Text style={{...styles.headingText, color: defaultTextColor}}>
            WashWizie - Hồ Văn Huê
          </Text>
          <View style={styles.locationDetailTexts}>
            <Ionicons name="time" size={13} color={'#91d3fa'} />
            <Text style={styles.textLocation}> Mở cửa: 8:00 SA</Text>
          </View>
          <View style={styles.rateAndSpace}>
            <View style={styles.locationDetailTexts}>
              <Ionicons name="star" size={13} color={'yellow'} />
              <Text style={styles.textLocation}> 4.8/5</Text>
            </View>
            <Text style={styles.textLocation}>Cách 1km</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const TypeServiceComponent: FC = (): JSX.Element => {
  const services = ['drying', 'steam'];
  const [serviceChecked, setserviceChecked] = useState('');
  const toggleTypeService = (type: String) =>
    setserviceChecked(services.filter(value => value === type)[0]);
  return (
    <View style={styles.serviceTypes}>
      <TouchableOpacity
        id={services[0]}
        style={styles.serviceType}
        onPress={() => toggleTypeService(services[0])}>
        <Ionicons
          name="shirt"
          size={100}
          color={serviceChecked === services[0] ? '#91d3fa' : '#fff'}
        />
        <Text
          style={{
            ...styles.headingText,
            color: serviceChecked === services[0] ? '#91d3fa' : '#fff',
          }}>
          Giặt sấy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        id={services[1]}
        style={styles.serviceType}
        onPress={() => toggleTypeService(services[1])}>
        <Ionicons
          name="shirt-outline"
          size={100}
          color={serviceChecked === services[1] ? '#91d3fa' : '#fff'}
        />
        <Text
          style={{
            ...styles.headingText,
            color: serviceChecked === services[1] ? '#91d3fa' : '#fff',
          }}>
          Giặt hấp
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const QuantityDropdown: FC = (): JSX.Element => {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (newQuantity: number) => {
    // Ensure the quantity is a non-negative integer
    const clampedQuantity = Math.max(0, Math.floor(newQuantity));
    setQuantity(clampedQuantity);
  };

  const increaseQuantity = () => {
    updateQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    updateQuantity(quantity - 1);
  };

  const handleInputChange = (text: string) => {
    // Allow only numeric input
    const numericValue = parseInt(text, 10);

    if (!isNaN(numericValue)) {
      updateQuantity(numericValue);
    }
  };

  return (
    <View style={styles.dropdownQuantity}>
      <Text>Số lượng</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decreaseQuantity}
          style={styles.quantityButton}>
          <Ionicons name="remove-circle-sharp" size={20} />
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          value={quantity.toString()}
          onChangeText={handleInputChange}
          keyboardType="numeric"
          // KeyboardAvoidingView
        />
        <TouchableOpacity
          onPress={increaseQuantity}
          style={styles.quantityButton}>
          <Ionicons name="add-circle-sharp" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TypeClothesComponent: FC = (): JSX.Element => {
  const clothesTypes = [
    {title: 'Đồ bình thường'},
    {title: 'Đồ trắng/ ra màu'},
    {title: 'Đồ đặc thù'},
    {title: 'Chăn/ Drap/ Rèm cửa'},
    {title: 'Gấu bông'},
    {title: 'Cặp/ Balo'},
  ];

  const [clothesChecked, setClothesChecked] = useState<string[]>([]);

  const toggleClothes = (chosen: string) => {
    setClothesChecked(prevChecked => {
      if (prevChecked.includes(chosen)) {
        return prevChecked.filter(item => item !== chosen);
      } else {
        return [...prevChecked, chosen];
      }
    });
  };

  type ItemProps = {item: any; index: number};

  const RenderTypeClothes = ({item, index}: ItemProps) => {
    const checkboxColor = clothesChecked.includes(item.title)
      ? '#91d3fa'
      : '#999999';

    const style = StyleSheet.create({
      clothesCheckedStyle: {
        backgroundColor: clothesChecked.includes(item.title)
          ? '#8888'
          : '#353B51',
        borderColor: clothesChecked.includes(item.title)
          ? '#91d3fa'
          : '#999999',
      },
    });

    return (
      <View>
        <TouchableOpacity
          key={index}
          style={{...styles.clothesType, ...style.clothesCheckedStyle}}
          onPress={() => toggleClothes(item.title)}>
          <Text style={styles.clothesTypeText}>{item.title}</Text>
          <MaterialCommunityIcons
            name={
              clothesChecked.includes(item.title)
                ? 'checkbox-marked'
                : 'checkbox-blank-outline'
            }
            size={15}
            color={checkboxColor}
          />
        </TouchableOpacity>
        {clothesChecked.includes(item.title) && (
          <QuantityDropdown />
        )}
      </View>
    );
  };

  return (
       <FlatList
         ListHeaderComponent={FlatListHeaderComponent}
         showsVerticalScrollIndicator={false}
         style={{gap: 5}}
         data={clothesTypes}
         renderItem={RenderTypeClothes}
         keyExtractor={(item, index) => `${item.title}-${index}`}
       />
  );
};

const FlatListHeaderComponent: FC = (): JSX.Element => {
  return (
    <>
      <ChooseLocationComponent />
      <View style={styles.headingTexts}>
        <Text style={styles.headingText}>Loại dịch vụ</Text>
        <Ionicons name="alert-circle" size={18} color={'#91d3fa'} />
      </View>
      <TypeServiceComponent />
      <View>
        <View style={styles.headingTexts}>
          <Text style={styles.headingText}>Loại đồ giặt</Text>
          <Ionicons name="alert-circle" size={18} color={'#91d3fa'} />
        </View>
      </View>
    </>
  );
};

export const AddBookingScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backicon}>
          <Ionicons name="chevron-back-outline" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Đơn mới</Text>
      </View>
      <View style={styles.mainContent}>
        <TypeClothesComponent />
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
  mainContent: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
  },
  header: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backicon: {
    position: 'absolute',
    left: 10,
  },
  headertext: {
    fontSize: 20,
    color: 'white',
  },
  mapslink: {
    fontSize: 12,
    color: '#91d3fa',
    textDecorationLine: 'underline',
  },
  headingText: {
    fontWeight: '700',
    color: '#91d3fa',
    marginBottom: 15,
  },
  locationtexts: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chooselocation: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationdetail: {
    width: '100%',
    height: 80,
    backgroundColor: '#999999',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
  },
  locationImage: {
    height: '100%',
    width: '19%',
    marginRight: 10,
  },
  locationCardTexts: {
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 10,
  },
  rateAndSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationDetailTexts: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'white',
  },
  textLocation: {
    fontSize: 12,
    color: 'white',
  },
  headingTexts: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  serviceTypes: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceType: {
    height: '100%',
    width: 150,
    backgroundColor: '#8888',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serviceTypeFocus: {
    height: '100%',
    width: 150,
    backgroundColor: '#91d3fa',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clothesType: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 5,
  },
  clothesTypeText: {
    fontSize: 15,
    fontWeight: '600',
  },
  dropdownQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8888',
    padding: 10,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: '50%',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  quantityInput: {
    height: 20,
    textAlign: 'center',
    padding: 0,
  },
  quantityButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
