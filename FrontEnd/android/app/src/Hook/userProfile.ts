import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';

interface UserData {
  id_user: number;
  username: string;
  phone: number;
  image: string;
  email: string;
  password: string;
}

const useProfile = (): {
  navigation: any;
  useNavigationVerifyEmail: () => void;
  useNavigationSetUpAccount: () => void;
  isEnabled: boolean;
  toggleSwitch: () => void;
  useNavigationRating: () => void;
  handleLogout: () => Promise<void>;
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
} => {
  const navigation = useNavigation();

  const useNavigationVerifyEmail = (): void => {
    navigation.navigate('VerifyEmail');
  };
  const useNavigationSetUpAccount = (): void => {
    navigation.navigate('SetUpAccount');
  };
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = (): void => setIsEnabled((previousState) => !previousState);
  const useNavigationRating = (): void => {
    navigation.navigate('RatingScreen');
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('token');
      Alert.alert('Đăng xuất thành công!');
      console.log('Đăng xuất thành công, xóa token thành công!');
      navigation.navigate('Open');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const response = await axios.get<UserData>(
            'https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/userprofile',
            {
              headers: {
                Authorization: `Bearer ${token}`, // Đặt header Authorization với giá trị token để xác thực
              },
            }
          );
        //   console.log(token);
          const fetchedUsers: UserData[] = response.data; // Trích xuất dữ liệu người dùng từ phản hồi API
        //   console.log('Fetched Users:', fetchedUsers);
          const currentUser = fetchedUsers.reduce((_foundUser, user) => {
            if (user.id_user.toString() === token) {
                console.log("ID Users: ",user.id_user);
              return user;
            }
            setUserData(user);
          }, null);
        }
      } catch (error) {
        console.error('Lỗi khi lấy token:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (userData) {
      navigation.setOptions({ title: `Profile - ${userData.username}` }); // Đặt tiêu đề trang Profile với tên người dùng
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);
  return {
    navigation,
    useNavigationVerifyEmail,
    useNavigationSetUpAccount,
    isEnabled,
    toggleSwitch,
    useNavigationRating,
    handleLogout,
    userData,
    setUserData,
  };
};

const useProfiles = useProfile;
export default useProfiles;