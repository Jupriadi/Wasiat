import React,{useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Logo from '../../assets/svg/logoNw.svg';

const Welcome =({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Home');
        },4000)
    });

    return (

        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Logo width={140} height={140} />
            <Text style={{color:"green",fontWeight:"bold"}}>HIZIB NAHDLATUL WATHAN</Text>
            <Text style={{color:"grey",fontWeight:"bold"}}>Versi 1.0.0</Text>
        </View>
    )
}

export default Welcome;