import React from 'react'
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import { Icon, Card, Button } from 'react-native-elements'
export default class Screen2 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Users',
        title: 'Posts',
        drawerIcon: () => {
            return (
                <Icon name="marker" />
            )
        }
    }
    componentDidMount = () => {
        this.loadUsers();
    }
    state = {
        posts: [],
        loading: true
    }
    loadUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                this.setState({
                    posts: posts,
                    loading: false
                })
            })
            .catch(err => {
                Alert.alert('Mensaje', 'Ha surgido un error', [
                    { text: 'Continuar' }
                ])
                this.setState({
                    loading: false
                })
            })
    }
    render() {
        const {navigate} = this.props.navigation
        if (this.state.loading) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }
        const postsList = this.state.posts.map((post, i) => {
            return (
                <View key={i} >

                    <Card title="Post">
                        <Text>{post.title}</Text>
                        <Button
                            icon={
                                <Icon
                                    name='menu'
                                    color='white'
                                />
                            }
                            containerStyle={{ marginTop: 20 }}
                            buttonStyle={{
                                backgroundColor: "rgba(92, 99,216, 1)",
                                width: 200,
                                alignContent: 'center',
                                height: 45,
                                borderColor: "transparent",
                                borderWidth: 0,
                                borderRadius: 5
                            }}
                            title="Read post"
                            onPress={() => navigate('PostDetail',{id: post.id})}
                        />
                    </Card>

                </View>
            );
        })
        return (
            <ScrollView>
                {postsList}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        height: 25,
        width: 25,
        borderRadius: 50
    }
})