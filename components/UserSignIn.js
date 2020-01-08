import React, { useReducer, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MyInput from "../components/UI/Input"

import { Text } from "galio-framework";
import Button from '../components/Button';

import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

const REDUCER_UPDATE = 'REDUCER_UPDATE';

const formReducer = (state, action) => {
    if (action.type === REDUCER_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        };
        let updateformIsValid = true;
        for (const key in updatedValidities) {
            updateformIsValid = updateformIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updateformIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
};


const UserSignIn = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()
    const dispatch = useDispatch();

    const [formState, dispatchformState] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false
    })

    const signupHandler = async () => {
        setError(null)
        setIsLoading(true);
        try {
            await dispatch(
                authActions.signup(
                    formState.inputValues.email,
                    formState.inputValues.password)
            );
            props.navigation.navigate('App')
        } catch (err) {
            setError(err.message)
            setIsLoading(false)
        }
    };

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchformState({
            type: REDUCER_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchformState]);

    return (<View style={styles.Container}>
        <Text style={{ color: 'black', margin: 30 }}>User Sign In</Text>
        <MyInput
            placeholder="User Name"
            style={styles.input}
            onInputChange={() => { }}

        />
        <MyInput
            id="email"
            keyboardType="email-address"
            placeholder="email"
            required
            errorText="please enter valid input"
            autoCapitalize="none"
            style={styles.input}
            onInputChange={inputChangeHandler}
            initialValue=""
            email
        />
        <MyInput
            id="password"
            required
            style={styles.input}
            errorText="please enter valid input"
            placeholder="Password"
            onInputChange={inputChangeHandler}
            password
        />
        <MyInput
            style={styles.input}
            placeholder="Phone Number"
            onInputChange={() => { }}

        />
        <Button style={styles.loginButton} color="default" onPress={signupHandler}>Login</Button>

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

export default UserSignIn;