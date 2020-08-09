import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home,Welcome} from '../pages';

const Stack = createStackNavigator();
    
const Router=()=>{
   

    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Router;