/* eslint-disable eol-last */
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import axios from 'axios';
interface UserData {
  id_user: number;
  username: string;
  phone: number;
  image: string;
  email: string;
}
interface EditUserProps {
  username: string;
  onChangeUserName: (username: string) => void;
  phone: string;
  onChangePhone: (phone: string) => void;
  email: string;
  onChangeEmail: (email: string) => void;
  navigation: any;
  userData: UserData | null;
  setUserData: (userData: UserData | null) => void;
  isSaving: boolean;
  setIsSaving: (isSaving: boolean) => void;
  goBack: () => void;
  saveProfile: () => void;
}
const useEditUser = (): EditUserProps => {
  const [username, onChangeUserName] = useState<string>('');
  const [phone, onChangePhone] = useState<string>('');
  const [email, onChangeEmail] = useState<string>('');
  const navigation = useNavigation();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) {
          const response = await axios.get(
            'https://86df-113-176-99-140.ngrok-free.app/api/userprofile',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const currentUser: UserData = response.data.user;
          if (currentUser) {
            setUserData(currentUser);
            onChangeUserName(currentUser.username);
            onChangePhone(currentUser.phone.toString());
            onChangeEmail(currentUser.email);
          }
        }
      } catch (error) {
        console.error('Lỗi khi lấy token:', error);
      }
    };
    fetchData();
  }, []);

  const goBack = (): void => {
    navigation.goBack();
  };
  const saveProfile = async (): Promise<void> => {
    try {
      setIsSaving(true);
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        const response = await axios.put(
          `https://86df-113-176-99-140.ngrok-free.app/api/userr/${userData?.id_user}`,
          {
            username,
            phone: parseInt(phone, 10),
            email,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // Cập nhật lại dữ liệu người dùng
        setUserData(response.data.user);
        console.log(response.data);
        Alert.alert('Câp nhật thông tin người thành công!'); // Xử lý phản hồi theo nhu cầu
        navigation.navigate('Profile'); // Quay lại màn hình trước đó sau khi lưu
      }
    } catch (error) {
      console.error('Lỗi khi lưu thông tin:', error);
    } finally {
      setIsSaving(false);
    }
  };
  return {
    username,
    onChangeUserName,
    phone,
    onChangePhone,
    email,
    onChangeEmail,
    navigation,
    userData,
    setUserData,
    isSaving,
    setIsSaving,
    goBack,
    saveProfile,
  };
};
const userEditUsers = useEditUser;
export default userEditUsers;