import { StyleSheet, Text, View, Image, TextInput, Pressable, Alert } from 'react-native'
import React, { useCallback, useContext, useState } from 'react'
import color from '../../../contains/color'
import { NewsContext } from '../utilities/NewsContext'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CreateNews = (props) => {
    const { navigation } = props;
    const { addNews, uploadImage } = useContext(NewsContext);

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

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
            setImage(data.path);
        }
    }

    const handleCreateNews = useCallback(async () => {
        const options = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }
        //launchCamera(options, imageResult);
        launchImageLibrary(options, imageResult)
    }, [])

    const handleAddNews = useCallback(async () => {
        const result = await addNews(title, content, image)
        if (result) {
            Alert.alert('Add News', 'News added successfully')
            setTitle('')
            setContent('')
            setImage(null)
        } else {
            Alert.alert('Add News', 'News add failed')

        }
    }, [title, content, image]);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Pressable
                        onPress={() => navigation.goBack()}>
                        <Image style={styles.imgBack} source={require('../../../media/images/back.png')} />
                    </Pressable>
                    <Text style={styles.textCreateNews}>Create News</Text>
                    <Image style={styles.imgDot} source={require('../../../media/images/dot.png')} />
                </View>
                {
                    image ?
                        <Image
                            source={{ uri: image }}
                            style={styles.content}
                        />
                        :
                        <Pressable
                            onPress={handleCreateNews}
                            style={styles.content}>
                            <View style={styles.inputContainer}>
                                <Image style={styles.imgInput} source={require('../../../media/images/add.png')} />
                                <Text style={styles.textAdd}>Add Cover Photo</Text>
                            </View>
                        </Pressable>

                }

                <TextInput
                    style={styles.inputNews}
                    placeholder='News Text'
                    value={title}
                    onChangeText={setTitle} />
                <View style={styles.line}></View>
                <TextInput
                    style={styles.inputAdd}
                    placeholder='Add News/Article'
                    numberOfLines={4}
                    multiline={true}
                    value={content}
                    onChangeText={setContent} />

            </View>
            <View style={styles.footer}>
                <View style={styles.social}>
                    <View style={styles.imgSocial}>
                        <Image style={styles.imgText} source={require('../../../media/images/text.png')} />
                        <Image style={styles.imgLine} source={require('../../../media/images/line.png')} />
                        <Image style={styles.imgPicture} source={require('../../../media/images/picture.png')} />
                        <Image style={styles.imgChoose} source={require('../../../media/images/icChoose.png')} />
                    </View>
                    <Pressable
                        onPress={handleAddNews}
                        style={styles.publish}>
                        <Text style={styles.textPublish}>Publish</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default CreateNews

const styles = StyleSheet.create({
    textPublish: {
        color: '#667080',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    publish: {
        width: '30%',
        height: 50,
        backgroundColor: '#EEF1F4',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imgSocial: {
        width: '40%',
        backgroundColor: color.background_color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    social: {
        width: '100%',
        backgroundColor: color.background_color,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 50,
        padding: 24
    },
    inputAdd: {
        width: '100%',
        backgroundColor: color.background_color,
        marginTop: 16,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
        fontSize: 16,
    },
    line: {
        width: '100%',
        backgroundColor: '#C4C4C4',
        height: 1

    },
    inputNews: {
        width: '100%',
        backgroundColor: color.background_color,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
        fontSize: 24,
    },
    textAdd: {
        fontSize: 14,
        fontWeight: '400',
        color: color.color_hint,
        fontWeight: '400',
        lineHeight: 21,
        letterSpacing: 0.12,
        marginTop: 13
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: 183,
        backgroundColor: color.primaryColor,
        marginTop: 16,
        borderRadius: 6,
        borderWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 24
    },
    imgDot: {
        width: 24,
        height: 24,
    },
    textCreateNews: {
        fontSize: 16,
        fontWeight: 'bold',
        color: color.black,
        fontWeight: '400',
        lineHeight: 24,
        letterSpacing: 0.12
    },
    imgBack: {
        width: 24,
        height: 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        flex: 0.1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        flex: 0.9,
        backgroundColor: color.background_color,
        padding: 24
    },
    container: {
        flex: 1,
        backgroundColor: color.background_color,
    }
})
//CallBack ham trong ham duoi dang tham so