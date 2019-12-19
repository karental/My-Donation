import React from 'react';
import { View, FlatList, Button, StyleSheet, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../constants/Colors';
import RequestsItem from '../components/RequstsItem';
import { useDispatch } from 'react-redux';
import { getCoordinates } from '../store/actions/requests';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';

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

RequestScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Requests',
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="User"
                size={30}
                iconName={Platform.OS === 'android' ? 'md-person' : 'ios-person'}
                onPress={() => { }} />
        </HeaderButtons>,
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                size={30}

                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => { navData.navigation, toggleDrawer(); }} />
        </HeaderButtons>,

        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: Colors.fontColor
    };
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
});

export default RequestScreen;