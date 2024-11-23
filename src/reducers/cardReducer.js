const initialState = {
    cardData: []
};

const cardReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                cardData: [...state.cardData, action.payload]
            }
            break;

        case "REMOVE_FORM_CARD":
            return {
                ...state,
                cardData: state.cardData.filter(item => item.id !== action.payload.id),
            }
            break;
    }
}