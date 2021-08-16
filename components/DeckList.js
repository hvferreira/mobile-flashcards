import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { getDecks, } from "../utils/api"
import { receiveDecks, } from "../actions"
import { black, blue } from "../utils/colors"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Deck from "./Deck";

class DeckList extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        getDecks().then(decks => dispatch(receiveDecks(decks)));
    }

    render() {
        const { decks } = this.props
        if (Object.keys(decks).length === 0) {
            return (
                <View style={styles.emptyDeckContainer}>
                    <Ionicons name='chatbox-outline' size={60} color={black} />
                    <Text style={styles.emptyDeckText}>No Decks Yet!</Text>
                </View>
            )
        }
        return (
            <View style={styles.deckContainer}>
                <Text style={styles.deckText}>My Decks {decks.length}</Text>
                <ScrollView>
                    {Object.keys(decks).map((key) =>

                        <Deck key={key} oneDeck={decks[key]} />

                    )}
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        justifyContent: 'space-between',
        textAlign: 'center',
        padding: 20,
    },
    deckText: {
        fontWeight: '700',
        fontSize: 20,
        paddingBottom: 16,
        color: blue,
        textAlign: 'center',
    },
    emptyDeckContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    emptyDeckText: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '600',
        color: blue,
    }
})

const mapStateToProps = (decks) => {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(DeckList)