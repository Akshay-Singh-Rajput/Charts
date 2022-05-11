import { SCORE_DATA } from "./action";


const initialState = {
    storeData: [],
    
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SCORE_DATA: {
            return {
                ...state,
                storeData: payload
            };
        };
        default:
            return state;

    }
};