import axios from "axios";

export const getAllServices = async (setAllServices) => {
    const url = process.env.REACT_APP_SERVER_URL
    await axios.get(`${url}/services`)
        .then(res => {
            setAllServices(res.data)
        })
}