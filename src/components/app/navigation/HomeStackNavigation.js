import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DetailScreen from '../news/screens/DetailScreen';
import NewsNavigation from '../news/navigation/NewsNavigation';
import Profile from '../users/screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateNews from '../news/screens/CreateNews';
import ProfileEdit from '../users/screens/ProfileEdit';

const Stack = createNativeStackNavigator();

const FlatsListNavigator = () => {
    return (
            <Stack.Navigator
            screenOptions={{headerShown : false}}>
                <Stack.Screen name="Home" component={NewsNavigation} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
                <Stack.Screen name="Profile" component={Profile}/>
                <Stack.Screen name="ProfileEdit" component={ProfileEdit}/>
                <Stack.Screen name="CreateNews" component={CreateNews}/>

            </Stack.Navigator>
    )
}

export default FlatsListNavigator