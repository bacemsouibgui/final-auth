import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, USER_LOADING, GET_AUTH_USER } from "../constants/ActionTypes";

// initial state
const initState={
    user:null,
    isAuth: false,
    msg: null,
    isLoading: true
}

// reducer
const authReducer=(state=initState, {type,payload})=>{
    switch(type) {

        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case REGISTER_USER:
        case LOGIN_USER:
            localStorage.setItem('token',payload.token)
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                msg: payload.msg,
                ...payload
            }

            case GET_AUTH_USER:
                return{
                    ...state,
                    isLoading: false,
                    isAuth: true,
                    msg: payload.msg,
                ...payload

                }
// logout
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuth: false,
                user: null,
                isLoading: false
            }
        

            default:
                return state;
    }

}
export default authReducer;