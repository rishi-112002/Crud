import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/authenticate/Login';
import SignUp from './src/authenticate/SignUp';
import Forgot from './src/authenticate/Forgot';
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import RecordFormScreen from './src/screen/CreateAndEditScreen';

const Stack  = createNativeStackNavigator()
function AppNavigation(){
    return(
    <Stack.Navigator>
    <Stack.Screen component={Login} name='Login'options={{headerShown:false}}/>
    <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}}/>
    <Stack.Screen component={Forgot} name='Forgot' options={{headerShown:false}}/>
    <Stack.Screen component={HomeScreen} name='Home' options={{headerShown:false}}/>
    <Stack.Screen component={RecordFormScreen} name='ViewRecord' options={{headerShown:false}}/>
    <Stack.Screen component={RecordFormScreen} name='CreateRecord' options={{headerShown:false}}/>
    </Stack.Navigator>

    )
}
export default AppNavigation;