import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

function App(): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.sectionContainer}>
        <Image
        source={ require('../../Image/logo.png')}
        style={styles.imageStyle}/>
      <Text style={styles.openTitle}>WashWizie</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#353B51',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  openTitle: {
    fontSize: 24,
    fontWeight: '600',
    color:'white',
    marginTop: -16,
  },
  imageStyle:{
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

});

export default App;
