import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    keyboard: {
      flex: 1,
      backgroundColor: '#E6E6E6',
    },
    viewbanner: {
      backgroundColor: '#353B51',
      flexDirection: 'row',
      gap: 10,
      padding: 10,
      zIndex: 1,
    },
    textSupport: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
      marginTop: 3,
    },
    scrollview: {},
    viewItemMessage: {
      paddingTop: 10,
      paddingBottom: 20,
      flexDirection: 'row',
      gap: 10,
      paddingRight: 100,
    },
    viewmessagesupport: {
      backgroundColor: '#FFF',
      borderRadius: 15,
      borderWidth: 1.5,
      borderColor: '#CCCCCC',
      padding: 10,
    },
    viewItemMessageCustomer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 10,
      paddingBottom: 20,
      paddingLeft: 100,
    },
    viewmessageCustomer: {
      backgroundColor: '#353B51',
      padding: 10,
      borderRadius: 15,
    },
    textmessageCustomer: {
      color: '#fff',
      fontWeight: '600',
      flexWrap: 'wrap',
    },
    viewInputChat: {
      paddingLeft: 10,
      paddingRight: 20,
      flexDirection: 'row',
      gap: 10,
     
    },
    input: {
      borderWidth: 1.5,
      borderColor: '#CCCCCC',
      width: '80%',
      borderRadius: 15,
      paddingLeft: 20,
      zIndex: 1,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
    },
  });
  export  default styles;