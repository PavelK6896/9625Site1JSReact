import React, {useReducer} from "react";
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import axios from 'axios'
import {SEND_MESSAGE, SHOW_LOADER} from "../types";

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
    const initialState = {
        message: [],
        loading: false
    }
    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const sendMessage = async (message, info) => {
        const box = {
            message,
            info,
            date: new Date().toJSON()
        }
        try {
            const res = await axios.post(`${url}/message.json`, box)
            const payload = {
                ...box,
                id: res.data.name
            }
            dispatch({
                type: SEND_MESSAGE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, sendMessage, loading: state.loading
        }}>
            {children}
        </FirebaseContext.Provider>
    )

}
