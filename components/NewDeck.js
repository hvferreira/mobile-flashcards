import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { addDeck } from '../actions/index'
import { saveDeckTitle } from '../utils/api'
import { black, white } from '../utils/colors'


class NewDeck extends Component {

    state = {
        title: ''

    };

    titleChange = (newTitle) => {
        this.setState({ title: newTitle });
    }

    submit = async () => {


        await saveDeckTitle(this.state.title)
        this.props.dispatch(addDeck(this.state.title))
        this.titleChange('');
        this.props.navigation.navigate('DeckView', { title: this.state.title })

    }
    render() {
        return (
            <View style={styles.deckContainer} >
                <View style={{ flex: 1 }}>
                    <Text style={styles.deckText}>Create A New Deck</Text>
                    <Text style={styles.deckInputHeading}>New Deck Name</Text>
                    <TextInput style={styles.deckInput} type='text' placeholder='E.g Animals' placeholderTextColor={white} value={this.state.title} onChangeText={this.titleChange} />
                </View>
                <TouchableOpacity style={[styles.mainDeckBtn]} onPress={this.submit}>
                    <Text style={styles.mainDeckBtnText}>Save New Deck</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
        padding: 20,
    },
    deckText: {
        fontWeight: '700',
        fontSize: 20,
        paddingBottom: 16,
        color: black,
        textAlign: 'center'
    },
    deckInput: {
        backgroundColor: white,
        padding: 16,
        fontSize: 16,
        color: black,
        textAlign: 'center',
        borderRadius: 8,
    },
    deckInputHeading: {
        fontSize: 12,
        color: black,
        fontWeight: '200',
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 8,
    },
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: black,
    },
    mainDeckBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: white,
    }
})


export default connect()(NewDeck)