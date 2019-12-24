import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../constants/Colors';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = props => {
    const locationCoordinators = useSelector(state => state.requests.cityCoordiantes);

    const mapRegion = {
        latitude: 31.771959,
        longitude: 35.217018,
        latitudeDelta: 2,
        longitudeDelta: 2
    };

    return (
        <MapView
            style={styles.map}
            region={mapRegion}>
            {locationCoordinators.map(c =>
                <Marker key={c.longitude} title={c.title} coordinate={c}
                onPress={() => {props.navigation.navigate('requestInforamation', {request: c.title }) }}

                ></Marker>
            )}
        </MapView>
    );
};


const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
});

export default MapScreen;