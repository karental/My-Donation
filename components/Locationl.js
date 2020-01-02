import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Colors from '../constants/Colors';


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