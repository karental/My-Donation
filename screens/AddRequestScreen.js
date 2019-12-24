import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const AddRequestScreen = props => {

    return <View>
        <View>
            <Text>Add request</Text>
        </View>
        <View>
            <TextInput title='Name'></TextInput>
            <TextInput title='Location'></TextInput>
        </View>
        <View>
            <Button title='Send'></Button>
        </View>
    </View>
};

AddRequestScreen.navigationOptions ={
    headerTitle:'Add Request'
}

export default AddRequestScreen;