import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RequestsScreen from '../screens/RequestsScreen';
import MapScreen from '../screens/MapScreen';

const RequestNavigator = createStackNavigator({
    Requests: RequestsScreen,
    MapDestinations: MapScreen

});

export default createAppContainer(RequestNavigator);