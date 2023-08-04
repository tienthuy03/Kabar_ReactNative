import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../users/screens/Profile';
import ProfileEdit from '../users/screens/ProfileEdit';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
         <Stack.Navigator
         initialRouteName='Profile'
            screenOptions={{headerShown : false}}>
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            </Stack.Navigator>
  )
}

export default StackNavigator
