import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import RequestsScreen from '../screens/RequestsScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const RequestNavigator = createStackNavigator({
    Requests: RequestsScreen,
    MapDestinations: MapScreen

});

/* const appNavigator = createDrawerNavigator({
    request: RequestNavigator
},
    {
        contentOptions: {
            activeTintColor: Colors.primary
        }
    })
 */
export default createAppContainer(RequestNavigator);