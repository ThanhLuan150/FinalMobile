import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionContainer: {
      width: '100%',
      backgroundColor: '#353B51',
      padding: 24,
      flex: 1,
      justifyContent: 'space-around',
      gap: 10,
      alignItems: 'center',
    },
    children: {
      width: '100%',
      alignItems: 'center',
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: '700',
      color: 'white',
      marginBottom: '10%',
      justifyContent: 'center',
    },
    imageLogo: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
      justifyContent: 'center',
      marginTop: '30%',
    },
    input: {
      padding: 5,
      paddingLeft: '5%',
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#CCEBFC',
      width: '100%',
      color: 'white',
      marginBottom: 30,
    },
    textInput: {
      color: 'white',
    },
    buttonRegister: {
      padding: 20,
      marginTop: 10,
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
    termsText: {
      color: '#CCEBFC',
      padding: 20,
    },
    TextLogin: {
      color: 'white',
      top: 4,
      fontWeight: '700',
    },
    errorText: {
      color: '#fff',
    },
  });

  export  default styles;