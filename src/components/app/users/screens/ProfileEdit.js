import { StyleSheet, Text, View, Image, TextInput, Pressable, ScrollView, ToastAndroid } from 'react-native'
import React, { useContext, useCallback, useEffect, useState } from 'react'
import color from '../../../contains/color'
import { NewsContext } from '../../news/utilities/NewsContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { UsersContext } from '../utilities/UsersContext';
const ProfileEdit = (props) => {
    const { navigation } = props;
    const { UpdateProfile, uploadImage } = useContext(NewsContext)
    const {  user,setUser } = useContext(UsersContext)
    const [name, setName] = useState(user.name)
    const [address, setAddress] = useState(user.address)
    const [phone, setPhone] = useState(user.phone)
    const [avatar, setAvatar] = useState(user.avatar)
    const [dob, setDob] = useState(user.dob)

    const handleUpdateProfile = useCallback(async() =>{
        const result = await UpdateProfile(name, address, phone, dob, avatar)

        if (result) {
            ToastAndroid.show('Update Profile Success', ToastAndroid.LONG)
        } else {
            ToastAndroid.show('Update Profile Failed', ToastAndroid.LONG)
        }

        }, [name, address, phone, dob, avatar]);

    const imageResult = async (result) => {
        if (result.didCancel) return;
        if (result.error) return;
        result = result.assets[0];
        const form = new FormData();
        form.append('image', {
            uri: result.uri,
            type: result.type,
            name: result.fileName
        });
        const data = await uploadImage(form);
        if (data) {
            // setAvatar(data.path);
            setUser({...user, avatar: data.path })
        }

    }


    const handlePhoto = useCallback(async () => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }
        //launchCamera(options, imageResult)
        launchImageLibrary(options, imageResult)
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={styles.choose}>
                <Pressable
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.imgDel}
                        source={require('../../../media/images/del.png')} />
                </Pressable>
                <Text style={styles.textProfile}> Edit Profile</Text>
                <Pressable
                    onPress={handleUpdateProfile}>
                    <Image
                        style={styles.imgCheck}
                        source={require('../../../media/images/check.png')} />
                </Pressable>

            </View>
            {
                user.avatar == ''
                ?
                  <View style={styles.avatar}>
                <Image
                    style={styles.imgAvatar}
                    source={require('../../../media/images/WilsonFranci.png')} />
                <Pressable
                    style={styles.imgCamera}
                    onPress={handlePhoto}>
                    <Image
                        source={require('../../../media/images/camera.png')} />
                </Pressable>
            </View>
            :
            <View style={styles.avatar}>
                <Image style={styles.imgAvatar}
                    source={{uri: user.avatar}} />
                     <Pressable
                    style={styles.imgCamera}
                    onPress={handlePhoto}>
                    <Image
                        source={require('../../../media/images/camera.png')} />
                </Pressable>
            </View>
            }

          
            <View style={styles.form}>
                <Text style={styles.username}>Username</Text>
                <TextInput style={styles.input}
                    placeholder='Enter your name'
                    value={name}
                    onChangeText={setName}></TextInput>
                <Text style={styles.username}>Full Name</Text>
                <TextInput style={styles.input}
                    value={user.email}
                    placeholder='Enter your fullname'></TextInput>
                <Text style={styles.username}>Address</Text>
                <TextInput style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                    placeholder='Enter your address'></TextInput>
                <Text style={styles.username}>Phone Number</Text>
                <TextInput style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder='Enter your phone'></TextInput>
                <Text style={styles.username}>Bio</Text>
                <TextInput style={styles.input}
                    value={dob}
                    placeholder='Enter your link'></TextInput>
                <Text style={styles.username}>Website</Text>
                <TextInput style={styles.input}
                    placeholder='Enter your link'></TextInput>
            </View>
        </ScrollView>
    )
}

export default ProfileEdit

const styles = StyleSheet.create({
    input: {
        borderRadius: 6,
        height: 48,
        padding: 10,
        borderColor: color.color_hint,
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 16,
    },
    username: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    form: {
        paddingTop: 16,
    },
    imgCamera: {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 110,
        left: 190,
    },
    imgAvatar: {
        width: 120,
        height: 120,
        position: 'relative',
        backgroundColor: 'gray',
        borderRadius: 60,
    },
    avatar: {
        alignItems: 'center',
        paddingTop: 16,
    },
    textProfile: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black
    },
    choose: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
        padding: 24,
    },
});