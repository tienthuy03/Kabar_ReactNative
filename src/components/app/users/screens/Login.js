import { StyleSheet, Text, TextInput, View, Image, Pressable, ToastAndroid } from 'react-native';
import React, { useContext, useState } from 'react';
import color from '../../../contains/color';
import { UsersContext } from '../utilities/UsersContext';
import CheckBox from '@react-native-community/checkbox';

const Login = (props) => {
    const [isSelected, setIsSelected] = useState('');//Checkbox
    const { navigation } = props;
    const { login } = useContext(UsersContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        const res = await login(email, password);
        if (res) {
            ToastAndroid.show('Login Success', ToastAndroid.SHORT);
        }else{
            ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.hello}>Hello</Text>
            <Text style={styles.again}>Again!</Text>
            <Text style={styles.welcome}>Welcome back you've been missed</Text>
            <Text style={styles.username}>Email</Text>
            <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholder='Enter your email' />
            <Text style={styles.password}>Password</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.input}
                    placeholder='Enter your password' />
                <Image source={require('../../../media/images/eyes.png')}
                    style={styles.eye} />
            </View>
            <View style={styles.check}>
                <View style={styles.icCheckbox}>
                    <CheckBox
                        style={styles.iconCB}
                        value={isSelected}
                        onValueChange={setIsSelected} />
                    <Text style={styles.remember}>Remember me</Text>
                </View>
                <Text style={styles.forgot}>Forgot the password?</Text>
            </View>
            <Pressable
                style={styles.Button}
                onPress={handleLogin}>
                <Text style={styles.textBtn}>Login</Text>
            </Pressable>
            <Text style={styles.continue}>or continue with</Text>
            <View style={styles.btnSocial}>
                <Pressable style={styles.buttonLabel}>
                    <Image style={styles.imgSocial} source={require('../../../media/images/fb.png')} />
                    <Text style={styles.textSocial} >Facebook</Text>
                </Pressable>
                <Pressable style={styles.buttonLabel}>
                    <Image style={styles.imgSocial} source={require('../../../media/images/gg.png')} />
                    <Text style={styles.textSocial}>Google</Text>
                </Pressable>
            </View>
            <View style={styles.Account}>
                <Text style={styles.textAccount}>don't have an account ?</Text>
                <Pressable
                    onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.Signup}>Sign up</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background_color,
        padding: 24,
    },
    hello: {
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: color.color_text,
    },
    again: {
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: color.background_button,
    },
    welcome: {
        width: 222,
        fontWeight: '400',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: color.color_hint,
        marginBottom: 24,
    },
    username: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,

    },
    input: {
        borderRadius: 6,
        height: 48,
        padding: 10,
        borderColor: color.color_hint,
        borderWidth: 1,
        marginTop: 4,
        marginBottom: 16,
    },
    password: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    eye: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 10,
        top: 12,
    },
    inputContainer: {
        position: 'relative',
    },
    icCheckbox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',

        alignItems: 'center'
    },
    check: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    remember: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    forgot: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.background_button,
    },
    Button: {
        width: '100%',
        height: 48,
        borderRadius: 6,
        backgroundColor: color.background_button,
        paddingVertical: 13,
        paddingHorizontal: 24,
        marginTop: 18,
    },
    textBtn: {
        textAlign: 'center',
        color: color.background_color,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
    },
    continue: {
        textAlign: 'center',
        marginTop: 16,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: color.color_hint,
    },
    btnSocial: {
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
        backgroundColor: color.background,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    imgSocial: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    textSocial: {
        color: color.color_social,
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
    Signup: {
        alignItems: 'center',
        fontWeight: '600',
        color: color.background_button,
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
    },
    textAccount: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.12,
    },
});