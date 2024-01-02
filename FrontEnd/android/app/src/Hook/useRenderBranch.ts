import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {useEffect, useState} from 'react';

export const useRenderBranch = () => {
  const [numberOfRating, setTotalNumberOfRating] = useState(0);
  const [user, setUser] = useState([]);
  const [forceRerender, setForceRerender] = useState(false);
  const {data, isLoading, isError} = useQuery({
    queryKey: ['branchDetail'],
    queryFn: async () =>
      axios
        .get(
          'https://6d5d-2402-9d80-403-e55a-fca1-a7f4-aea5-2f40.ngrok-free.app/api/detailBranch/1',
        )
        .then(res => res.data),
  });


  useEffect(() => {
    if (!isLoading && !isError) {
      const totalnumberOfRating: number = data.detailBranch.reduce(
        (acc: number, item: any) => {
          const numberOfRating: number = item.rating.rating;
          return acc + numberOfRating;
        },
        0,
      );

      const collectUser = data.detailBranch.map((item: {rating: any}) => {
        const users = item.rating;
        return users;
      }, 0);
      setUser(collectUser);
      setTotalNumberOfRating(totalnumberOfRating / data.detailBranch.length);
    }
  }, [data, isLoading, isError]);
  useEffect(() => {
    setForceRerender(prev => !prev);
  }, [numberOfRating]);
  if (isLoading) {
    return 'isLoading';
  }
  if (isError) {
    return 'Error';
  }

  
  return {
    data,
    user: user || [],
    isError,
    isLoading,
    numberOfRating,
    forceRerender
  };
};
