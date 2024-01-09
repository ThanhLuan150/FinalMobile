/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {useState} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './AddBookingStyle';

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
          <Text
            style={{
              ...styles.clothesTypeText,
              color: clothesChecked.includes(item.title) ? '#91d3fa' : '#fff',
            }}>
            {item.title}
          </Text>
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
        {clothesChecked.includes(item.title) && <QuantityDropdown />}
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={FlatListHeaderComponent}
      ListFooterComponent={FlatListFooterComponent}
      showsVerticalScrollIndicator={false}
      style={{gap: 5}}
      data={clothesTypes}
      renderItem={RenderTypeClothes}
      keyExtractor={(item, index) => `${item.title}-${index}`}
    />
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
      <Text style={{color: '#fff'}}>Số lượng</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={decreaseQuantity}
          style={styles.quantityButton}>
          <Ionicons name="remove-circle-sharp" size={20} color={'#fff'} />
        </TouchableOpacity>
        <TextInput
          style={styles.quantityInput}
          value={quantity.toString()}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        <TouchableOpacity
          onPress={increaseQuantity}
          style={styles.quantityButton}>
          <Ionicons name="add-circle-sharp" size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
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

const FlatListFooterComponent: FC = (): JSX.Element => {
  return (
    <>
      <WashingLiquidComponent />
      <SabricSoftenerComponent />
      <MoreOptionComponent />
    </>
  );
};

const WashingLiquidComponent: FC = (): JSX.Element => {
  const washingLiquids = ['Mặc định', 'Vico', 'Flora'];
  const [washingLiquidChecked, setwashingLiquidChecked] = useState('Mặc định');

  const toggleTypewashingLiquid = (type: String) =>
    setwashingLiquidChecked(washingLiquids.filter(value => value === type)[0]);
  type ItemProps = {item: any; index: number};
  const RenderTypeWashingLiquid = ({item}: ItemProps) => {
    const style = StyleSheet.create({
      washingLiquidclothesCheckedStyle: {
        backgroundColor: washingLiquidChecked === item ? '#8888' : '#353B51',
        borderColor: washingLiquidChecked === item ? '#91d3fa' : '#999999',
      },
    });
    return (
      <TouchableOpacity
        style={{
          ...styles.clothesType,
          ...style.washingLiquidclothesCheckedStyle,
        }}
        id={item}
        onPress={() => toggleTypewashingLiquid(item)}>
        <Text
          style={{
            ...styles.clothesTypeText,
            color: washingLiquidChecked === item ? '#91d3fa' : '#fff',
          }}>
          {item}
        </Text>
        <Ionicons
          name={
            washingLiquidChecked === item
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={20}
          color={washingLiquidChecked === item ? '#91d3fa' : '#fff'}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{...styles.headingTexts, marginTop: 10}}>
        <Text style={styles.headingText}>Nước giặt:</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{gap: 5}}
        data={washingLiquids}
        renderItem={RenderTypeWashingLiquid}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </>
  );
};

