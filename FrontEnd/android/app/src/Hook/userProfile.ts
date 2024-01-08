import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Alert } from 'react-native';
interface UserData {
  user: UserData;
  id_user: number;
  username: string;
  phone: number;
  image: string;
  email: string;
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
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const response = await axios.get<UserData>(
            'https://62bf-14-176-231-248.ngrok-free.app/api/userprofile',
            {
              headers: {
                Authorization: `Bearer ${token}`, // Đặt header Authorization với giá trị token để xác thực
              },
            },
          );
          console.log(token);
          const currentUser: UserData = response.data.user; // Lấy dữ liệu người dùng từ phản hồi API
          if (currentUser) {
            setUserData(currentUser);
            console.log(currentUser);
          }
        }
      } catch (error) {
        console.error('Lỗi khi lấy token:', error);
      }
    };
    fetchData(); // Gọi hàm fetchData để lấy dữ liệu người dùng khi component được render lần đầu tiên
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