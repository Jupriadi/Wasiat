import React, { Component } from 'react';
import {  View, Text } from 'react-native';


class Surah extends Component{
    render(){
        return(
            <View>
                <Text>Halaman Surah Nomor :</Text>
                <Text>{this.props.key}</Text>
            </View>
        ) 
    }
}

// const Surah =(props)=>{
// return (
    
// )
// }

export default Surah;
