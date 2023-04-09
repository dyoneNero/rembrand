import axios from "axios";


const url = process.env.REACT_APP_SERVER_URL

export function getAllServices(setAllServices) {
    axios.get(`${url}/services`)
        .then((res) => {
            setAllServices(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}