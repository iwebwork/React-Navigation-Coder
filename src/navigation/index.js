import React from 'react'
import {SafeAreaView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import Drawer from './Drawer'
// import Stack from './Stack'
// import Tab from './Tab'


export default props => {
    return(
        <SafeAreaView
            style={{flex:1}}
        >
            <NavigationContainer>
                <Drawer/>
                {/* <Tab></Tab> */}
                {/* <Stack/> */}
            </NavigationContainer>
        </SafeAreaView>
    )
}