import { types } from "../types/types";

// const state = {
//     nombre: 'Pablo',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    console.log(action.type)
    console.log(types.logout)
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                ...action.payload,
                logged: false
            }    
        default:
            return state
    }
    console.log(state)
}