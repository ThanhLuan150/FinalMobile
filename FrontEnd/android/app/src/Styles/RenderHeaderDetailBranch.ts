import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    imageMap: {
      width: '100%',
      height: 200,
    },
    containerInfBranch: {
      backgroundColor: '#5A617B',
      alignItems: 'center',
      margin: 50,
      borderRadius: 15,
      padding: 20,
    },
    Nametitle: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      margin: 5,
    },
    Addresstitle: {
      color: 'white',
      margin: 5,
    },
    line: {
      backgroundColor: 'white',
      width: 200,
      height: 2,
      margin: 10,
    },
    containerRating: {
      flexDirection: 'column',
      flex: 1,
      marginTop: 200,
    },
    containerStar: {
      flex: 1,
      margin: 20,
    },
    containerItemStar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    StarItem: {
      flexDirection: 'row',
    },
    containerStarItem: {
      alignItems: 'center',
    }, 
    myStarStyle: {
      color: 'yellow',
      backgroundColor: 'transparent',
      textShadowColor: 'black',
      textShadowOffset: {width: 1, height: 1},
      textShadowRadius: 2,
    },
    myEmptyStarStyle: {
      color: 'white',
    },
    titleItem: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    numberOfStar: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    containerStatus: {
      backgroundColor: '#353B51',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleStatus: {
      color: 'white',
    },
  });
  export default styles;