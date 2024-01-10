import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import axios from 'axios';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

interface UserData {
  id_user: number;
  username: string;
  phone: number;
  image: string;
  email: string;
}

interface EditUserProps {
  handleOnChange: (key: string, value:string) => void;
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
  handleSubmit: () => void;
}

const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
          const response = await axios.get(
            'https://62bf-14-176-231-248.ngrok-free.app/api/userprofile',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          return response.data.user;
        }
  } catch (error) {
    console.log(error);
  }
};

const useGetUser = () => {
  return useQuery({queryKey: ['getUser'], queryFn: getUser});
};

const useEditUser = (): EditUserProps => {
  const {data} = useGetUser();
  const navigation = useNavigation();
  const [userData, setUserData] = useState<UserData | null>(null);
  // const [newData, setNewData] = useState<UserData | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const queryClient = new QueryClient();
  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  },[data]);

  const {mutateAsync}= useMutation({
    mutationFn: async (data: UserData) => {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.put(
        `https://62bf-14-176-231-248.ngrok-free.app/api/userr/${userData?.id_user}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data;
    },
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ['getUser'] })
    },
  });

  const handleOnChange = (key: string, value: string) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    mutateAsync(userData);
    setIsSaving(true)
    navigation.navigate('Profile');
  };

  // const { data: currentUser } = useQuery('userProfile', async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   if (token !== null) {
  //     const response = await axios.get(
  //       'https://62bf-14-176-231-248.ngrok-free.app/api/userprofile',
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     );
  //     return response.data.user;
  //   }
  // });


  // useEffect(() => {
  //   console.log(data);
  //   if (data) {
  //     setUserData(data);
  //     onChangeUserName(data.username);
  //     onChangePhone(data.phone.toString());
  //     onChangeEmail(data.email);
  //   }
  // }, [data, setUserData]);

  const goBack = (): void => {
    navigation.goBack();
  };


  return {
    // username,
    // onChangeUserName,
    // phone,
    // onChangePhone,
    // email,
    // onChangeEmail,
    handleOnChange,
    handleSubmit,
    navigation,
    userData,
    setUserData,
    isSaving,
    setIsSaving,
    goBack,
    // saveProfile,
  };
};

const userEditUsers = useEditUser;
export default userEditUsers;
