import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Search from '../../assets/svg/search.svg';
import Favorite from '../../assets/svg/favorite.svg';

const TopNav =()=>{
    return(
        <View style={styles.topNav}>
            <View style={styles.searchBox}>
                <TextInput style={styles.searchInput}></TextInput>
                <Search style={{position:"absolute",left:13,top:9,}} width={20} height={20}/>
            </View>
            <View style={styles.btnBox}>
                <Favorite width={33} height={33}/>
            </View>
        </View>

    )
}
const styles=StyleSheet.create({
    // navigasi atas
    topNav:{
        height:48, paddingVertical:6, flexDirection: "row",
        paddingHorizontal:20,
        backgroundColor: "#eeeeee",
    },
    searchBox:{
        flex:1,marginRight:5,
        position:"relative",
    }, 
    searchInput:{
        borderWidth:1, borderColor:"grey",borderRadius:20,
        paddingLeft:50,
        
    },
    btnBox:{
        width: 40,
        alignItems:"center",justifyContent:"center",
        alignContent:"center",marginLeft:8,
    },

})

export default TopNav;