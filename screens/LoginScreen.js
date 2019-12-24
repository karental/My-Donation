import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Block, Text, theme } from "galio-framework";
import Button from '../components/Button'
const LoginScreen = props => {

    return <View style={styles.loginContainer}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Input
                placeholder="User Name"
            />
            <Input
                placeholder="Password"
            />
            <Button color="default">Login</Button>
        </View>
    </View>
};
const styles = StyleSheet.create({
    loginContainer: {
        display: 'flex',
        flex: 1,
        height: '100%',
        backgroundColor: "#E7E7E7",
        justifyContent: "center",
        alignContent: "center",
    },
    container: {
        height: 300,
        fontSize: 10,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        margin: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 20
    },
    title:{
        fontSize:40,
    }
});

export default LoginScreen;