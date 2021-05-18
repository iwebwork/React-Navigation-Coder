import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'

const Tab = createBottomTabNavigator()

export default props => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'blue',
                inactiveTintColor:'red',
                labelStyle:{fontSize:30}
            }}
            initialRouteName="TelaC"
        >
            <Tab.Screen name="TelaA" component={TelaA}></Tab.Screen>
            <Tab.Screen name="TelaB" component={TelaB}></Tab.Screen>
            <Tab.Screen name="TelaC" component={TelaC}></Tab.Screen>
        </Tab.Navigator>
    )
}