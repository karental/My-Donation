import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const MyLocation = props => {
    const getLocationHandler = () => {

    }
    return (
        <View>
            <Button
                title='get user location'
                color={Colors.accentColor}
                onPress={getLocationHandler}
            ></Button>
        </View >

    );
};

const styles = StyleSheet.create({

});
export default MyLocation;