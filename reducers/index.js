import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DElETE_DECK } from '../actions/index'

function index(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK:

            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD:

            return {
                ...state,
                [action.decktitle]: {
                    ...state[action.decktitle],
                    questions: [...state[action.decktitle].questions].concat(action.card)
                }
            }

        case DElETE_DECK:
            const newState = Object.assign({}, state)
            delete newState[action.title];
            return newState;
        default:
            return state
    }
}

export default index