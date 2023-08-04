import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import color from '../../../contains/color';
import { NewsContext } from '../utilities/NewsContext';

const Home = (props) => {
    const { getNews } = useContext(NewsContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        //tu dong chay khi component render
        //chi chay 1 lan duy nhat
    });
    useEffect(() => {
        //tu dong chay khi component render
        //chay nhieu lan khi co su thay doi state cua component
        const getData = async () => {
            const result = await getNews();
            setData(result);
        }
        getData();
        //return () => { }
    }, []);
    useEffect(() => {
        //tu dong chay khi component render
        //chay nhieu lan khi co su thay doi state cua data
        //cua component
    }, [data]);

    const { navigation } = props;
    const renderItem = (props) => {
        const { item } = props;
        const { title, image, _id } = item;
        return (
            <Pressable
                onPress={() => navigation.navigate('DetailScreen', {id: _id})}>
                <View style={styles.itemList}>
                    <View style={styles.imgList}>
                        <Image
                            style={styles.itemImg}
                            source={{ uri: image }}/>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textEur}>Europe</Text>
                        <Text style={styles.textContent}> {title} </Text>
                        <View style={styles.information}>
                            <Image style={styles.imgInformation}
                                source={require('../../../media/images/Ellipse.png')} />
                            <Text style={styles.textInformation}>BBC News</Text>
                            <View style={styles.time}>
                                <Image
                                    style={styles.imgTime}
                                    source={require('../../../media/images/clock.png')} />
                                <Text style={styles.textTime}>4h ago</Text>
                            </View>
                            <Image
                                style={styles.icChoose}
                                source={require('../../../media/images/icChoose.png')} />
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    }
    //Reload lai danh sach
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async() => {
        setRefreshing(true);
        const result = await getNews();
        await getNews();
        setRefreshing(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={styles.imgLogo}
                    source={require('../../../media/images/logo.png')} />
                <View style={styles.bell}>
                    <Image
                        style={styles.imgBell}
                        source={require('../../../media/images/bell.png')} />
                </View>
            </View>
            <View style={styles.title}>
                <Text style={styles.latest}>Latest</Text>
                <Text style={styles.seeAll}>See all</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={Math.random}
                showsVerticalScrollIndicator={false}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    icChoose: {
        marginLeft: 20,
        alignItems: 'center'
    },
    textTime: {
        marginLeft: 4,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: color.color_hint
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        alignItems: 'center'
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
        marginTop: 4,
        alignItems: 'center'
    },
    imgInformation: {
        width: 24,
        height: 24,
    },
    textInformation: {
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        paddingLeft: 4,
        textAlign: 'center'
    },
    textContent: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        paddingHorizontal: 8,
        marginTop: 4,
        color: color.color_hint
    },
    textEur: {
        marginLeft: 8,
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: color.color_hint
    },
    itemList: {
        flexDirection: 'row',
        paddingTop: 16,
        padding: 12,
    },
    imgList: {
        width: 100,
        height: 110,
        borderRadius: 24,
        backgroundColor: color.background_color,
    },
    itemImg: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    content: {
        width: '80%',
    },
    seeAll: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    latest: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 42,
    },
    imgLogo: {
        width: 100,
        height: 30,
    },
    logo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgBell: {
        width: 30,
        height: 30,
        padding: 16,
    },
    bell: {
        width: 32,
        height: 32,
        backgroundColor: color.background_color,
        borderWidth: 1,
        borderColor: color.background_color,
        borderRadius: 6,
        left: 10,
    },
    container: {
        flex: 1,
        backgroundColor: color.background_color,
        padding: 24,
    }
});