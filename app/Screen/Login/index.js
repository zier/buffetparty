import React from 'react';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';

import LoginForm from '../../Components/LoginForm/LoginForm'

const Login = ({ navigation }) => {
    const loginWithEmail = () => {
        navigation.navigate('Home')
    }

    const loginWithFacebook = () => {

    }

    return (
        <SafeAreaView style={[{ backgroundColor: '#263238' }]}>
            <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
            />
            <LoginForm onSubmit={loginWithEmail} onFacebookLogin={loginWithFacebook} />
        </SafeAreaView>
    )
}

export default Login
