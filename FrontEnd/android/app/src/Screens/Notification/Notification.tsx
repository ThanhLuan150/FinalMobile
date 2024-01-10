import React, {FC} from 'react';
import {Text,View,Image,TouchableOpacity,FlatList,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../../Styles/Notificarion';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';
const Notification: FC = (): JSX.Element => {
  const navigation = useNavigation();
  const useNavigationChat = () => {
    navigation.navigate('Chat');
  };
  const {data} = useQuery({
    queryKey: ['Notification'],
    queryFn: async () =>
      axios
        .get('https://62bf-14-176-231-248.ngrok-free.app/api/Notification')
        .then(res => res.data),
  });
  console.log('notification', data);
  return (
    <View style={styles.container}>
      <View style={styles.viewNotification}>
        <Text style={styles.textNotification}>Thông báo</Text>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../Image/notification1.png')}
        />
      </View>
      <View style={styles.viewTouchableOpacity}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Chung</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={useNavigationChat}>
          <Text style={styles.text}>Tin nhắn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textToday}>Hôm nay</Text>
        <Text style={styles.textAll}>Xem Tất cả</Text>
      </View>
      <FlatList
        data={data}
        contentContainerStyle={{gap: 10, paddingTop: 20, paddingBottom: 20}}
        renderItem={({item}) => (
          <View style={styles.viewListNotification}>
            <View style={styles.viewitemNotification}>
              <View style={styles.viewImgae}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../../Image/Voucher.png')}></Image>
              </View>
              <View>
                <Text style={styles.textdescription}>
                  {item.content}
                </Text>
                <TouchableOpacity style={styles.textseedetail}>
                    <Text style={styles.textseedetail}>Xem chi tiết đơn hàng.</Text>  
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.textTime}>12 phút</Text>
                <View style={styles.viewStatus}></View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default Notification;
