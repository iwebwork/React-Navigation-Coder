import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name){
                        case 'TelaA':
                            iconName = focused 
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                            break
                        case 'TelaB':
                            iconName = focused 
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                            break
                        case 'TelaC':
                            iconName = focused 
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline'
                            break
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor:'blue',
                inactiveTintColor:'red',
                showLabel:true,
                labelStyle:{fontSize:20}
            }}
            initialRouteName="TelaC"
        >
            <Tab.Screen 
                name="TelaA" 
                component={TelaA}
                options={{title:"Home"}}
            />
            <Tab.Screen 
                name="TelaB" component={TelaB}
                options={{title:"Pagina 1"}}
            />
            <Tab.Screen 
                name="TelaC" component={TelaC}
                options={{title:"Pagina 2"}}
            />
        </Tab.Navigator>
    )
}