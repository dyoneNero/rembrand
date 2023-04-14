import axios from "axios";
import setCookieRequest from "../../cookies/setCookieRequest";

export function addRequest(name, num) {

    const url = process.env.REACT_APP_SERVER_URL + '/request'
    axios.post(url,{
        name: name,
        num: num
    }, {
        withCredentials: true,

    })
        .then(res => {
            setCookieRequest('_request', 'true')
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}