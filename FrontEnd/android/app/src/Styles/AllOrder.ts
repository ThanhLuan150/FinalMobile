import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#5A617B',
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      width: '100%',
      borderRadius: 10,
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
    price: {
      fontSize: 12,
      color: 'white',
    },
    cancelButton: {
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
      backgroundColor: '#c25c5d',
    },
    cancelItem: {
      backgroundColor: '#8B0000',
    },
    iconContainer: {
      marginLeft: 10,
      left: '50%',
      bottom: '10%',
    },
    container: {
      backgroundColor: '#353B51',
      flex: 1,
      padding: 20,
    },
  });
  export default styles;