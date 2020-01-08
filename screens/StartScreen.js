import { View, ActivityIndicator, StyleSheet, AsyncStorage } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Colors from "../constants/Colors";
import * as authAction from "../store/actions/auth";

const StartScreen = props => {
    const dispatch = useDispatch();
    useEffect(() => {
        const tryLogin = async () => {
            const userData = await AsyncStorage.getItem('userData');
            if (!userData) {
                props.navigation.navigate('Auth');
                return;
            }
            const newData = JSON.parse(userData);
            const { token, userId, expireLoginDate } = newData
            const expirationDate = new Date(expireLoginDate);
            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Auth');
                return;
            }
            props.navigation.navigate('Requests');
            dispatch(authAction.authenticate(userId, token));
        };
        tryLogin()
    }, [dispatch]);

    return (
        <View style={styles.screes}>
            <ActivityIndicator size='large' color={Colors.primaryColor} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default StartScreen;