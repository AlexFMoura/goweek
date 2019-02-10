import { createSwitchNavigator, creatStackNavigation, createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Timeline from './pages/timeline';
import New from './pages/New';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App:creatStackNavigation({
            Timeline,
            New,
        }),        
    })
);

export default Routes;