import React from "react";
import {Text, View,FlatList,ScrollView} from "react-native";
import { WebView } from 'react-native-webview';

export class QItem extends React.Component{
    render(): React.ReactNode {
        return (
            <View style={
                {
                    borderBottomWidth:1,
                    borderBottomColor:'#abc',
                    padding:10,
                    flex:1
                }
            }>
                <View style={{flex:1,flexDirection:'row'}}>
                    <Text style={{width:30}}>{this.props.q.item.id}</Text>
                    <Text style={{width:10}}>{this.props.q.item.level}</Text>


                    <Text style={{width:50}}>{this.props.q.item.category}</Text>
                    <Text style={{flex:1}}>{this.props.q.item.name}</Text>
                </View>

                <WebView style={{width:800,height:120}}
                    source={{ html: this.props.q.item.title }}
                />



            </View>
        );
    }
}

export class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items:[{"id":179,"name":"程序员日","title":"<p>给定年份,输出程序员日(每年的第256天)的字符串表示(yyyy-MM-dd).</p>\n<p>例如,给定2017,输出2017-09-13.</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":"练习","tag2":null,"otherTag":null},{"id":178,"name":"跳跃重合","title":"<p>有2只袋鼠在一个方向上进行跳跃比赛,起点为x1,x2,每次跳跃长度为v1,v2.给出2只袋鼠能否在某一点位置重合.</p>\n<p>例如,给定[x1,v1,x2,v2]为[0,3,4,2],能重合,因为0+3*4=4+2*4,即4次跳跃后位置重合.</p>\n<p>而给定[0,2,5,3]则不能重合,因为第二只的速度块且位置靠前.</p>\n<p>输入:4个元素的数组,依次为x1,v1,x2,v2,</p>\n<p>输出:是否重合,1 or 0</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":null,"tag2":null,"otherTag":null},{"id":177,"name":"和分解","title":"<p>给定一个数组和一个数,求出数组中所有和为给定值倍数的组合个数.</p>\n<p>例如,给定[1,2,3,4,5,6],值为5,则输出3.</p>\n<p>因为[1,4],[2,3],[4,6]的和都是5的倍数</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":"练习","tag2":null,"otherTag":null},{"id":176,"name":"破纪录","title":"<p>给定某篮球运动员的比赛得分数据,求出他破自己得分记录(最高和最低)的次数.</p>\n<p><br></p>\n<p>例如,分别得分[10 5 20 20 4 5 2 25 1],</p>\n<p>则最高记录破了4次,最低记录破了2次,</p>\n<p>输出结果为4 2</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":null,"tag2":null,"otherTag":null},{"id":175,"name":"最大最小和","title":"<p>给定一个有5个元素的整数数组,输出其中4个的最大和,最小和.</p>\n<p>例如,给定[1,2,3,4,5],最大和为14=2+3+4+5,最小和为10=1+2+3+4,</p>\n<p>则输出14,10</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":null,"tag2":null,"otherTag":null},{"id":174,"name":"分类统计","title":"<p>给定数组,统计出其中正数,负数和零所占的比例,要求保留2为小数.</p>\n<p>例如,给定[1,1,0,-1,-1],正数2个,负数2个,0一个,占比分别是2/5,2/5,1/5,</p>\n<p>则输出0.40,0.40,0.20.</p>\n<p><br></p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":"入门","tag2":null,"otherTag":null},{"id":173,"name":"最大计数","title":"<p>给定一个数组,求数值最大的元素的个数.</p>\n<p>例如:给定[3,4,1,2,3,4],</p>\n<p>则输出2,</p>\n<p>因为最大元素是4,而队列中4有2个,因此结果是2.</p>","category":"算法","remarks":"","lang":"java","level":1,"tag1":"练习","tag2":null,"otherTag":null},{"id":172,"name":"数组求和","title":"<p>给定一个数组,输出其中所有数字之和.</p>\n<p>比如,给定[<code>1,2,3,4,10,11],</code></p>\n<p><code>输出31</code></p>\n<p><code>因为:1+2+3+4+10+11=31</code></p>","category":"数据结构","remarks":"","lang":"java","level":1,"tag1":"入门","tag2":null,"otherTag":null},{"id":171,"name":"有序数组合并","title":"<p>合并有序数组,结果是一个排序数组.</p>\n<p>例如:</p>\n<p>输入三个数组,[1,4,5],[1,2],[3,17,8],</p>\n<p>输出 [1,1,2,3,4,5,8,17]</p>","category":"算法","remarks":"","lang":"java","level":5,"tag1":null,"tag2":null,"otherTag":null},{"id":170,"name":"最长不重复子串","title":"<p>给定一个字符串,输出其最长不重复子串的长度.</p>\n<p>例如:</p>\n<p>aaaaa,最长不重复子串为a,abccbcd最长不重复子串为cbcd.</p>","category":"算法","remarks":"","lang":"java","level":3,"tag1":null,"tag2":null,"otherTag":null}]
        }
    }
    render(): React.ReactNode {
        return (
            <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
                <FlatList data={this.state.items}
                          keyExtractor={(item,index)=>'q'+item.id}
                          renderItem={(item)=><QItem q={item}/>}/>
            </View>
        );
    }
}
