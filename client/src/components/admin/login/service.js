import axios from "axios";
import setCookie from "../../cookies/setCookie";

const url = process.env.REACT_APP_SERVER_URL
export function signIn(formData, navigate) {
    axios.post(`${url}/auth/login`, formData)
        .then(res => {
            const token = res.data.accessToken
            setCookie('_auth', token)
            navigate('/admin/settings/stocks')
        })
        .catch((err) => {
            console.log(err)
        })
}