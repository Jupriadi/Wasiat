import React from 'react';
import { Text, FlatList,SafeAreaView, View, Image,StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DATA from '../../assets/Data.js';

const Item = ({ judul,id}) => {
    var pict = ("../../assets/img/Text/"+id+".png");
    return(
        <TouchableOpacity style={styles.item} key={id}>
            <Image style={styles.img} source={{uri:pict}} />
            <Text>{pict}</Text>
        </TouchableOpacity>
    )
  };
  
const Surah = () => {
    const renderItem = ({ item}) => (
        <Item judul={item.judul} id={item.id}  />

      );

    return(
        <View style={{flex:1}}>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id }
                />
            </SafeAreaView>      
        </View>
    )
}

// const Surah =(props)=>{
// return (
    
// )
// }

const styles=StyleSheet.create({
    img:{
        width:"100%",
        resizeMode: "contain",
    },
    // flatlist
    item: {
        marginHorizontal: 16,
       padding:8, borderBottomColor:"grey",borderBottomWidth:1,
      },
})


export default Surah;