const SabricSoftenerComponent: FC = (): JSX.Element => {
  const sabricSofteners = ['Mặc định', 'Vico', 'Downy', 'Comfort'];
  const [SabricSoftenerChecked, setSabricSoftenerChecked] =
    useState('Mặc định');

  const toggleTypeSabricSoftener = (type: String) =>
    setSabricSoftenerChecked(
      sabricSofteners.filter(value => value === type)[0],
    );
  type ItemProps = {item: any; index: number};
  const RenderTypeSabricSoftener = ({item}: ItemProps) => {
    const style = StyleSheet.create({
      SabricSoftenerclothesCheckedStyle: {
        backgroundColor: SabricSoftenerChecked === item ? '#8888' : '#353B51',
        borderColor: SabricSoftenerChecked === item ? '#91d3fa' : '#999999',
      },
    });
    return (
      <TouchableOpacity
        style={{
          ...styles.clothesType,
          ...style.SabricSoftenerclothesCheckedStyle,
        }}
        id={item}
        onPress={() => toggleTypeSabricSoftener(item)}>
        <Text
          style={{
            ...styles.clothesTypeText,
            color: SabricSoftenerChecked === item ? '#91d3fa' : '#fff',
          }}>
          {item}
        </Text>
        <Ionicons
          name={
            SabricSoftenerChecked === item
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          size={20}
          color={SabricSoftenerChecked === item ? '#91d3fa' : '#fff'}
        />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={{...styles.headingTexts, marginTop: 10}}>
        <Text style={styles.headingText}>Nước xả vải:</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{gap: 5}}
        data={sabricSofteners}
        renderItem={RenderTypeSabricSoftener}
        keyExtractor={(item, index) => `${item}-${index}`}
      />
    </>
  );
};

const MoreOptionComponent: FC = (): JSX.Element => {
  const servicesTypes = [
    {title: 'Ủi đồ'},
    {title: 'Vá đồ'},
    {title: 'Tẩy vết bẩn'},
    {title: 'Thêm nước giặt/xả'},
    {title: 'Giặt 2 lần'},
  ];

  const [servicesChecked, setservicesChecked] = useState<string[]>([]);
  const [moreServices, setmoreServices] = useState(false);
  const togglemoreServices = () => {
    setmoreServices(!moreServices);
  };

  const toggleservices = (chosen: string) => {
    setservicesChecked(prevChecked => {
      if (prevChecked.includes(chosen)) {
        return prevChecked.filter(item => item !== chosen);
      } else {
        return [...prevChecked, chosen];
      }
    });
  };

  type ItemProps = {item: any; index: number};

  const RenderTypeservices = ({item, index}: ItemProps) => {
    const checkboxColor = servicesChecked.includes(item.title)
      ? '#91d3fa'
      : '#999999';

    const style = StyleSheet.create({
      servicesCheckedStyle: {
        backgroundColor: servicesChecked.includes(item.title)
          ? '#8888'
          : '#353B51',
        borderColor: servicesChecked.includes(item.title)
          ? '#91d3fa'
          : '#999999',
      },
    });

    return (
      <View>
        <TouchableOpacity
          key={index}
          style={{...styles.clothesType, ...style.servicesCheckedStyle}}
          onPress={() => toggleservices(item.title)}>
          <Text
            style={{
              ...styles.clothesTypeText,
              color: servicesChecked.includes(item.title) ? '#91d3fa' : '#fff',
            }}>
            {item.title}
          </Text>
          <MaterialCommunityIcons
            name={
              servicesChecked.includes(item.title)
                ? 'checkbox-marked'
                : 'checkbox-blank-outline'
            }
            size={15}
            color={checkboxColor}
          />
        </TouchableOpacity>
        {servicesChecked.includes(item.title) && item.title === 'Vá đồ' && (
          <QuantityDropdown />
        )}
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={togglemoreServices}
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{...styles.headingTexts, width: 'auto'}}>
          <Text style={styles.headingText}>Dịch vụ thêm</Text>
          <Ionicons name="alert-circle" size={18} color={'#91d3fa'} />
        </View>
        <Ionicons
          name={moreServices ? 'chevron-up-sharp' : 'chevron-down-sharp'}
          size={18}
          color={'#91d3fa'}
        />
      </TouchableOpacity>
      {moreServices && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={servicesTypes}
          renderItem={RenderTypeservices}
          keyExtractor={(item, index) => `${item.title}-${index}`}
        />
      )}
    </>
  );
};

export const AddBookingScreen: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const NextButton: FC = (): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.NextButton}
        onPress={() => navigation.navigate('Trang chủ')}>
        <Text style={styles.ButtonText}>Tiếp</Text>
      </TouchableOpacity>
    );
  };
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backicon}
          onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={35} color={'white'} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Đơn mới</Text>
      </View>
      <View style={styles.mainContent}>
        <TypeClothesComponent />
      </View>
      <NextButton />
    </View>
    // </KeyboardAvoidingView>
  );
};

