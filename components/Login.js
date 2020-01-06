import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Text } from "galio-framework";

import Icon from "react-native-vector-icons/FontAwesome";

const Login = props => {

    return (

        <View style={styles.Container}>
            <Icon name="user-circle" size={90} style={styles.icon} />
            <Text style={{ color: 'white', margin: 20 }}>MEMBER LOGIN</Text>
            <Input
                placeholder="User Name"
                style={styles.input}
                onInputChange={props.inputChangeHandler}
            />
            <Input
                style={styles.input}
                placeholder="Password"
                autoCompleteType='password'
                onInputChange={props.inputChangeHandler}
            />
        </View>

    )

};
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%'
    },
    loginButton: {
        margin: 20,
        width: '80%',
        fontSize: 30
    },
    title: {
        fontSize: 40,
    },
    input: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        width: '80%'
    },
    icon: {
        color: 'white',
        opacity: 0.7,
        margin: 20
    }
});

export default Login;