import React from 'react';
import { View, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import RequestsItem from '../components/RequstsItem';
import { useDispatch } from 'react-redux';
import { getCoordinates } from '../store/actions/requests';

const RequestScreen = props => {
    const renderRequests = itemData => {
        return (<RequestsItem title={itemData.item.title} location={itemData.item.location} onSelectRequest={() => { }}></RequestsItem>);
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
            <Button title='go to Map' onPress={() => {
                props.navigation.navigate({ routeName: 'MapDestinations' });
            }} />
        </View>
    );
};

RequestScreen.navigationOptions = {
    headerTitle: 'Requests',
    headerStyle: {
        backgroundColor: Colors.primaryColor
    },
    headerTintColor: Colors.fontColor
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default RequestScreen;