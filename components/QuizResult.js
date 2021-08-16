
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { blue, white, pink } from '../utils/colors'
import Ionicons from 'react-native-vector-icons/Ionicons'


const QuizResults = (props) => {


    const { Restart, title, navigation, correct, number } = props

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                {correct >= (number / 2) ? <Ionicons name='thumbs-up-outline' size={60} color={pink} /> :
                    <Ionicons name='thumbs-down-outline' size={60} color={pink} />}
                <Text style={styles.deckText}>{`You got ${correct} out of ${number}!`}</Text>
            </View>
            <View>
                <TouchableOpacity style={[styles.mainDeckBtn, { marginBottom: 16 }]} onPress={Restart} >
                    <Text style={styles.mainDeckBtnText}>Restart Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('DeckView', { title: title })}>
                    <Text style={styles.secondaryText}>Back to Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deckText: {
        fontWeight: '700',
        fontSize: 20,
        paddingBottom: 16,
        textAlign: 'center',
        color: blue,
    },
    secondaryText: {
        fontSize: 14,
        textAlign: 'center',
        color: blue,
    },
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: pink,
    },
    mainDeckBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: white,
    },
})

export default QuizResults