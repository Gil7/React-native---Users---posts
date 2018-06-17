import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
export default class Screen3 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Users',
        title: 'Details',
        drawerIcon: () => {
            return (
                <Icon name="marker" />
            )
        }
    }
    render() {
        return (
            <View>
                <Text>
                    Gilberto Méndez Sántiz
                </Text>
            </View>
        )
    }
}