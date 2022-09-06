import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";

import Home from '../screens/Home';
import Currency from '../screens/Currency';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Shift'
        }
    },
    Currency: {
        screen: Currency
    }
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
