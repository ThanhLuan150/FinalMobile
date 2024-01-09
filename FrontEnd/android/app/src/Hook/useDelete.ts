import  { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
interface UserData {
    id_user: number;
    username: string;
    phone: number;
    image: string;
    email: string;
  }
  const useDeleteUser = () =>{
    const navigation = useNavigation();
    const useNavigationEditProfile = () =>{
        navigation.navigate('EditProfile');
    };
    const useGoBack =()=>{
        navigation.goBack();
    };
    const [userData, setUserData] = useState<UserData | null>(null);
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          try {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
              const response = await axios.get(
                'https://97ff-14-176-231-248.ngrok-free.app/api/userprofile',
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const currentUser: UserData = response.data.user;
              setUserData(currentUser);
              console.log(currentUser);
            }
          } catch (error) {
            console.error('Lỗi khi lấy token:', error);
          }
        };
        fetchData();
      }, []);
      const deleteUser = async (): Promise<void> => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token !== null) {
            const response = await axios.delete(
              `https://62bf-14-176-231-248.ngrok-free.app/api/userss/${userData?.id_user}`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            // Cập nhật lại dữ liệu người dùng
            setUserData(response.data.user);
            console.log(response.data); // Xử lý phản hồi theo nhu cầu
            Alert.alert('Xóa thành công người dùng!');
            navigation.navigate('Open'); 
          }
        } catch (error) {
          console.error('Lỗi khi lưu thông tin:', error);
        }
      };
      return {
        navigation,
        useNavigationEditProfile ,
        userData,
        setUserData,
        deleteUser,
        useGoBack,
      };
  };
  const useDeleteUsers = useDeleteUser;
  export  default useDeleteUsers;
