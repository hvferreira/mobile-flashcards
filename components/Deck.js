
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import DeckList from "./DeckList";
import DeckView from "./DeckView";


function Deck(props) {
    const { oneDeck } = props;
    //const size = oneDeck.questions;
    const size = oneDeck.questions.length;
    //console.log("SIZE", size)

    const navigation = useNavigation();


    return (
        <TouchableOpacity onPress={() => navigation.navigate('DeckView', { title: oneDeck.title })}>
            <View>
                <Text style={styles.heading}>{oneDeck.title}</Text>
                <Text style={styles.subHeading}>{size} Cards</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        marginBottom: 10
    },
    subHeading: {
        fontSize: 20,
        marginBottom: 10,
        color: 'grey'
    },
})

export default Deck