import React from 'react'
import { View, Button } from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                <Button 
                    title ='Abrir'
                    // onPress = {() => {console.warn('porar')}}
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() =>{props.navigation.closeDrawer()},8000)
                        setInterval(() =>{props.navigation.toggleDrawer(),8000})
                    }} 
                />
            </View>
            <View style={{flex:1}}>
                <TextoCentral corText="black" corFundo="green">
                    ola tela D
                </TextoCentral>
            </View>
        </View>
    )
}
