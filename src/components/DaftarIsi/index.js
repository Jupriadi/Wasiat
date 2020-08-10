import React from 'react';
import { View,Text, StyleSheet, SafeAreaView,FlatList,Image } from 'react-native';
import DATA from '../../assets/Data.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ judul,id, onPress}) => {
  return(
      <TouchableOpacity style={styles.item} onPress={onPress} key={id}>
          <View style={{flexDirection:"row"}}>
              <Image source={require('../../assets/img/LogoNw.png')} style={{width:40,height:40}} />
              <View style={{flex:1,justifyContent:"center"}}>
                <Text style={styles.title}>{judul}</Text>
                <Text style={styles.title}>{id}</Text>
              </View>
          </View>
      </TouchableOpacity>
  )
};

const DaftarIsi =({onPress,key})=>{
   

    const renderItem = ({ item}) => (
        <Item judul={item.judul} id={item.id}  onPress={onPress} />
      );
      return(
        <View  style={styles.container}>
            <SafeAreaView >
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        
        </View>
    )
};

const styles=StyleSheet.create({

    // flatlist
    item: {
        marginVertical: 2,
        marginHorizontal: 16,
       padding:8, borderBottomColor:"grey",borderBottomWidth:1,
      },
      title: {
        fontSize: 18, color:"white",
        paddingLeft:8
      },
      container:{
       backgroundColor:"#067405",flex:1,
      }
})

export default DaftarIsi;