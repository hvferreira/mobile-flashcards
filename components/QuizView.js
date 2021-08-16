import React, { Component } from 'react';
import QuizResult from './QuizResult'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'



class QuizView extends Component {


    state = {
        numCorrect: 0,
        numQuestions: 0,
        showAnswer: false,
        flipIndex: 0,
    }


    Reset = () => {
        this.setState({ numCorrect: 0, numQuestions: 0, showAnswer: false })
    }

    correctAnswer = () => {
        this.setState((prevState) => {
            return {
                numCorrect: prevState.numCorrect + 1,
                numQuestions: prevState.numQuestions + 1,
            }
        })
    }

    incorrectAnswer = () => {
        this.setState((prevState) => {
            return {
                numQuestions: prevState.numQuestions + 1,
            }
        })
    }

    showAnswer = () => {
        this.setState((prev) => ({
            showAnswer: !prev.showAnswer,
        }))
    }

    render() {
        const { deck } = this.props

        if (this.state.numQuestions === deck.deck.questions.length) {

            return (
                <QuizResult Restart={this.Reset} title={deck.deck.title} navigation={this.props.navigation} correct={this.state.numCorrect} number={this.state.numQuestions} />
            )
        }

        const quesNumber = this.state.numQuestions + 1

        const question = deck.deck.questions[this.state.numQuestions][0]

        const answer = deck.deck.questions[this.state.numQuestions][1]

        const quesLength = deck.deck.questions.length


        return (
            <View style={{ flex: 1 }}>
                <Text style={{ margin: 10 }}>{quesNumber} / {quesLength}</Text>
                <View style={styles.container}>

                    <View style={styles.cardContainer} ref={(card) => this.card = card} >
                        <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} >
                            <Text style={{ textAlign: 'center' }}>{question}</Text>
                            <TouchableOpacity style={styles.card} onPress={() => this.showAnswer()} >
                                <Text style={{ textAlign: 'center', color: 'orange' }}>
                                    {this.state.showAnswer === false ? "See Answer" : answer}
                                </Text>
                            </TouchableOpacity>
                        </TouchableOpacity>


                    </View>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity onPress={() => this.correctAnswer()} style={{ margin: 10, backgroundColor: 'green' }}>

                            <Text style={{ textAlign: 'center', color: 'red' }}>
                                CORRECT
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.incorrectAnswer()} style={{ margin: 10, backgroundColor: 'red' }}>

                            <Text style={{ textAlign: 'center', color: 'black' }}>
                                INCORRECT
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        flex: 1,
        width: 320,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.5,

    },
});

function mapStateToProps(decks, props) {
    const deck = props.route.params
    return {
        deck,
        props
    }
}

export default connect(mapStateToProps)(QuizView);