import React,{useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import kitab from '../../assets/img/LogoNw.png';

const Welcome =({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home');
        },2500)
    });

    return (

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image source={kitab} style={{width:150, height:150}} />
            <Text style={{color:"green",fontWeight:"bold"}}>HIZIB NAHDLATUL WATHAN</Text>
            <Text style={{color:"grey",fontWeight:"bold"}}>Versi 1.0.0</Text>
        </View>
    )
}

export default Welcome;