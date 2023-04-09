import axios from "axios";


export const getWork = (url, setWork) => {
    axios.get(url)
        .then(res => {
            setWork(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}