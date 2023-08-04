import Home from '../screens/Home';
import Profile from '../../users/screens/Profile'
import Explore from '../screens/Explore'
import Bookmark from '../screens/Bookmark'
import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const NewsNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../media/images/icHome_active.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../media/images/icHome.png')} />
                            )
                        }
                    } else if (route.name === 'Explore') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../media/images/icExplore_active.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../media/images/icExplore.png')} />
                            )
                        }
                    }
                    else if (route.name === 'Bookmark') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../media/images/icBookmark_active.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../media/images/icBookmark.png')} />
                            )
                        }
                    }
                    else if (route.name === 'Profile') {
                        if (focused) {
                            return (
                                <Image
                                    source={require('../../../media/images/icProfile_active.png')} />
                            )
                        } else {
                            return (
                                <Image
                                    source={require('../../../media/images/icProfile.png')} />
                            )
                        }
                    }
                },
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Explore" component={Explore} />
            <Tab.Screen name="Bookmark" component={Bookmark} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}
export default NewsNavigation