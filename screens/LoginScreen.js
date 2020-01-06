import React, { useReducer, useCallback } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from "galio-framework";
import MyInput from "../components/UI/Input"
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import Button from '../components/Button';
import Icon from "react-native-vector-icons/FontAwesome";


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

const Login = props => {
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

  const signupHandler = () => {
    dispatch(
      authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password)
    );
  };

  const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
    console.log( inputIdentifier, inputValue, inputValidity);
    
    dispatchformState({
      type: REDUCER_UPDATE,
      value: inputValue,
      isValid: inputValidity,
      input: inputIdentifier
    });
  }, [dispatchformState]);



  return (
    <View style={{ flex: 1, }}>
      <LinearGradient
        colors={[Colors.fontColor, Colors.primaryColor]}
        style={{
          flex: 1,
          alignItems: 'center'
        }}
      >
        <View style={styles.Container}>
          <Icon name="user-circle" size={90} style={styles.icon} />
          <Text style={{ color: 'white', margin: 20 }}>MEMBER LOGIN</Text>
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
        </View>
        <Button style={styles.loginButton} color="default" onPress={signupHandler}>Login</Button>
        <View ><Text style={styles.SignIn} onPress={() => { props.navigation.navigate('SignUp') }}>Don't Have a User? Sign in!</Text></View>
      </LinearGradient>
    </View>
  );
}
styles = StyleSheet.create({
  loginButton: {
    width: '80%',
    fontSize: 30,
  },
  SignIn: {
    textDecorationLine: 'underline',
    margin: 10
  },
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
export default Login