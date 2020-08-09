import React from 'react';
import { View,Text, StyleSheet, SafeAreaView,FlatList,Image } from 'react-native';
import DATA from '../../assets/Data';
import TopNav from '../../components/topNav';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Item = ({ judul }) => (

      <TouchableOpacity style={styles.item} onPress={()=>alert(judul)}>
          <View style={{flexDirection:"row"}}>
              <Image source={require('../../assets/img/LogoNw.png')} style={{width:40,height:40}} />
              <View style={{flex:1,justifyContent:"center"}}>
                <Text style={styles.title}>{judul}</Text>
              </View>
          </View>
      </TouchableOpacity>
);

const Home =()=>{
    const renderItem = ({ item,nomor }) => (
        <Item judul={item.judul} nomor={item.nomor}  />
      );
    return(
        <View  style={styles.container}>
            <TopNav/>
            <SafeAreaView style={{marginTop:20,}}>
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
        backgroundColor:"green",padding:8,
      },
      title: {
        fontSize: 18, color:"#cdb30c",
        paddingLeft:8
      },
      container:{
       backgroundColor:"#ade498",flex:1,
      }
})

export default Home;