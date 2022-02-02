import { SET_HOMEPAGE_BANNER  } from './actionTypes';

const initialState = {
    homeBanner: [],
}

export function reducerHomepageBanner (state = initialState, action){
    switch (action.type) {
    case SET_HOMEPAGE_BANNER:
        return {
            ...state,
            homeBanner: action.payload,
        };
    default:
        return state;
    }
}