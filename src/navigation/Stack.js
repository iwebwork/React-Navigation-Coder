import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'

const Stack = createStackNavigator()

export default props => {
    return(
        <Stack.Navigator initialRouteName={"TelaA"}>
            <Stack.Screen 
                name="TelaA" 
                options={{title:"Tela Inicial",headerTitleAlign:"center"}}
            >
                {props => (
                    <PassoStack {...props} avancar="TelaB">
                        <TelaA></TelaA>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen 
                name="TelaB" 
                options={{title:"Tela 2",headerTitleAlign:"center"}}
            >
                {props => (
                    <PassoStack {...props} avancar="TelaC">
                        <TelaB></TelaB>
                    </PassoStack>
                )}
            </Stack.Screen>
            <Stack.Screen 
                name="TelaC" 
                options={{title:"Tela 3",headerTitleAlign:"center"}}
                component={TelaC}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}