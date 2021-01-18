import {setUser,check} from "../reducers/userReducer";
import API from '../reducers/api';
/* export const registration = async () => {
    try {
        const responce = await axios.post("api/auth/login", { login, password });
        alert(responce.data.message);

    } catch (e){
        console.log(e);
    }
} */
export const login = (login, password) => {
    return async dispatch => {
        try {
            const response = await API.post('api/auth/login', { login, password });
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token);
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
export const auth =  () => {
    return async dispatch => {
        try {
            const response = await API.get('api/auth/updateauth', 
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
                      )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch(e) {
/*             console.log(e);
 */        }
    }
}
 export const activeserverdb =  () => {
    return async dispatch => {
        try {
            const response = await API.get('api/auth/conectionbase')
            console.log(response.data)
            dispatch(check(response.data))
        } catch(e) {
            console.log(e);
         }
    }
}