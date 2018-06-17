import React from 'react';
import {
    StackNavigator
} from 'react-navigation';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Icon } from 'react-native-elements'
import Router from './Router';

const DrawerNavigation = StackNavigator(
    {
        DrawerStack: { screen: Router },
    }, 
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#D32F2F',
                paddingLeft: 10,
                paddingRight: 10
            },
            
            headerLeft: 
            <View>
                    <Icon
                        style={styles.header}
                        onPress={() => {
                            navigation.toggleDrawer()
                        }}
                        underlayColor='transparent'
                        color='#000'
                        name='menu'
                    />
                    
            </View>
            
        })
    })

const styles = StyleSheet.create({
    header : {
        display: 'flex'
    }
})

export default DrawerNavigation;