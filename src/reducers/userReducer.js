const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const Check ="Check"
const defaultState = {
    currentUser: {},
    isAuth: false,
    check:false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case Check:
            return {
                ...state,
                check: true
        }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }
}


export const setUser = user => ({type: SET_USER, payload: user})
export const check = user => ({type: Check, payload: user})
export const logout = () => ({type: LOGOUT})