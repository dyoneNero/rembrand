import axios from "axios";

export const getInfo = (setInfo) => {
    const url = process.env.REACT_APP_SERVER_URL + '/info/1'

    axios.get(url)
        .then(res => {
            setInfo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}