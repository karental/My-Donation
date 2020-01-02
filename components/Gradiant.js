import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text } from "galio-framework";

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import Login from '../components/Login';
import Button from '../components/Button';


const Gradiant = props => {
  return (
    <View style={{ flex: 1, }}>
      <LinearGradient
        colors={[Colors.fontColor, Colors.primaryColor]}
        style={{
          flex: 1,
          alignItems: 'center'
        }}
      >
        <Login />
        <Button style={styles.loginButton} color="default" onPress={() => { props.navigation.navigate('UserPage') }}>Login</Button>
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
  SignIn:{
    textDecorationLine:'underline',
    margin: 10
  }
});
export default Gradiant