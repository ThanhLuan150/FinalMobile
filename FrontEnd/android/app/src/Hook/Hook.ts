/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
const {useState} = require('react');
import { useNavigation } from '@react-navigation/native';
const navigation = useNavigation();
const useNavigationChat =( ) =>{
    navigation.navigate('ExploreRestaurant');
}