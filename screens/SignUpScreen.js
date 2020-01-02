import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Input, Text } from "galio-framework";
import Button from '../components/Button';

import OrgSignIn from '../components/OrgSignIn'
import UserSignIn from '../components/UserSignIn'

import ModalDropdown from 'react-native-modal-dropdown';
class SignUpScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            UserShow: true,
            OrgShow: false

        };
    }
    ShowHideComponent = () => {
        if (this.state.UserShow == true) {
            this.setState({ OrgShow: true });
            this.setState({ UserShow: false });

        } else if(this.state.OrgShow ==true){
            this.setState({ OrgShow: false });
            this.setState({ UserShow: true });

        }
    };

    render() {
        return (
            <View style={styles.Container}>
                <View><Text>Hey! Thanks for being here:) {"\n"}So what are you?</Text></View>
                <View style={styles.UserType}>
                    <Button style={styles.optionButton} color='default' onPress={this.ShowHideComponent} >HELPER</Button>
                    <Button style={styles.optionButton} color='success' onPress={this.ShowHideComponent} >ORGANIZATION</Button>
                </View>
                {this.state.UserShow ? (
                    <UserSignIn />
                ) : null}
                {this.state.OrgShow ? (
                    <OrgSignIn />
                ) : null}
            </View>

        )
    }
};
const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    UserType: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    optionButton: {
        margin: 10,
        padding: 10,
        width: 150
    },
    icon: {
        color: 'white',
        opacity: 0.7,
        margin: 20
    }
});

export default SignUpScreen;