import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';

export function Input( { setvalue , unit}) {

    return (
        <View style={s.root}>
            <TextInput
                style={s.input}
                placeholder="Enter Temperature here"
                maxLength={4}
                keyboardType={'numeric'}
                defaultValue={0}
                onChangeText={(txt) =>{
                   setvalue(txt);
                    // setvalue(changetemp("Cº",txt));
                }}
            />
            <Text style={s.unit}>{unit}</Text>
        </View>
    );
}

const s = StyleSheet.create({

   root:{
        justifyContent : "center"
   },


    input:{
        backgroundColor: 'white',
        padding: 15,
        borderRadius : 30,
        paddingHorizontal:40,
        fontSize : 20,
        width : 350,

    },

    unit:{
       position: 'absolute',
       fontSize :  30,
       alignSelf : "flex-end",
       justifyContent : "center",
       paddingRight : 15 ,

    }


});