import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Alert} from 'react-native';
import {createBottomTabNavigator,createAppContainer} from "react-navigation";
import {Home} from "./components/home";

export class Settings extends Component{
    render(): React.ReactNode {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <Text>settings</Text>
            </View>
        );
    }
}

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pwd: ''
        }
    }
    onLogin=()=>{
        Alert.alert("login",JSON.stringify(this.state))
    }
    onChange=(v,w)=>{
        this.setState({
            [w]:v
        })
    }
    render() {
        return (
            <View>
                <Text>用户名</Text>

                <TextInput onChangeText={(v)=>this.onChange(v,'name')} placeholder={"输入用户名"}
                           style={{borderColor:'red',borderWidth:0.5}}
                />

                <Text>密码</Text>
                <TextInput onChangeText={(v)=>this.onChange(v,'pwd')} placeholder={"输入密码"}/>
                <Button title={"登录"} onPress={this.onLogin}/>
            </View>
        )
    }

}

const TabNavigator=createBottomTabNavigator({
    主页:Home,
    设置:Settings,
    登录:Login
})

export default createAppContainer(TabNavigator)
