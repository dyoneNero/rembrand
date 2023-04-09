import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL

export function getAllWorks(setAllWorks) {
    axios.get(`${url}/works`)
        .then(res => {
            setAllWorks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export function getAllStocks(setAllStocks) {
    axios.get(`${url}/stocks`)
        .then(res => {
            setAllStocks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}