import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    feature: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginLeft: 30,
    },
    titleFeature: {
      color: 'white',
      fontWeight: 'bold',
      width: '65%',
    },
    containerViewOrder: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20,
    },
    titleViewOrder: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    squareCreateOrder: {
      alignItems: 'center',
      padding: 12,
      borderRadius: 20,
      backgroundColor: '#656b7f',
      marginRight: 10,
    },
    containerCreateOrder: {
      flexDirection: 'row',
      marginLeft: 20,
      marginRight: 10,
    },
    PriceTableImg: {
      width: 350,
      height: 200,
      objectFit: 'fill',
      borderRadius: 20,
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 30,
    },
    titlemenu: {
      marginLeft: 20,
      marginTop: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
    FlashlistRenderLocation: {
      marginRight: 10,
    },
    ContainerPriceTableImg:{
      alignItems:'center'
    }
  });
export default styles;  