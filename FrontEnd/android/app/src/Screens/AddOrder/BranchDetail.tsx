import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
export const BranchDetail = () => {

  const [totalNumberOfRating, setTotalNumberOfRating] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://6d5d-2402-9d80-403-e55a-fca1-a7f4-aea5-2f40.ngrok-free.app/api/detailBranch/1'
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };


  const { data, isLoading, isError } = useQuery({queryKey:['branchDetail'],queryFn:fetchData} );

 
  if (isLoading) {
    // Loading state
    return <Text>Loading...</Text>;
  }

  if (isError) {
    // Error state
    return <Text>Error fetching data</Text>;
  }

  const branch = data.length > 0 ? data[0].detailBranch?.[0] : null;
  console.log('branch', branch);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageMap}
        source={{
          uri: 'https://inuvcuon.vn/images/2018/08/voi-nhung-cong-cu-rat-huu-ich-ban-da-co-the-in-truc-tiep-ngay-tren-google-map.jpg',
        }}>
        <View style={styles.containerInfBranch}>
          <Text style={styles.Nametitle}>{branch.name}</Text>
          <Text style={styles.Addresstitle}>{branch.address}</Text>
          <View style={styles.line}></View>
          <View style={styles.itemContainer}>
            <View style={styles.containerIcon}>
              <MaterialCommunityIcons
                color={'white'}
                size={20}
                name="washing-machine"></MaterialCommunityIcons>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Còn 12 máy trống</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.itemContainer}>
            <View style={styles.containerIcon}>
              <MaterialCommunityIcons
                name="map-marker"
                color={'white'}
                size={20}></MaterialCommunityIcons>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Cách đây {branch.location}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.itemContainer}>
            <View style={styles.containerIcon}>
              <MaterialCommunityIcons
                name="ticket-percent"
                color={'white'}
                size={20}></MaterialCommunityIcons>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Ưu đãi freeship</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.itemContainer}>
            <View style={styles.containerIcon}>
              <MaterialCommunityIcons
                name="star"
                color={'white'}
                size={20}></MaterialCommunityIcons>
            </View>
            <View style={styles.containerTitle}>
              <Text style={styles.title}>Đánh giá và nhận xét</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      </ImageBackground>

      <View style={styles.containerRating}>
        <View style={styles.containerStar}>
          <Text style={styles.titleItem}>Đánh giá(89 đánh giá)</Text>
          <View style={styles.containerItemStar}>
            <View style={styles.containerStarItem}>
              <Text style={styles.numberOfStar}>{numberOfRating}.0</Text>
              <View style={styles.StarItem}>
                <Stars
                  display={numberOfRating}
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
                />
              </View>
            </View>
            <View>
              <View style={styles.containerLineItem}>
                <Text style={styles.numberOfLine}>5</Text>
                <View style={styles.LineItemContainer}>
                  <View style={{...styles.LineItem, width: 50}}></View>
                  <View style={{...styles.LineItem2, width: 50}}></View>
                </View>
              </View>
              <View style={styles.containerLineItem}>
                <Text style={styles.numberOfLine}>4</Text>
                <View style={styles.LineItemContainer}>
                  <View style={{...styles.LineItem, width: 50}}></View>
                  <View style={{...styles.LineItem2, width: 50}}></View>
                </View>
              </View>
              <View style={styles.containerLineItem}>
                <Text style={styles.numberOfLine}>3</Text>
                <View style={styles.LineItemContainer}>
                  <View style={{...styles.LineItem, width: 50}}></View>
                  <View style={{...styles.LineItem2, width: 50}}></View>
                </View>
              </View>
              <View style={styles.containerLineItem}>
                <Text style={styles.numberOfLine}>2</Text>
                <View style={styles.LineItemContainer}>
                  <View style={{...styles.LineItem, width: 50}}></View>
                  <View style={{...styles.LineItem2, width: 50}}></View>
                </View>
              </View>
              <View style={styles.containerLineItem}>
                <Text style={styles.numberOfLine}>1</Text>
                <View style={styles.LineItemContainer}>
                  <View style={{...styles.LineItem, width: 50}}></View>
                  <View style={{...styles.LineItem2, width: 50}}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.containerComments}>
          <Text style={styles.titleItem}>Nhận xét(80 nhận xét)</Text>
          <View style={styles.userInfor}>
            <Image
              style={styles.avatar}
              source={{
                uri: 'https://i.pinimg.com/736x/ce/1b/3f/ce1b3fa7f7e6ba31b3db3d22589e6571.jpg',
              }}></Image>
            <View>
              <Text style={styles.titleInforUser}>DINH NGOC SON</Text>
              <Text style={styles.titleInforUser}>29/12/2023</Text>
            </View>
          </View>
          <View style={styles.containerStarItem}>
            <View style={styles.StarItem}>
              <Stars
                display={5}
                spacing={30}
                count={5}
                fullStar={
                  <Icon name={'star'} size={45} style={[styles.myStarStyle]} />
                }
                emptyStar={
                  <Icon
                    name={'star-outline'}
                    style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                  />
                }
              />
            </View>
          </View>
          <Text style={styles.titleComment}>
            Dạ em chào cô ạ , em xin báo cáo tiến độ task em làm trong tuần này
            là: -Cập nhật lại UI và gọi API để show data cho trang home. -Gọi
            API và tạo UI show data cho trang service và trang Detail Branch.
            Chúc cô có ngày nghĩ lễ Tết Tây vui vẻ bên người thân
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
  },
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
  title: {
    color: 'white',
    marginLeft: 5,
    padding: 5,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  containerTitle: {
    flex: 5,
  },
  containerIcon: {
    marginLeft: 15,
    flex: 2,
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
  containerComments: {
    flex: 2,
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
  LineItem: {
    height: 3,
    borderRadius: 20,
    marginLeft: 5,
    backgroundColor: 'white',
  },
  LineItem2: {
    height: 3,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  containerLineItem: {
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfor: {
    flexDirection: 'row',
    marginTop: 10,
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
  titleComment: {
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
  titleInforUser: {
    color: 'white',
  },
  LineItemContainer: {
    flexDirection: 'row',
  },
  numberOfLine: {
    color: 'white',
  },
});
