import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#353B51',
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
      bottom: '5%',
    },
    imageLogo: {
      bottom: '7%',
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: 'center',
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    optTextTop: {
      fontSize: 30,
      color: 'white',
      top: '2%',
    },
    optTextCenter: {
      color: 'white',
      top: '4%',
    },
    optTextBottom: {
      color: 'white',
      top: '400%',
    },
    optText: {
      color: 'black',
    },
    otpInput: {
      borderWidth: 1,
      borderRadius: 10,
      margin: 4,
      top: '17%',
      textAlign: 'center',
      fontSize: 18,
      width: '15%',
      borderColor: '#CCEBFC',
      color: 'white',
    },
    buttonOTP: {
      paddingVertical: 16,
      marginTop: '40%',
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
  });
  export  default styles