import { createStore } from 'redux'
import { LOGIN, CANCEL_LOGIN, SET_USER_NAME, SET_TOKEN } from './constant'
const initialState = {
    isLogin: false,
    username: '',
    token:''
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, { isLogin: true })
        case CANCEL_LOGIN:
            return Object.assign({}, state, { isLogin: false })
        case SET_USER_NAME:
            return Object.assign({}, state, { username: action.data })
        case SET_TOKEN:
            return Object.assign({}, state, { token: action.data })
        default:
            return state
    }
}
const store = createStore(reducer)
export default store                                                       