import React from 'react';
import {FlatList, View} from 'react-native';
import {RenderComment} from './Components/RenderComment';
import { Button } from './Components/Button';
import { useRenderBranch } from '../../Hook/useRenderBranch';
import { RenderHeaderDetailBranch } from './RenderHeaderDetailBranch';
import styles from '../../Styles/BranchDetail';
type Props = {
  route:any
}
export const BranchDetail = (props: Props) => {
  const id_branch=props.route.params.item.id_branch;
  const {user}:any = useRenderBranch({id_branch:id_branch});
  const slicedUser = user && user.length > 0 ? user.slice(0, 5) : [];
  console.log('props',id_branch);
  return (
    <View style={styles.container}>
      <FlatList
        data={slicedUser}
        ListHeaderComponent={<RenderHeaderDetailBranch id_branch={id_branch}/>}
        renderItem={RenderComment}
        ListFooterComponent={<Button title="Đặt dịch vụ"/>}
        numColumns={1}
        horizontal={false}
         />
    </View>
  );
};

