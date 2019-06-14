import React from "react";
import {Text, View, FlatList, TouchableWithoutFeedback,Button} from "react-native";
import {WebView} from 'react-native-webview';

export class QItem extends React.Component {
    render(): React.ReactNode {
        return (
            <TouchableWithoutFeedback onPress={()=>{
                //console.warn(this.props.navigation)
                this.props.navigation.navigate('Detail',
                    {item:this.props.q.item})
            }}>
                <View style={
                    {
                        borderBottomWidth: 1,
                        borderBottomColor: '#abc',
                        padding: 10,
                        flex: 1
                    }
                }>

                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={{width: 30}}>{this.props.q.item.id}</Text>
                        <Text style={{width: 10}}>{this.props.q.item.level}</Text>


                        <Text style={{width: 50}}>{this.props.q.item.category}</Text>
                        <Text style={{flex: 1}}>{this.props.q.item.name}</Text>
                    </View>

                    <WebView style={{width: 800, height: 120}}
                             source={{html: this.props.q.item.title}}
                    />


                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export const post = (d) => {
    d.start();
    fetch(d.url, {
        method: "POST",
        body: JSON.stringify(d.data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => {
        return res.json()
    })
        .catch(ex => {
            d.end();
            if (typeof d.fail === 'function') {
                d.fail(ex);
            } else {
                console.warn(ex);
            }
        })
        .then(p => {
            d.end();
            d.success(p);
        })
}

export function mergeArray(b, a, getKey) {
    let r = [];
    if (a && a.length) {
        for (let i = 0; i < a.length; i++) {
            r.push(a[i])
        }
    }

    function contains(arr, el, fk) {
        for (let i = 0; i < arr.length; i++) {
            if (fk(arr[i] === fk(el))) {
                return true;
            }
        }
        return false;
    }

    if (b && b.length) {
        for (let i = 0; i < b.length; i++) {
            if (!contains(r, b[i], getKey)) {
                r.push(b[i]);
            }
        }
    }
    return r;
}

export class Home extends React.Component {
    static navigationOptions={
        headerTitle:<Text>试题列表</Text>
    }
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            busy: false,
            initRefresh: true,
            loadable: true
        }
    }

    componentDidMount(): void {
        this.getData({size: 10})
    }

    getData = (d) => {
        post({
            url: 'http://www.proglevel.com/question/all',
            data: d,
            start: () => this.setState({busy: true}),
            end: () => this.setState({busy: false}),
            success: (d) => {
                if (!d || d.length === 0) {
                    this.setState({loadable: false})
                    return
                }
                let r = mergeArray(d, this.state.items, a => {
                    return a.id
                });

                this.setState({items: r})
            }
        })
    }
    calId = () => {
        let maxId = -1, minId = 10000000000, size = 10;
        if (!!this.state.items) {
            this.state.items.forEach(a => {
                if (a.id > maxId) {
                    maxId = a.id
                }
                if (a.id < minId) {
                    minId = a.id
                }
            })
        }
        return {
            maxId: maxId,
            minId: minId,
            size: size
        }
    }
    onEndReached = (e) => {
        if (!this.state.loadable || e.distanceFromEnd < 0) return;
        let d = this.calId();
        this.getData(d)
    }
    onRefresh = () => {
        this.getData({size: 10})
    }

    render(): React.ReactNode {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <FlatList data={this.state.items} refreshing={this.state.busy}
                          onEndReached={this.onEndReached}
                          onEndReachedThreshold={0.2}
                          onRefresh={this.onRefresh}
                          keyExtractor={(item, index) => 'q' + item.id}
                          renderItem={(item) => <QItem q={item} navigation={this.props.navigation}/>}/>
            </View>
        );
    }
}

export class Detail extends React.Component{
    render(): React.ReactNode {
        const item=this.props.navigation.getParam('item',{})
        return (
            <WebView style={{width: 800, height: 500}}
                     source={{html: item.title}}
            />
        );
    }
}
