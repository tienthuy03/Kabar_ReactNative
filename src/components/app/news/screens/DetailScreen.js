import { StyleSheet, View, Image, Text, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import color from '../../../contains/color'
import { NewsContext } from '../utilities/NewsContext';

const DetailScreen = (props) => {
    const { navigation, route } = props;
    const { id } = route.params;
    const [data, setData] = useState(null);
    const { getDetail } = useContext(NewsContext);

    useEffect(() => {
        const getData = async () => {
            const result = await getDetail(id);
            setData(result);
        }
        if (id) getData();
        return () => { };

    }, [id]);

    return (
        (id && data && data._id.toString() == id.toString()) ?
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}>
                <View style={styles.information}>
                    <Pressable
                        onPress={() => navigation.goBack()}>
                        <Image
                            style={styles.imgBack}
                            source={require('../../../media/images/back.png')} />
                    </Pressable>
                    <View style={styles.social}>
                        <Image
                            style={styles.imgShare}
                            source={require('../../../media/images/share.png')} />
                        <Image
                            style={styles.imgChoose}
                            source={require('../../../media/images/dot.png')} />
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.title}>
                        <Image
                            style={styles.imgTitle}
                            source={require('../../../media/images/Ellipse.png')} />
                        <Text style={styles.textTitle}>BCC News</Text>
                    </View>
                    <View style={styles.following}>
                        <Text style={styles.textFollowing}>Following</Text>
                    </View>
                </View>
                <View style={styles.image}>
                    <Image
                        style={styles.imgContent}
                        source={{ uri: data.image }} />
                </View>
                <View>
                    <Text style={styles.eur}>Europe</Text>
                    <Text style={styles.ukr}>{data.title}</Text>
                </View>
                <View style={styles.textContent}>
                    <Text style={styles.textUrk}>
                        {data.content}
                    </Text>
                </View>
            </ScrollView>
            : <View><Text style={styles.loading}>Đang tải dữ liệu....</Text></View>
    )
}

export default DetailScreen
const styles = StyleSheet.create({
    loading:{
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        color: color.black,
    },
    container: {
        flex: 1,
        backgroundColor: color.background_color,
        padding: 24,
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    imgBack: {
        width: 24,
        height: 24,
    },
    imgShare: {
        width: 24,
        height: 24,
        right: 15,
    },
    imgChoose: {
        right: 10,
        width: 24,
        height: 24,
    },
    social: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        left: 16,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    imgTitle: {
        width: 50,
        height: 50,
    },
    textTitle: {
        paddingLeft: 4,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black,
    },
    following: {
        height: 40,
        width: '35%',
        borderWidth: 1,
        borderRadius: 6,
        alignItems: 'center',
        borderColor: color.background_color,
        backgroundColor: color.background_button,
    },
    textFollowing: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        padding: 6,
        color: color.background,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 16,
    },
    imgContent: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    eur: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    ukr: {
        fontWeight: '400',
        fontSize: 24,
        lineHeight: 36,
        letterSpacing: 0.12,
        color: color.black,
    },
    textContent: {
        marginTop: 16,
        width: 380,
    },
    textUrk: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
});