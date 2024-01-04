import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 50,
    },
    containerIcon: {
      flex: 1,
    },
    containerTitle: {
      flex: 6,
    },
    line: {
      backgroundColor: 'white',
      width: 200,
      height: 2,
      margin: 10,
    },
    title: {
      color: 'white',
      marginLeft: 5,
      padding: 5,
    },
  });
  export default  styles;