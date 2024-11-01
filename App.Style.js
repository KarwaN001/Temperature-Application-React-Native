import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({


    root :{
        flex: 1,
        justifyContent: 'center',
        //backgroundColor: '#4e4b4b',
        
    },

    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: "65%",
    },

    txt: {
        color: 'white',
        fontSize:35,
        fontWeight: 'bold',

    },

    txtbtn: {
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',

    },

    btn: {

        backgroundColor: '#3081d3',
        width: 200,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        fontWeight: 'bold',
    }

 });