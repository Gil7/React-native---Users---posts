import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Screen3 from './components/Screen3'
import { DrawerNavigator } from 'react-navigation'

export default DrawerNavigator({
        Page1: {
            screen: Screen1
        },
        Page2: {
            screen: Screen2
        },
        Page3: {
            screen: Screen3,
            
        }
    },
    {
        drawerPosition: 'left',
        drawerWidth: 200,
        contentOptions: {
            activeTintColor: '#D32F2F'
        },
        

    },
    
)