import React from 'react';
import { View,Text, StyleSheet, SafeAreaView,FlatList } from 'react-native';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';


const App =()=>{
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    return(
        <View style={styles.container}>
            <View style={styles.contentBox}>
                <NavigationContainer>
                    <Router/>
                </NavigationContainer>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({

    // box styles
    container:{
        backgroundColor:"#dddddd", flex:1,
    },
    contentBox:{
        flex:1, backgroundColor:"#535204",
    },

})

export default App;