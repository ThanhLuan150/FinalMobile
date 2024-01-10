import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
interface propsButton{
    title:string
}
export const Button = ({title}:propsButton) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles=StyleSheet.create({
 button:{
    backgroundColor:'lightblue',
    borderRadius:15,
    padding:20,
    alignItems:'center',
    margin:20
 },
 title:{
   fontWeight:'bold'
 }
})