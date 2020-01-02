import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as requestActions from '../store/actions/requests';

const AddRequestScreen = props => {
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [organization, setOrganization] = useState('')

    const dispatch = useDispatch();

    const submitHandler = () => {
        dispatch(requestActions.createRequest(title, location, description, organization))
    };


    return (
        <ScrollView><View style={styles.container}>
            <View>
                <Text>Add request</Text>
            </View>
            <View>
                <TextInput placeholder='Title' value={title} onChangeText={text => setTitle(text)}></TextInput>
                <TextInput placeholder='Location' value={location} onChangeText={text => setLocation(text)}></TextInput>
                <TextInput placeholder='Description' value={description} onChangeText={text => setDescription(text)}></TextInput>
                <TextInput placeholder='Organizaton' value={organization} onChangeText={text => setOrganization(text)}></TextInput>
            </View>
            <View>
                <Button title='Send' onPress={submitHandler}></Button>
            </View>
        </View>
        </ScrollView >
    )
};
const styles = StyleSheet.create({
    container: {
        margin: 30

    }
})

export default AddRequestScreen;