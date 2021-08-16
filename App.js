import "react-native-gesture-handler";
import React from "react";
import { Text, View, Button, TextInput, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import Ionicons from "@expo/vector-icons/Ionicons";
import MainStack from "./components/MainStack";



function SettingsScreen() {
  return (
    <View style={{ margin: 60 }}>
      <Text style={{ fontSize: 24 }}>Add New Deck</Text>
    </View>
  );
}

function FirstItem({ navigation }) {
  return (
    <View style={{ margin: 80 }}>
      <Text style={{ fontSize: 24 }}>My Decks here.</Text>
    </View>
  );
}


export default function App() {

  const store = createStore(reducer)

  return (
    <Provider store={store}>
      <NavigationContainer>

        <MainStack />
        <StatusBar style="auto" />

      </NavigationContainer>
    </Provider>
  )
}
