import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home,Welcome,Surah} from '../pages';

const Stack = createStackNavigator();
    
const Router=()=>{
   

    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}  />
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
            <Stack.Screen name="Surah" component={Surah} options={{headerShown:false}}  />
        </Stack.Navigator>
    )
}

export default Router;