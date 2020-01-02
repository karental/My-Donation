import React from 'react';
import { View, StyleSheet } from 'react-native';
import Select from '../components/Select'
import { Input, Text } from "galio-framework";


const OrgSignIn = props => {

    return (<View style={styles.Container}>
        <Text style={{ color: 'black', margin: 30 }}> Organization Sign In</Text>
        <Input
            placeholder="Organization"
            style={styles.input}
        />
        <Input
            placeholder="Location"
            style={styles.input}
        />
        <Input
            style={styles.input}
            placeholder="Password"
        />
        <Input
            style={styles.input}
            placeholder="Phone Number"
        />
        <Select
        defaultIndex={1}
        options={[1, 2, 3, 4, 5]}></Select>
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
    UserType: {
        justifyContent: 'space-around',
        alignItems: 'center'
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

export default OrgSignIn;
