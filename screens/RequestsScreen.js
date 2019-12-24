import React from 'react';
import { View, FlatList, Button, StyleSheet, Platform } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { getCoordinates } from '../store/actions/requests';

import RequestsItem from '../components/RequstsItem';


const RequestScreen = props => {
    const renderRequests = itemData => {
        return (
            <RequestsItem
                title={itemData.item.title}
                location={itemData.item.location}
                onSelectRequest={() => {props.navigation.navigate('requestInforamation', {request: itemData.item.title }) }}></RequestsItem>);
    };
    const dispatch = useDispatch();

    const avalibleRequests = useSelector(state => state.requests.requests);
    dispatch(getCoordinates(avalibleRequests));


    return (
        <View style={styles.screen}>
            <FlatList
                data={avalibleRequests}
                keyExtractor={(item) => item.id}
                renderItem={renderRequests}
                style={{ width: '100%' }}
            ></FlatList>
        </View>
    );
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 30
    }
});

export default RequestScreen;