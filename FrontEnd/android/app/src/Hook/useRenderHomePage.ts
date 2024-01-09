import {useQueries} from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { FlatList } from 'react-native';
const ImageSlide = [
  require('../Image/slideShow1.png'),
  require('../Image/slideShow2.png'),
  require('../Image/slideShow3.png'),
];

export const useRenderHomePage = () => {
  const [minigame, branch,voucher] = useQueries({
    queries: [
      {
        queryKey: ['minigame'],
        queryFn: async () =>
          axios
            .get('https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/minigame')
            .then(res => res.data),
      },
      {
        queryKey: ['branch'],
        queryFn: async () =>
          axios
            .get('https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/branch')
            .then(res => res.data),
      },
      {
        queryKey: ['voucher'],
        queryFn: async () =>
          axios
            .get('https://29b4-2405-4802-6078-8b80-d92f-1066-9ee6-a231.ngrok-free.app/api/Voucher')
            .then(res => res.data),
      },
    ],
  });
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextPage = (currentPage + 1) % ImageSlide.length;
        flatListRef.current.scrollToIndex({index: nextPage, animated: true});
        setCurrentPage(nextPage);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentPage]);
  return{
    minigame,
    branch,
    voucher,
    flatListRef,
    ImageSlide,
  }
};
