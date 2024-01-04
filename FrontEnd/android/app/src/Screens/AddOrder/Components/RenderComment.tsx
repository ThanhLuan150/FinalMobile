import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const RenderComment = ({item}: any) => {
  return (
    <View style={styles.containerComent}>
      <View style={styles.userInfor}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://i.pinimg.com/736x/ce/1b/3f/ce1b3fa7f7e6ba31b3db3d22589e6571.jpg',
          }}></Image>
        <View>
          <Text style={styles.titleInforUser}>{item.user.username}</Text>
          <Text style={styles.titleInforUser}>{item.created_at}</Text>
        </View>
      </View>
      <View style={styles.containerStarItem}>
        <View style={styles.StarItem}>
          <Stars
            key={1}
            display={Number(item.rating)}
            spacing={30}
            count={5}
            fullStar={
              <Icon name={'star'} size={45} style={[styles.myStarStyle]} />
            }
            emptyStar={
              <Icon
                name={'star-outline'}
                size={45}
                style={[styles.myStarStyle, styles.myEmptyStarStyle]}
              />
            }
          />
        </View>
      </View>
      <Text style={styles.titleComment}>{item.comment}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerComent: {
    marginLeft: 20,
  },
  userInfor: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  titleInforUser: {
    color: 'white',
  },
  containerStarItem: {
    alignItems: 'center',
  },
  StarItem: {
    flexDirection: 'row',
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
});
