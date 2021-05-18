import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const route = props.route
    const numero = route 
        && route.params 
        && route.params.numero 
        ? route.params.numero : 9
    return(
        <TextoCentral corText="yellow" corFundo="blue">
            Tela ola C = {numero}
        </TextoCentral>
    )
}
