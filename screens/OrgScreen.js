import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from '../constants/Colors';

const OrgScreen = props => {

    return <View>

        <View style={styles.TitleCont}><Text style={styles.HelloTitle}>Organization name</Text></View>
        <View style={styles.InformationCont}>
            <View style={styles.Subtitle}>
                <Icon name="handshake-o" size={30} color='grey' />
                <Text>Number {"\n"}Of Requests</Text>
            </View>
        </View>
        <View>
        <Button>Add Request</Button>
        </View>
        <View style={styles.Subtitle}>
            <Icon name="heart" size={30} color='#ba143b' />
            <Text>Pending Requests</Text>
        </View>
        <View style={styles.Subtitle}>
            <Text>Finished Requests</Text>
        </View>
    </View>
};
const styles = StyleSheet.create({
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
});

export default OrgScreen;