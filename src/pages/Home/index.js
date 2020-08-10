import React from 'react';
import { View,Text, StyleSheet, Dimensions} from 'react-native';
import TopNav from '../../components/topNav';
import DaftarIsi from '../../components/DaftarIsi';


let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Home =({navigation,id})=>{
    
    const GoTo = (screen) => {
      navigation.navigate(screen)
    }

      return(
        <View  style={styles.container}>
            <TopNav/>
            <Text style={styles.title}>{id}</Text>
            
            <DaftarIsi id={id} onPress={()=>GoTo('Surah')}/>
        </View>
    )
};

const styles=StyleSheet.create({
      container:{
       backgroundColor:"#067405",flex:1,
       width: screenWidth,
       height: screenHeight,

      }
})

export default Home;