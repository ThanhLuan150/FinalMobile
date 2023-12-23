import React, {useState, useRef, useEffect} from 'react';
import {Image, StyleSheet, View, FlatList} from 'react-native';

const ImageSlide = [
  require('../../../Image/slideShow1.png'),
  require('../../../Image/slideShow2.png'),
  require('../../../Image/slideShow3.png'),
];

export const SlideShowImage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextPage = (currentPage + 1) % ImageSlide.length;
        flatListRef.current.scrollToIndex({index: nextPage, animated: true});
        setCurrentPage(nextPage);
      }
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentPage]);

  return (
    <View style={styles.SlideShow}>
      <FlatList
        ref={flatListRef}
        data={ImageSlide}
        keyExtractor={(_item, index) => 'key' + index}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Image key={index} source={item} style={styles.imageSlide} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    color: 'white',
    margin: 5,
    fontSize: 25,
  },
  activeDot: {
    color: '#88cbd1',
    margin: 5,
    fontSize: 25,
  },
  imageSlide: {
    width: 351,
    height: 200,
    borderRadius:20,
  },
  SlideShow: {
    marginLeft:30,
    marginRight:30,
    marginBottom:30,
  },
});