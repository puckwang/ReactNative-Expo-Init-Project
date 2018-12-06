import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import HomeScreen from './home'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
