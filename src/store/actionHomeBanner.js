import { SET_HOMEPAGE_BANNER } from "./actionTypes";

export function setHomepageBanner(payload){
    return {
        type: SET_HOMEPAGE_BANNER,
        payload: payload,
    };
}