import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {RenderComment} from './Components/RenderComment';
import { Button } from './Components/Button';
import { useRenderBranch } from '../../Hook/useRenderBranch';
import { RenderHeaderDetailBranch } from './RenderHeaderDetailBranch';

export const BranchDetail = () => {
  const {user}:any = useRenderBranch();
  const slicedUser = user && user.length > 0 ? user.slice(0, 5) : [];
  return (
    <View style={styles.container}>
      <FlatList
        data={slicedUser}
        ListHeaderComponent={RenderHeaderDetailBranch}
        renderItem={RenderComment}
        ListFooterComponent={<Button title='Đặt dịch vụ'/>}
        numColumns={1}
        horizontal={false}
        ></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#353B51',
    height: '100%',
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
