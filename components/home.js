import React from "react";
import {Text, View} from "react-native";

export class Home extends React.Component{
    render(): React.ReactNode {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <Text>home</Text>
            </View>
        );
    }
}
