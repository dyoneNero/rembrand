import Cookie from 'js-cookie'

const setCookieRequest = (cookiename, usrin) => {
    Cookie.set(cookiename, usrin, {
        secure: true,
        sameSite: 'strict',
        path: '/',
        expires: 1
    })
}

export default setCookieRequest