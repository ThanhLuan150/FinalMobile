import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {RenderItemInfor} from './Components/BranchInfor';
import {StraightLineRating} from './Components/StraightLineRating';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRenderBranch } from '../../Hook/useRenderBranch';

export const RenderHeaderDetailBranch = () => {
  const {isLoading, isError, data,numberOfRating,forceRerender}:any = useRenderBranch();
  if (isLoading) {
    return (
      <View style={styles.containerStatus}>
        <Text style={styles.titleStatus}>Loading...</Text>
      </View>
    );
  }
  if (isError) {
    // Error state
    return <Text>Error fetching data</Text>;
  }
  const branch = data != null ? data.detailBranch[0] : null;
  console.log('branch', branch);
  return (
    <>
      <ImageBackground
        style={styles.imageMap}
        source={{
          uri: 'https://inuvcuon.vn/images/2018/08/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg',
        }}>
        <View style={styles.containerInfBranch}>
          <Text style={styles.Nametitle}>{branch?.name}</Text>
          <Text style={styles.Addresstitle}>{branch?.address}</Text>
          <View style={styles.line}></View>
          <RenderItemInfor nameIcon="dishwasher" title="Còn 12 máy trống" />
          <RenderItemInfor
            nameIcon="map-marker"
            title="Cách đây "
            location={branch?.location}
          />
          <RenderItemInfor nameIcon="ticket-percent" title="Ưu đãi freeship" />
          <RenderItemInfor nameIcon="star" title="Đánh giá và nhận xét" />
        </View>
      </ImageBackground>

      <View style={styles.containerRating}>
        <View style={styles.containerStar}>
          <Text style={styles.titleItem}>Đánh giá(2 đánh giá)</Text>
          <View style={styles.containerItemStar}>
            <View style={styles.containerStarItem}>
              <Text style={styles.numberOfStar}>
                {numberOfRating}
                {numberOfRating % 2 === 0 ? 0 : null}
              </Text>
              <View style={styles.StarItem}>
                <Stars
                  key={forceRerender}
                  display={Number(numberOfRating)}
                  spacing={8}
                  count={5}
                  starSize={40}
                  fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
                  emptyStar={
                    <Icon
                      name={'star-outline'}
                      style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                    />
                  }
                  disable={false}
                />
              </View>
            </View>
            <View>
              <StraightLineRating
                numOfLine={1}
                widthLeft={70}
                widthRight={30}
              />
              <StraightLineRating
                numOfLine={2}
                widthLeft={40}
                widthRight={60}
              />
              <StraightLineRating
                numOfLine={3}
                widthLeft={20}
                widthRight={80}
              />
              <StraightLineRating
                numOfLine={4}
                widthLeft={0}
                widthRight={100}
              />
              <StraightLineRating
                numOfLine={5}
                widthLeft={0}
                widthRight={100}
              />
            </View>
          </View>
        </View>
        <Text style={{...styles.titleItem, marginLeft: 20,}}>
          Nhận xét(80 nhận xét)
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  imageMap: {
    width: '100%',
    height: 200,
  },
  containerInfBranch: {
    backgroundColor: '#5A617B',
    alignItems: 'center',
    margin: 50,
    borderRadius: 15,
    padding: 20,
  },
  Nametitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 5,
  },
  Addresstitle: {
    color: 'white',
    margin: 5,
  },
  line: {
    backgroundColor: 'white',
    width: 200,
    height: 2,
    margin: 10,
  },
  containerRating: {
    flexDirection: 'column',
    flex: 1,
    marginTop: 200,
  },
  containerStar: {
    flex: 1,
    margin: 20,
  },
  containerItemStar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  StarItem: {
    flexDirection: 'row',
  },
  containerStarItem: {
    alignItems: 'center',
  },

  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  titleItem: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  numberOfStar: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  containerStatus: {
    backgroundColor: '#353B51',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStatus: {
    color: 'white',
  },
});
