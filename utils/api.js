import AsyncStorage from '@react-native-async-storage/async-storage'

const DECK_STORAGE_KEY = 'MobileCards:deck'


export const getDecks = async () => {

    try {
        const allDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY);

        if (allDecks !== null) {
            // We have data!!
            // console.log("TODOS", allDecks);
            return JSON.parse(allDecks)
        }
        else
            return null
    } catch (error) {
        // Error retrieving data
    }

}

export const getDeck = async (id) => {


    try {
        const allDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY);
        if (allDecks !== null) {
            // We have data!!
            console.log(allDecks);
            return JSON.parse(allDecks)[id]
        }
        else
            return null
    } catch (error) {
        // Error retrieving data
    }

}

export const saveDeckTitle = async (title) => {
    // console.log("MY title", title);

    try {
        await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({ [title]: { title: title, questions: [] } }))




    } catch (error) {
        // Error retrieving data
    }

}

export const addCardToDeck = async (title, card) => {


    try {
        const results = JSON.parse(await AsyncStorage.getItem(DECK_STORAGE_KEY))
        const currDeck = results[title]
        currDeck.questions.push(card)
        const updatedDeck = { [title]: currDeck }

        return await AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(updatedDeck))

    } catch (e) {
        console.warn(e.message)
    }

}

export const deckRemove = async (title) => {

    try {
        const allDecks = await AsyncStorage.getItem(DECK_STORAGE_KEY)
        const allDecksJson = JSON.parse(allDecks)
        allDecksJson[title] = undefined
        delete allDecksJson[title]
        await AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(allDecksJson))

    } catch (error) {
        console.log(error);
    }
}


