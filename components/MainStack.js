import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs'
import DeckView from './DeckView'
import QuizView from './QuizView'
import AddCard from './AddCard'

const Stack = createStackNavigator();

class MainStack extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen
                    name="DeckView"
                    component={DeckView}
                    options={{ title: 'Deck' }}
                />
                <Stack.Screen
                    name="QuizView"
                    component={QuizView}
                    options={{ title: 'Quiz' }}
                />
                <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                    options={{ title: 'Add Question' }}
                />
            </Stack.Navigator>
        )
    }
}

export default MainStack