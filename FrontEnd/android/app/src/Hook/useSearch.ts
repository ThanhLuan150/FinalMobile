import  { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface Branch {
    name: string;
    address: string;
  }
const useSearch = () =>{
    const [searchValue, setSearchValue] = useState<string>('');
    const { data } = useQuery<Branch[]>({
      queryKey: ['branch'],
      queryFn: async () =>
        axios
          .get('https://b38e-14-176-231-248.ngrok-free.app/api/branch')
          .then((res) => res.data),
    });
    const handleSearch = (value: string): void => {
      setSearchValue(value);
    };
    const filteredData = data?.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    return {
        searchValue,
        setSearchValue,
        data,
        useQuery,
        handleSearch,
        filteredData,
    };
};
const useSearchs = useSearch;
export default useSearchs;
