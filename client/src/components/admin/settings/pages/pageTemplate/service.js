import axios from "axios";
import getCookie from "../../../../cookies/getCookie";



export function getAccessRoute(setAccessRoute) {

    const url = process.env.REACT_APP_SERVER_URL
    const authBear = `Bearer ${getCookie('_auth')}`

    axios.get(`${url}/auth/access-route`,{
        headers: {
            Authorization: authBear
        }
    })
        .then(res => {
            setAccessRoute(res.data.accessRoute)
        })
        .catch(err => {
            console.log(err)
        })
}

export function getAll(setAll, url) {

    axios.get(url)
        .then(res => {
            setAll(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export function getOne(id, setOne, one, url) {
    axios.get(`${url}/${id}`)
        .then(res => {
            setOne(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export function addOne(one, setAll, url, setOne) {
    const auth = `Bearer ${getCookie('_auth')}`
    axios.post(url, one, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            getAll(setAll, url, setOne)
        })
        .catch(err => {
            console.log(err)
        })
}

export function deleteOne(id, setAll, url) {
    const auth = `Bearer ${getCookie('_auth')}`
    axios.delete(`${url}/${id}`, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            console.log(setAll, url)
            getAll(setAll, url)
        })
        .catch(err => {
            console.log(err)
        })
}

export function updateOne(one, setAll, url, setOne) {
    const auth = `Bearer ${getCookie('_auth')}`
    axios.patch(`${url}/${one.id}`, one, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            getAll(setAll, url, setOne)
        })
        .catch(err => {
            console.log(err)
        })
}

export function getAllRequest(setAll, url) {
    const auth = `Bearer ${getCookie('_auth')}`
    axios.get(url, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            setAll(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}

export function deleteOneRequest(id, setAll, url) {
    const auth = `Bearer ${getCookie('_auth')}`
    axios.delete(`${url}/${id}`, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            requestGetAll(setAll, url)
        })
        .catch(err => {
            console.log(err)
        })
}

export function requestGetAll(setAll, url) {
    const auth = `Bearer ${getCookie('_auth')}`

    axios.get(url, {
        headers: {
            Authorization: auth
        }
    })
        .then(res => {
            setAll(res.data)
        })
        .catch(err => {
            console.log(err)
        })
}
