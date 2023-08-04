import React, { useState, createContext } from 'react'
import AxiosInstance from '../../axiosClient/AxiosInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UsersContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggerIn] = useState(false);
    const [user, setUser] = useState({});
    
    const login = async (email, password) => {
        try {
            const body = {
                email: email,
                password: password
            }
            const res = await AxiosInstance().post('/auth/login', body);
            console.log('login res', res);
            const token = res.data.token;
            await AsyncStorage.setItem('token', token);//Save token
            //SAVE INFORMATION USER
            // const user = res.data.user;
            // await AsyncStorage.setItem('user', user);
            setUser(res.data.user)
            setIsLoggerIn(true)
            return true;
        } catch (error) {
            console.log('Login error', error)
        }
        return false;
    }
    const register = async (email, password) => {
        console.log(email, password)
        try {
            const body = {
                email: email,
                password: password
            }
            const res = await AxiosInstance().post('/users/register', body);
            console.log("Responsive: ", res);
            return true;
        } catch (error) {
            console.log('Register error', error)
        }
        return false;
    }
   
    return (
        <UsersContext.Provider value={{ isLoggedIn, login, register, user, setUser}}>
            {children}
        </UsersContext.Provider>
    )
}