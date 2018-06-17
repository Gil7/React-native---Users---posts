import React from 'react'
import { View, Text, Alert, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Icon, Card } from 'react-native-elements'
export default class Screen1 extends React.Component{
    static navigationOptions = {
        tabBarLabel :'Users',
        title : 'users',
        drawerIcon: () => {
            return(
                <Icon name="marker" />
            )
        }
    }
    componentDidMount = () => {
        this.loadUsers();
    }
    state = {
        users : [],
        loading: true
    }
    loadUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
            this.setState({
                users : users,
                loading : false
            })
        })
        .catch(err => {
            Alert.alert('Mensaje','Ha surgido un error',[
                {text: 'Continuar'}
            ])
            this.setState({
                loading : false
            })
        })
    }
    render(){
        if(this.state.loading){
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        }
        const usersList = this.state.users.map((user, i) => {
            return (
                <View key={i} >
                    
                        <Card title="User">
                            <Image 
                                style={styles.image}
                                source={{ uri: 'http://pluspng.com/img-png/user-png-icon-male-user-icon-512.png' }}
                            />
                            <Text>{user.name}</Text>
                        </Card>
                    
                </View>
            );
        })
        return(
            <ScrollView>
                {usersList}
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    image : {
        height: 25,
        width: 25,
        borderRadius : 50
    }
})