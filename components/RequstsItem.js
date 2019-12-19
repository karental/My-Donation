import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors'

const RequestsItem = props => {

    return (
        <View style={styles.requestItem}>
            <TouchableOpacity onPress={props.onSelectRequest}>
                <View>
                    <View style={{ ...styles.requestRow, ...styles.requestHeader }}>
                        <Text>{props.title}</Text>
                    </View>
                    <View style={{ ...styles.requestRow, ...styles.requestDetails }}>
                        <Text>{props.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    requestRow: {
        flexDirection: 'row'
    },
    requestItem: {
        width: '100%',
        height: 100,
        backgroundColor: Colors.backColor,
        fontSize: 10,

    },
    requestHeader: {
        height: '50%',
        color: Colors.fontColor,
        backgroundColor: Colors.accentColor
    },
    requestDetails: {

    }
});
export default RequestsItem;