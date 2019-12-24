import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';


const InformationPage = props => {
    const itemName = props.navigation.getParam('request');
    const selectedRequest = useSelector(state =>
        state.requests.requests.find(req => req.title === itemName)
    );
    const selectedcoordinates = useSelector(state =>
        state.requests.cityCoordiantes.find(req => req.title === itemName)
    );


    return (
        <View style={styles.requestItem}>
            <MapView
                style={styles.map}
                region={{
                    latitude: selectedcoordinates.latitude,
                    longitude: selectedcoordinates.longitude,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}>
                <Marker key={selectedcoordinates.longitude} coordinate={selectedcoordinates}></Marker>
            </MapView>
            <Text>{selectedRequest.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300
    },
    requestItem:{
        marginTop:10
    }
});
export default InformationPage;