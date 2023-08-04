import React, {useContext}  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import NewsNavigation from '../news/navigation/NewsNavigation'
import UserNavigation from '../users/navigation/UserNavigation'
import { UsersContext } from '../users/utilities/UsersContext'
import HomeStackNavigation from '../navigation/HomeStackNavigation'


const AppNavigation = () => {
    const {isLoggedIn} = useContext(UsersContext)
  return (
   <NavigationContainer>
         {isLoggedIn ? <HomeStackNavigation/> : <UserNavigation/>}  
        {/* <HomeStackNavigation/> */}
   </NavigationContainer>
  )
}

export default AppNavigation;
