import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from "react-navigation";
import {Home, Detail} from "./components/home";
import Logo from './components/img/home.svg'
import Logo2 from './components/img/settings.svg'
import Logo3 from './components/img/person.svg'
import Logoa from './components/img/home-active.svg'
import Logoa2 from './components/img/settings-active.svg'
import Logoa3 from './components/img/person-active.svg'

export class Settings extends Component {
    render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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

    onLogin = () => {
        Alert.alert("login", JSON.stringify(this.state))
    }
    onChange = (v, w) => {
        this.setState({
            [w]: v
        })
    }

    render() {
        return (
            <View>
                <Text>用户名</Text>

                <TextInput onChangeText={(v) => this.onChange(v, 'name')} placeholder={"输入用户名"}
                           style={{borderColor: 'red', borderWidth: 0.5}}
                />

                <Text>密码</Text>
                <TextInput onChangeText={(v) => this.onChange(v, 'pwd')} placeholder={"输入密码"}/>
                <Button title={"登录"} onPress={this.onLogin}/>
            </View>
        )
    }

}

const naviStyle = {
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: '100',
    },
}

let HomeStack = createStackNavigator({
    Home: Home,
    Detail: Detail
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: naviStyle
});

let SettingsStack = createStackNavigator({
    Settings: Settings,

}, {
    defaultNavigationOptions: naviStyle
})
let LoginStack = createStackNavigator({Login},
    {
        defaultNavigationOptions: naviStyle
    })

HomeStack.navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon:({focused})=>{

        if(focused){
            return (<Logoa width={26} height={26}/>)
        }
        return (<Logo width={26} height={26}/>)
    }
}
SettingsStack.navigationOptions = {
    tabBarLabel: '设置',
    tabBarIcon:({focused})=>{

        if(focused){
            return (<Logoa2 width={26} height={26}/>)
        }
        return (<Logo2 width={26} height={26}/>)
    }
}
LoginStack.navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon:({focused})=>{

        if(focused){
            return (<Logoa3 width={20} height={20}/>)
        }
        return (<Logo3 width={20} height={20}/>)
    }
}

const TabNavigator = createBottomTabNavigator({
    HomeStack,
    SettingsStack,
    LoginStack
})

const AppContainer = createAppContainer(TabNavigator)

export default class App1 extends React.Component {
    render(): React.ReactNode {
        return <AppContainer/>;
    }
}
