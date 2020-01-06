import React, { useReducer, useCallback } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';

import { useDispatch } from 'react-redux';
import * as requestActions from '../store/actions/requests';

import MyInput from '../components/UI/Input';
import Button from '../components/Button';

import Colors from '../constants/Colors'


const REDUCER_UPDATE = 'UPDATE'
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


const AddRequestScreen = props => {

    const dispatch = useDispatch();

    const [formState, dispatchformState] = useReducer(formReducer, {
        inputValues: {
            title: '',
            Location: '',
            description: '',
            organization: ''
        },
        inputValidities: {
            title: false,
            Location: false,
            description: false,
            organization: false
        },
        formIsValid: false
    })

    const submitHandler = () => {
        if (!formState.formIsValid) {
            Alert.alert('Wrong input!', 'Please check errors in the form', [{ text: 'Okay' }])
            return;
        }
        dispatch(requestActions.createRequest(formState.inputValues.title, formState.inputValues.location, formState.inputValues.description, formState.inputValues.organization))
    };

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchformState({
            type: REDUCER_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier
        });
    }, [dispatchformState])

    return (
        <ScrollView><View style={styles.container}>
            <View>
                <Text>Add request</Text>
            </View>
            <View>
                <MyInput label='Title'
                    id='title'
                    errorText='please enter a valid title!'
                    keyboardType="default"
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType="next"
                    onInputChange={inputChangeHandler}
                    initialValue=''
                    initiallyValid={false}
                    required
                    style={styles.input}
                />
                <MyInput label='Location'
                    id='location'
                    errorText='please enter a valid location!'
                    keyboardType="default"
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType="next"
                    onInputChange={inputChangeHandler}
                    required
                    style={styles.input}
                />
                <MyInput label='Description'
                    id='description'
                    errorText='please enter a valid description!'
                    keyboardType="default"
                    autoCapitalize='sentences'
                    onInputChange={inputChangeHandler}
                    autoCorrect
                    multiline
                    style={styles.input}
                    required
                />
                <MyInput label='Organizaton'
                    id='organizaton'
                    errorText='please enter a valid organizaton!'
                    keyboardType="default"
                    autoCapitalize='sentences'
                    autoCorrect
                    returnKeyType="next"
                    onInputChange={inputChangeHandler}
                    style={styles.input}
                    required
                />
            </View>
            <View>
                <Button style={styles.loginButton} color='default' title='Send' onPress={submitHandler}>Send</Button>
            </View>
        </View>
        </ScrollView >
    )
};
const styles = StyleSheet.create({
    container: {
        margin: 30
    },
    loginButton: {
        width: '80%',
        fontSize: 30,
      },
      input:{
        borderColor: Colors.primaryColor,
      }
})

export default AddRequestScreen;