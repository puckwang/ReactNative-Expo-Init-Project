import {types} from "../actions/template";

const initialState = {
    title: process.env.title
};

export const templateReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case types.GET_TITLE: {
            return {
                ...state,
            }
        }
        case types.GET_TITLE_SUCCESS: {
            return {
                ...state,
                title: payload
            }
        }
        default: {
            return state
        }
    }
};