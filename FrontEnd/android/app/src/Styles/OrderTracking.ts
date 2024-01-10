import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#353B51',
      flex: 1,
      padding: 20,
    },
    item: {
      backgroundColor: '#5A617B',
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      width: '100%',
      borderRadius: 10,
      bottom:'20%',
    },
    leftContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContent: {
      alignItems: 'flex-end',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    textContainer: {
      flexShrink: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
    },
    status: {
      fontSize: 14,
      color: 'white',
      top: '10%',
    },
    button: {
      backgroundColor: '#CCEBFC',
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    time: {
      fontSize: 12,
      color: 'white',
    },
    containTitle: {
      height: '100%',
      position: 'absolute',
      color: 'white',
      top: '70%',
      fontSize: 18,
      lineHeight: 24,
      textAlign: 'center',
    },
    imageStyle: {
      bottom:'10%',
    },
    boldText: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    buttonDetail: {
      backgroundColor: '#CCEBFC',
      padding: 20,
      top:'10%',
      borderRadius: 10,
      width: '80%',
    },
    buttonText: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
export default styles;