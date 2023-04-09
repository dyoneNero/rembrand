import Cookie from 'js-cookie'

const setCookie = (cookiename, usrin) => {
    Cookie.set(cookiename, usrin, {
        secure: true,
        sameSite: 'strict',
        path: '/admin'
    })
}

export default setCookie