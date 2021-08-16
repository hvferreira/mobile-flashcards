export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const DElETE_DECK = 'DElETE_DECK'

//done
export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    }
}

//done
export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}


export function addCard(decktitle, card) {
    return {
        type: ADD_CARD,
        decktitle,
        card,
    }
}

export function deleteDeck(title) {
    return {
        type: DElETE_DECK,
        title,
    }
}