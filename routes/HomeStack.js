import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import Currency from '../screens/Currency';
import Temperature from '../screens/Temperature';
import Weight from '../screens/Weight';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Shift'
        }
    },
    Currency: {
        screen: Currency
    },
    Temperature: {
        screen: Temperature
    },
    Weight: {
        screen: Weight
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#eee',
            height: 100
        }
    }
});


export default createAppContainer(HomeStack);
