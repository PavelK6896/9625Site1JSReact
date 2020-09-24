import {SEND_MESSAGE,  SHOW_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [SEND_MESSAGE]: (state, {payload} ) => ({
        ...state,
        loading: false
    }),
    DEFAULT: state => state
}


export const firebaseReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)

}
