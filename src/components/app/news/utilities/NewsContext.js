import React, { useState, createContext } from "react";
import AxiosInstance from "../../axiosClient/AxiosInstance";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;
    const getNews = async () => {
        try {
            const res = await AxiosInstance().get('/articles');
            return res.data;

        } catch (error) {
            console.log(error);

        }
        return [];
    }
    const getDetail = async (id) => {
        try {
            const res = await AxiosInstance().get(`/articles/${id}/detail`);

            return res.data[0];

        } catch (error) {
            console.log(error);

        }
        return null;
    }
    //upload image
    const uploadImage = async (form) => {
        try {
            const res = await AxiosInstance('multipart/form-data').post('/media/upload', form);
            return res.data;
        } catch (error) {
            console.log('uploadImage error', error);
        }
        return null;
    }
    //Add News
    const addNews = async (title, content, image) => {
        try {
            const body = { title, content, image };
            await AxiosInstance().post('/articles', body);
            return true;
        } catch (error) {
            console.log('addNews error', error);
        }
        return false;
    }
    const UpdateProfile = async(name,address, phone, avatar, dob) => {
        try {
            const body = {
                name: name,
                address: address,
                phone: phone,
                avatar: avatar,
                dob: dob
            }
            const res = await AxiosInstance().post('/users/update-profile', body);
            console.log("Responsive: ", res);
            return true;
        } catch (error) {
            console.log('UpdateProfile error', error)
        }
        return false;
    }
    return (
        <NewsContext.Provider value={{ getNews, getDetail, uploadImage, addNews, UpdateProfile }}>
            {children}
        </NewsContext.Provider>
    )
}
