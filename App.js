import React from 'react'
import {
  StackNavigator
} from 'react-navigation';

import Router from './DrawerStack'

const Navigator = StackNavigator(
  {
    drawerStack: { screen: Router },
    
  }, 
  {
    headerMode: 'none',
    initialRouteName: 'drawerStack'
})
export default class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }
}
