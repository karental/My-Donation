import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from "react-native-vector-icons/FontAwesome";

import RequestsScreen from '../screens/RequestsScreen';
import MapScreen from '../screens/MapScreen';
import informationScreen from '../screens/informationScreen';
import UserScreen from '../screens/UserScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AddRequestScreen from '../screens/AddRequestScreen';
import Gradiant from '../components/Gradiant';

import Colors from '../constants/Colors';

const informationNavigator = createStackNavigator(
    {
        request: RequestsScreen,
        requestInforamation: informationScreen
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            shadowOpacity: 0,
            height: 2
        },
    }
});
const userNavigator = createStackNavigator(
    {
        Login: Gradiant,
        UserPage: UserScreen,
        SignUp: SignUpScreen
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            shadowOpacity: 0,
            height: 2
        },
    }
});
const informationNavigatorfromMap = createStackNavigator(
    {
        Map: MapScreen,
        requestInforamation: informationScreen
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            marginTop:10,
            shadowOpacity: 0,
            height: 2
        },
    }
});
const bottomTabNavigator = createBottomTabNavigator(
    {
        Requests:
        {
            screen: informationNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" size={25} color={tintColor} />
                )
            }
        },
        Map: {
            screen: informationNavigatorfromMap,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="map" size={25} color={tintColor} />
                )
            }
        },
        Login: {
            screen: userNavigator,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="user" size={25} color={tintColor} />
                )
            }
        },
        Add: {
            screen: AddRequestScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="plus" size={25} color={tintColor} />
                )
            }
        },
    },
    {
        initialRouteName: 'Requests',
        tabBarOptions: {
            activeTintColor: Colors.primaryColor,
            inactiveTintColor: 'gray',

        }
    }
);
const AppContainer = createAppContainer(bottomTabNavigator);


export default createAppContainer(AppContainer);