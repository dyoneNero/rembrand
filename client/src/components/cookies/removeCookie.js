import Cookie from 'js-cookie'

const removeCookie = (cookiename) => {
    return Cookie.remove(cookiename, {
        path: '/admin'
    })
}

export default removeCookie