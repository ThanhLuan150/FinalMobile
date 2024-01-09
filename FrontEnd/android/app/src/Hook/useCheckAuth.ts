import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

export const useCheckAuth = () => {
  const [authenticated, setAuthenticated] = useState(true);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, []);

  return (authenticated);
};
