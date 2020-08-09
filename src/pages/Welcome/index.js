import React,{useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import kitab from '../../assets/img/kitab.png';

const Welcome =({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home');
        },2500)
    });

    return (

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image source={kitab} style={{width:200, height:200}} />
            <Text style={{color:"green",fontWeight:"bold"}}>HIZIB NAHDLATUL WATHAN</Text>
        </View>
    )
}

export default Welcome;