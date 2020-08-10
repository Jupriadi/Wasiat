import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
import TopNav from '../../components/topNav';
import DaftarIsi from '../../components/DaftarIsi';


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
      }
})

export default Home;