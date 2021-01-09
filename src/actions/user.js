import axios from "axios";

export const registration = async () => {
    try {
        const responce = await axios.post("api/auth/login", { login, password });
        alert(responce.data.message);

    } catch (e){
        alert(e.response.date.message);
    }
}
export const login = async () => {
    try {
        const responce = await axios.post("api/auth/login", { login, password });
        alert(responce.data.message);

    } catch (e){
        alert(e.response.date.message);
    }
}