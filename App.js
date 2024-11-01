import React, {useEffect, useState} from 'react';
import {
    ImageBackground,
    ImageBackgroundComponent,
    ImageComponent,
    SafeAreaView,
    Text,
    TouchableOpacity,
    TouchableOpacityComponent,
    View
} from 'react-native';
import { s } from './App.Style';
import { Input } from './components/Input';
import {Unit , ChangeTemp , GetOpositeUnit , ChangeConvert} from "./components/changeTemp";

const cold = require('./assets/cold.png');
const hot = require('./assets/hot.png');



export default function App() {

    const [value , setValue] = React.useState(0);
    const [unit, setunit] = React.useState(Unit.C);
    const [currentBackground , setCurrentBackground] = useState(hot);

    useEffect(()=>{
            if(unit == Unit.C){
                if(value <=0){
                    setCurrentBackground(cold);
                }else{
                    setCurrentBackground(hot);
                }
            }else if(unit == Unit.F){
                if(value <=32){
                    setCurrentBackground(cold);
                }else{
                    setCurrentBackground(hot);
                }
            }
    },[value,  GetOpositeUnit(unit)]);



    function changeTempWithUpdate(){
        if (isNaN(value)) {
            return <Text style={s.txt}>Enter number !</Text> ;
        }else{
           return <Text  style={s.txt}>{ ChangeTemp(unit ,value).toFixed(1)}  {GetOpositeUnit(unit)}</Text>;
        }
    }

   

    //console.log(ChangeTemp("Cº" , 1));
    console.log(value);  // test test

  return (
    <ImageBackground style={s.root}  source={currentBackground}>
      <SafeAreaView style={s.root}>
     
        <View style={s.container}>

            {changeTempWithUpdate()}

           <Input
              setvalue ={setValue}
              unit={ unit}
          />

            <TouchableOpacity onPress={()=>{
                setunit(GetOpositeUnit(unit));
            }} style={s.btn}>
                <Text style={s.txtbtn}>convert to {GetOpositeUnit(unit)}</Text>
            </TouchableOpacity>


        </View>
        
      </SafeAreaView>
      </ImageBackground>
  );
}
