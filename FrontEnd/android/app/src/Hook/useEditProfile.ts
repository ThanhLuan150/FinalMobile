import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {APIlink} from './API';

interface UserData {
  id_user: number;
  username: string;
  phone: number;
  image: string;
  email: string;
}

interface EditUserProps {
  handleOnChange: (key: string, value: string) => void;
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

export const getUser = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token !== null) {
      const response = await axios.get(
        'https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/userprofile',
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
  const queryClient = useQueryClient();
  // const [newData, setNewData] = useState<UserData | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

  const updateUser = useMutation({
    mutationFn: async (data: UserData) => {
      const token = await AsyncStorage.getItem('token');
      const res = await axios.put(
        `${APIlink}/api/userr/${userData?.id_user}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return res.data;
    },

    onSettled: () => {
      console.log('vao day get');
      queryClient.invalidateQueries({queryKey: ['getUser']});
    },
  });

  const handleOnChange = (key: string, value: string) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    updateUser.mutate(userData);
    navigation.navigate('Profile');
  };

  const goBack = (): void => {
    navigation.goBack();
  };

  return {
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
