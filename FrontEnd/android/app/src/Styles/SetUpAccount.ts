import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#353B51',
    },
    viewbanner: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        // gap:70,
    },
    image: {
        width: 20,
        height: 20,
    },
    textVerify: {
        fontSize: 20,
        color: '#fff',
        marginLeft: '21%',
    },
    view: {
        padding: 20,
    },
    viewinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    textInfo: {
        fontSize: 18,
        color: '#fff',
    },
    images: {
        width: 30,
        height: 30,
    },
    textDelete: {
        fontSize: 18,
        color: 'red',
    },
});
export default styles;
