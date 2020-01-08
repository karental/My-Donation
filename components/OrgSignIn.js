import React, { useReducer, useCallback, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Select from '../components/Select';
import { Text } from "galio-framework";
import MyInput from "../components/UI/Input"
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Button from '../components/Button';

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
const OrgSignIn = props => {
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

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchformState({
            type: REDUCER_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchformState]);

    const hello = async () => {
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

    return (
        <View style={styles.Container}>
            <Text style={{ color: 'black', margin: 30 }}> Organization Sign In</Text>
            <MyInput
                id="email"
                keyboardType="email-address"
                placeholder="User Name"
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
                errorText="please enter valid input"
                initialValue=""
                required
                onInputChange={() => { }}
            />
            <Select
                defaultIndex={1}
                options={[1, 2, 3, 4, 5]}></Select>
            <Button style={styles.loginButton} color="default" onPress={hello}>Login</Button>

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
