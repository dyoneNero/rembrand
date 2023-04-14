import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL

export const getAllWorks = async (setAllWorks) => {
    axios.get(`${url}/works`)
        .then(res => {
            const response = res.data
            setAllWorks(response)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getAllStocks = (setAllStocks) => {
    axios.get(`${url}/stocks`)
        .then(res => {
            const response = res.data
            setAllStocks(response)
        })
        .catch(err => {
            console.log(err)
        })
}