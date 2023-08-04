import { StyleSheet, Text, View, Image, Pressable, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import color from '../../../contains/color'
import { UsersContext } from '../utilities/UsersContext';
const Profile = (props) => {
    const { navigation } = props;
    const { item } = props;
    const {user}=useContext(UsersContext);
 
    const renderItem = () => {
        return (
            <View style={styles.content}>
                <View style={styles.itemList}>
                    <View style={styles.imgList}>
                        <Image
                            style={styles.itemImg}
                            source={require('../../../media/images/nfts.png')} />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.contentTitle}>
                            <Text style={styles.textNFTs}>NFTs</Text>
                            <Text style={styles.textMinting}> Minting Your First NFT: A Beginner's Guide to Creating...</Text>
                        </View>
                        <View style={styles.information}>
                            <Image style={styles.imgInformation}
                                source={require('../../../media/images/WilsonFranci.png')} />
                            <Text style={styles.textWilsonFranci}>Wilson Franci</Text>
                            <View style={styles.time}>
                                <Image
                                    style={styles.imgTime}
                                    source={require('../../../media/images/clock.png')} />
                                <Text style={styles.textTime}>15m ago</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.choose}>
               <View></View>

                <Text style={styles.textProfile}>Profile</Text>
                <Image
                    style={styles.imgChoose}
                    source={require('../../../media/images/prof.png')} />
            </View>
            <View style={styles.avatar}>
            {
                    (user.avatar)
                        ?
                        <Image style={styles.imgAvatar}
                            source={{ uri: user.avatar }}/>
                        :
                        <Image
                        style={styles.imgAvatar}
                            source={require('../../../media/images/WilsonFranci.png')}/>
                }
                <View style={styles.social}>
                    <Text style={styles.numberSocial}>2156</Text>
                    <Text style={styles.textSocial}>Followers</Text>
                </View>
                <View style={styles.social}>
                    <Text style={styles.numberSocial}>567</Text>
                    <Text style={styles.textSocial}>Following</Text>
                </View>
                <View style={styles.social}>
                    <Text style={styles.numberSocial}>23</Text>
                    <Text style={styles.textSocial}>News</Text>
                </View>
            </View>
            
            <Text style={styles.textName}>{user.email}</Text>
            <Text style={styles.textAddress}>{user.name}</Text>
            <Text style={styles.textAddress}>{user.address}</Text>
            <View style={styles.btnInformation}>
                <Pressable style={styles.buttonLabel}
                    onPress={() => navigation.navigate('ProfileEdit',)}>
                    <Text style={styles.textInformation} >Edit profile</Text>
                </Pressable>
                <Pressable
                    onPress={() => navigation.navigate('CreateNews')}
                    style={styles.buttonLabel}>
                    <Text style={styles.textInformation}>Create News</Text>
                </Pressable>
            </View>
            <View style={styles.tabList}>
                <Text style={styles.textNews}>News</Text>
                <View style={styles.recent}>
                    <Text style={styles.textRecent}>Recent</Text>
                    <View style={styles.LineRecent}></View>
                </View>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={renderItem}
                keyExtractor={Math.random}
                showsVerticalScrollIndicator={false} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
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
        marginLeft: 30,
        alignItems: 'center'
    },
    contentTitle: {
        width: 264
    },
    textWilsonFranci: {
        marginLeft: 4,
        fontWeight: '600',
        fontSize: 13,
        lineHeight: 19.5,
        letterSpacing: 0.12,
        color: color.color_hint
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
        marginTop: 4,
        alignItems: 'center',
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
    textMinting: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        marginTop: 4,
        marginLeft: 4,
        color: color.black
    },
    textNFTs: {
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
    },
    imgList: {
        width: 100,
        height: 100,
        borderRadius: 24,
        backgroundColor: color.background_color,
    },
    itemImg: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    },
    LineRecent: {
        width: 56,
        height: 4,
        backgroundColor: color.background_button,
        marginTop: 4,
    },
    textRecent: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black
    },
    textNews: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.color_hint
    },
    tabList: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 16,
    },
    btnInformation: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
    },
    buttonLabel: {
        height: 48,
        width: '46%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        backgroundColor: color.background_button,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    textInformation: {
        color: color.background_color,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    Account: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    descriptionName: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    textName: {
        width: 300,
        height: 48,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black,
        paddingTop: 16,
    },
    textSocial: {
        fontFamily: '400',
        fontSize: 14,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    numberSocial: {
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.12,
        lineHeight: 24,
        color: color.black,
    },
    social: {
        alignItems: 'center',
    },
    imgAvatar: {
        borderRadius: 70,
        width: 100,
        height: 100
    },
    avatar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 13,
    },
    textProfile: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: color.black,
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
// {"data": 
// {"_id": "63f0de9396bae40014bcd73c", 
// "createdAt": "2023-02-18T14:20:03.899Z", 
// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UzYTI0MWFmZjRiZDAwMTQ1M2I5ZDQiLCJlbWFpbCI6InBvc3RAZ21haWwuY29tIiwibmFtZSI6IiIsImFkZHJlc3MiOiIiLCJwaG9uZSI6IiIsImF2YXRhciI6IiIsImlhdCI6MTY3NjczMDAwMywiZXhwIjoxNjc5MzIyMDAzfQ.EUUvXE4JKgr3YN9lTDYWl-B3FrOIKWCp3MwVzjjVE4k", 
// "updatedAt": "2023-02-18T14:20:03.899Z", 
// "user": {"__v": 0, 
// "_id": "63e3a241aff4bd001453b9d4", 
// "address": "", 
// "avatar": "",
//  "createdAt": "2023-02-08T13:23:13.891Z", 
//  "dob": "2023-02-08T13:23:13.890Z", 
//  "email": "post@gmail.com",
//   "name": "", 
//   "phone": "",
//    "updatedAt": "2023-02-08T13:23:13.891Z"}}, 
//    "error": false, "responseTimestamp": "2023-02-18T14:20:04.495Z", "statusCode": 200}