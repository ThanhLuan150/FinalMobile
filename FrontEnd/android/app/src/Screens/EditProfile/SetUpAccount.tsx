import React, { FC} from 'react';
import {  Text, View,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../Styles/SetUpAccount';
import useDeleteUsers from '../../Hook/useDelete';
const SetUpAccount: FC = (): JSX.Element => {
  const {useNavigationEditProfile ,deleteUser,useGoBack} = useDeleteUsers();
    return (
        <View style={styles.container}>
            <View style= {styles.viewbanner}>
                <TouchableOpacity style={{alignItems: 'center' }}  onPress={useGoBack}>
                    <Ionicons name="chevron-back-outline" size={30} color={'#fff'}/>
                </TouchableOpacity>
                <Text style={styles.textVerify}>Thiết lập tài khoản</Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={useNavigationEditProfile} style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Thông tin cá nhân</Text>
                    <Ionicons name="chevron-forward-outline" size={35} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Gối giặc của tôi</Text>
                    <Ionicons name="chevron-forward-outline" size={35} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo}>
                    <Text style={styles.textInfo}>Quyền riêng tư</Text>
                    <Ionicons name="chevron-forward-outline" size={35} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.viewinfo} onPress={deleteUser}>
                    <Text style={styles.textDelete}>Xóa tài khoản</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export  default SetUpAccount;

