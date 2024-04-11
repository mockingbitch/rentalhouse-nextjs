import axios from "axios";

let API_URL: string | undefined = 'http://localhost:81/api/';

const LoginService = async ({email, password}: {email?: string, password?: string}) => {
    return await axios
        .post(API_URL + "login", {
            email,
            password
        })
        .then(response => {
            return response;
        });
}

const LogoutService = (token: string) => {
    return axios.get(API_URL + "logout", { headers: {"Authorization" : `Bearer ${token}`} }).then(response => response.data)
}

export {
    LoginService,
    LogoutService,
}