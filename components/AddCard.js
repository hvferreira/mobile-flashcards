import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { gray, blue, black, white } from "../utils/colors";
import { addCard } from '../actions/index'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {
    state = {
        question: '',
        answer: '',
    }

    submit = async () => {
        const question = this.state.question;
        const answer = this.state.answer;

        const card = [
            question,
            answer
        ]

        this.props.dispatch(addCard(this.props.route.params.title, card))//action
        this.props.navigation.navigate('MyDecks')
        await addCardToDeck(this.props.route.params.title, card)//API
    }

    render() {

        return (
            <View style={{ flex: 1, marginHorizontal: 50, justifyContent: 'center' }}>
                <Text >Question</Text>
                <TextInput type='text' placeholder='Write question' placeholderTextColor={blue} value={this.state.question} onChangeText={question => this.setState({ question })} style={{ marginBottom: 10 }} />
                <Text >Answer</Text>
                <TextInput type='text' placeholder='Write Answer' placeholderTextColor={blue} value={this.state.answer} onChangeText={answer => this.setState({ answer })} />

                <TouchableOpacity style={[styles.mainDeckBtn]} onPress={() => this.submit()} style={{ margin: 10 }} disabled={this.state.question === '' || this.state.answer === ''}>
                    <Text style={styles.mainDeckBtnText}>Submit Question</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainDeckBtn: {
        padding: 20,
        borderRadius: 8,
        backgroundColor: black,
    },
    mainDeckBtnText: {
        fontSize: 18,
        textAlign: 'center',
        color: black,
    },
})


const mapStateToProps = (decks, props) => {
    return {
        decks,
        props,
    }
}
export default connect(mapStateToProps)(AddCard)