import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useDispatch } from "react-redux";
import * as authActions from "../store/actions/auth";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from '../constants/Colors';
import Button from '../components/Button';

const UserScreen = props => {
    const dispatch = useDispatch();
    return <View>
        <View style={styles.FilterIcon}>
            <Icon name="sliders" size={30} color='grey' />
        </View>

        <View style={styles.TitleCont}><Text style={styles.HelloTitle}>Hey, user</Text></View>
        <View style={styles.InformationCont}>
            <View style={styles.Subtitle}>
                <Icon name="handshake-o" size={30} color='grey' />
                <Text>Number {"\n"}Of Donations</Text>
            </View>
            <View style={styles.Subtitle}>
                <Icon name="star" size={30} color='#e6c80b' />
                <Text>Stars</Text>
            </View>
        </View>
        <View style={styles.Subtitle}>
            <Icon name="heart" size={30} color='#ba143b' />
            <Text>Favorites</Text>
        </View>
        <View style={styles.Subtitle}>
            <Text>Donation History</Text>
        </View>
        <Button color="error" 
        onPress={() => {
             dispatch(authActions.logout());
             props.navigation.navigate('Auth');
             }} >Logout</Button>
    </View>
};
const styles = StyleSheet.create({
    FilterIcon: {
        margin: 10,
        flexDirection: 'row-reverse'
    },
    HelloTitle: {
        fontSize: 45,
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    TitleCont: {
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Subtitle: {
    },
    InformationCont: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 20
    }

});

export default UserScreen;