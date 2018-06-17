import React from 'react'
import {View, Text, StyleSheet, Alert} from 'react-native'
import {Card} from 'react-native-elements'

export default class PostDetail extends React.Component{
    static navigationOptions = {
        drawerLabel: () => null
    }
    constructor(props){
        super(props)
    }
    state = {
        post : null,
        error: false
    }
    componentDidMount = () => {
        this.loadPost()
    }
    loadPost = () => {
        const id = this.props.navigation.getParam('id', 0)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(post => {
            this.setState({
                post: post
            })
        })
        .catch(err => {
            console.log(err)
            this.setState({
                error : true
            })
        })
    }
    render() {
        if (this.state.post) {
            return(
                <View>
                    <Text style={styles.title}>
                        {this.state.post.title}
                    </Text>
                    <Text style={styles.content}>
                        {this.state.post.body}
                    </Text>
                </View>
            )
            
        }
        return (
            <View>
                <Text>
                    Cargando post...
                </Text>
            </View>
        )
    }
}
const styles  = StyleSheet.create({
    title : {
        fontSize : 15,
        color: 'black'
    },
    content : {
        margin : 10
    }
})