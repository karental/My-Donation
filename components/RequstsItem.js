import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';

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
        borderRadius: 20,
        height: 100,
        margin: 10,
        backgroundColor: "white",
        fontSize: 10,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    requestHeader: {
        borderTopEndRadius:20,
        borderTopStartRadius: 20,
        height: '50%',
        padding: 5,
       backgroundColor: "#E7E7E7"
    },
    requestDetails: {
        padding: 3,

    }
});
export default RequestsItem;