import React from 'react';
import {Text} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';

export const RenderMiniGame = ({item}:any) => {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: item.image}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:10
    },
    image:{
        width:50,
        height:50,
        borderRadius:10
    },
    name:{
        color:'white',
        width:'70%'
    }
});
