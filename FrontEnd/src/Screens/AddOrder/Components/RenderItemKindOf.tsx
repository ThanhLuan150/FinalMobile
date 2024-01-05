import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';
export const RenderItemKindOf = ({item}:any) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerItemKindOf}>
        <Text style={styles.nameItemKindOf}>{item.name_typeoflaundries}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <View style={styles.containerLine}>
        <View style={styles.line}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerItemKindOf: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
  },
  nameItemKindOf: {
    color: 'lightblue',
    fontWeight: '300',
  },
  line: {
    width: '100%',
    height: 1,
    marginEnd: 20,
    backgroundColor: 'white',
  },
  containerLine: {
    marginRight: 20,
    marginLeft: 20,
  },
  container:{
    marginBottom:30
  }

});
