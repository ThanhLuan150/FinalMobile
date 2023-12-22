/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
// const {useState} = require('react');
import { useNavigation } from '@react-navigation/native';

const useNavigations = () => {
  const useNavigationChat = ()=> {
    const navigation = useNavigation();
    navigation.navigate('Chat');
  };

  return {
    useNavigationChat,
  };
};

export default useNavigations;
