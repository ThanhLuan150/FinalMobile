/* eslint-disable quotes */
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#353B51',
    },
    header: {
      fontSize: 30,
      color:'white',
      bottom:50,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white',
      marginTop: '5%',
      marginBottom :'30%',
      justifyContent: 'center',
    },
    imageLogo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: 'center',
      top: '1%',
    },
    input: {
      padding: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#CCEBFC',
      width: '90%',
      color: 'white',
      marginBottom: 20,
    },
    buttonLogin: {
      padding: 20,
      marginTop: 20,
      borderRadius: 10,
      color: '#CCEBFC',
      width: '70%',
      borderWidth: 2,
      borderColor: 'white',
      backgroundColor: '#CCEBFC',
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    errorText:{
      color:'#fff',
    }
  });
// eslint-disable-next-line eol-last
export default styles;