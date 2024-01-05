import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#353B51',
    },
    inner: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    viewbanner: {
      flexDirection: 'row',
      gap: 50,
      bottom: '1%',
    },
    viewImage: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    images: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: 'yellow',
    },
    image: {
      width: 20,
      height: 20,
    },
    textVerify: {
      fontSize: 20,
      color: '#fff',
    },
    view: {
      padding: 15,
      flexDirection: 'column',
      gap: 15,
    },
    viewEdit: {
      flexDirection: 'column',
      gap: 15,
    },
    textEdit: {
      fontSize: 17,
      color: '#fff',
      fontWeight: '600',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 15,
      paddingLeft: 20,
      color: '#fff',
    },
    button: {
      backgroundColor: '#47506C',
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 15,
      marginTop: 5,
    },
    textButton: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
export default styles  