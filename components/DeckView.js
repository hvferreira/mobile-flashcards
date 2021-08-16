import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { gray, blue } from "../utils/colors";
import { deleteDeck } from '../actions/index'
import { deckRemove } from '../utils/api'


class DeckView extends Component {
    deleteDeck = async (dispatch, navigation, title) => {

        dispatch(deleteDeck(title)) //action
        navigation.navigate('MyDecks')
        await deckRemove(title) //api

    }

    render() {
        const { deck, navigation, dispatch } = this.props;

        return (
            <View style={style.container}>
                <Text style={style.mainHeading}>{deck.title}</Text>
                <Text style={style.subHeading}>{(deck.questions.length)} cards</Text>

                <TouchableOpacity style={style.mainDeckBtn} onPress={() => navigation.navigate('AddCard', { title: deck.title })}>
                    <Text style={style.mainDeckBtnText}> New Question</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[style.mainDeckBtn, { backgroundColor: blue, marginBottom: 20 }]} onPress={() => navigation.navigate('QuizView', { deck: deck })}>
                    <Text style={style.mainDeckBtnText}>Start Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ padding: 10 }} onPress={() => this.deleteDeck(dispatch, navigation, deck.title)}>
                    <Text style={style.removeDeckText}> Delete Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHeading: {
        fontSize: 35,
        padding: 10
    },
    subHeading: {
        fontSize: 25,
        color: 'grey'
    },
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: gray,
    },
});

const mapStateToProps = (decks, props) => {
    const aux = decks[props.route.params.title];
    return {
        deck: aux,
        decks,
        props
    }
}

export default connect(mapStateToProps)(DeckView)