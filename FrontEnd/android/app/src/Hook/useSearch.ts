import  { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
interface Branch {
    name: string;
    address: string;
  }
const useSearch = () =>{
    const [searchValue, setSearchValue] = useState<string>('');
    const navigation = useNavigation();
    const { data } = useQuery<Branch[]>({
      queryKey: ['branch'],
      queryFn: async () =>
        axios
          .get('https://62bf-14-176-231-248.ngrok-free.app/api/branch')
          .then((res) => res.data),
    });
    const handleSearch = (value: string): void => {
      setSearchValue(value);
    };
    const filteredData = data?.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    const navigateToDetail = (item: any) => {
  
      navigation.navigate('BranchDetail', { item }); 
    };
    return {
        searchValue,
        setSearchValue,
        data,
        useQuery,
        handleSearch,
        filteredData,
        navigateToDetail,
    };
};

const useSearchs = useSearch;
export default useSearchs;
