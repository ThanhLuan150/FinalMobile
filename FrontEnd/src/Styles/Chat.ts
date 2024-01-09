import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#353B51',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    viewNotification:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop:20,
    },
    textNotification:{
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
    },
    viewTouchableOpacity:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    button:{
        backgroundColor:'#999999',
        paddingTop:5,
        paddingBottom:7,
        paddingLeft:60,
        paddingRight:60,
        borderRadius:20,
    },
    text:{
        color:'#CCEBFC',
        fontWeight:'bold',
        textAlign:'center',
    },
    viewText:{
        flexDirection:'row',
        paddingTop:25,
        gap:15,
    },
    textToday:{
        color: '#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    textAll:{
        color: '#fff',
        fontSize:12,
        marginTop:7,
        fontWeight:'bold',
        textDecorationLine:'underline',
    },
    viewListNotification:{
        paddingTop:10,
        flexDirection:'column',
        gap:10,
    },
    viewitemNotification:{
        backgroundColor:'#999999',
        padding:15,
        borderRadius:15,
        flexDirection:'row',
        gap:10,
    },
    viewImgae:{
        backgroundColor:'#BBF4FB',
        borderRadius:50,
        padding:15,
    },
    textdescription:{
        color:'#BBF4FB',
        fontWeight:'600',
    },
    textseedetail:{
        color:'#FFF',
        fontWeight:'600',
        fontSize:11,
        marginTop:4,
    },
    textTime:{
        color:'#BBF4FB',
        fontWeight:'600',
        fontSize:11,
        marginTop:1,
    },
    viewStatus:{
        backgroundColor:'#BBF4FB',
        borderRadius:50,
        width:10,
        height:10,
        marginTop:4,
    },
});
export  default styles;