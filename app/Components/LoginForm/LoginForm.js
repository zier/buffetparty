import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Alert } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

import style from './style';

// async function logIn() {
//   const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('169278050414649', {
//       permissions: ['public_profile', 'email'],
//     });
//   if (type === 'success') {
//     // Get the user's name using Facebook's Graph API
//     const response = await fetch(
//       `https://graph.facebook.com/me?access_token=${token}`);
//     Alert.alert(
//       'Logged in!',
//       `Hi ${(await response.json()).name}!`,
//     );
//   }
// }

const LoginForm = ({ onSubmit, onFacebookLogin }) => {
    const login = () => {
        onSubmit()
    }

    const loginFacebook = () => {
      onFacebookLogin()
      // logIn().then((res)=>{
      //   console.log(res)
      // })
    }

    return (
        <View style={style.formView}>
            <FormLabel>Username</FormLabel>
            <FormInput ref={input => this.input = input}/>
            
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry={true} ref={input => this.input = input}/>

            <Button onPress={login} {...style.loginButton} buttonStyle={style.button} title="Login" />
            
            <Button onPress={loginFacebook} {...style.loginFacebookButton} buttonStyle={style.button} title="Login with Facebook" />
        </View>
    );
}


LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFacebookLogin: PropTypes.func.isRequired
};

export default LoginForm;
