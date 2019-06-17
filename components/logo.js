import React from "react";
import {View,Image,Text} from 'react-native'
import Logo from './img/link.svg'



export class LogoTitle extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={{flex:1,flexDirection:'row'}}>
                <Logo width={30} height={30} style={{flex:1}}/>
                <Text style={{flex:1,fontSize:20,color:'#fff'}}>{this.props.title}</Text>
            </View>
        )
    }
}
