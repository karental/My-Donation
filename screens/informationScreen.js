import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';
import Button from "../components/Button"

const InformationPage = props => {
    const itemName = props.navigation.getParam('request');
    const selectedRequest = useSelector(state =>
        state.requests.requests.find(req => req.title === itemName)
    );
    const selectedcoordinates = useSelector(state =>
        state.requests.cityCoordiantes.find(req => req.title === itemName)
    );
    console.log(selectedcoordinates)

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

            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                <Button round color='success' style={{ flex: 2,width: 120, margin: 20 }} onPress={()=>{console.log('i got pressed '+ props.navigation)}}>I Can Help</Button>
                <Button round color='default' style={{ flex:1, width: 60, margin: 20 }} onPress={()=>{props.navigation.navigate('request')}}>Back</Button>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 300
    },
    requestItem: {
        marginTop: 10
    }
});
export default InformationPage;