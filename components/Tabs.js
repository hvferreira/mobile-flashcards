import React, { Component } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tab = createBottomTabNavigator();

class Tabs extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="MyDecks"
                shifting={true}
                sceneAnimationEnabled={false}
            >
                <Tab.Screen
                    name="MyDecks"
                    component={DeckList}

                />
                <Tab.Screen
                    name="NewDeck"
                    component={NewDeck}

                />
            </Tab.Navigator>
        );
    }
};

export default Tabs