import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const route = 'ssrouter'

export function setToken(value) {
    return Cookies.set(TokenKey, value)
}
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setRouter(value) {
    return Cookies.set(route, value)
}
export function getRouter() {
    return Cookies.get(route)
}

export function removeAll() {
    Cookies.remove('Admin-Token');
    Cookies.remove('ssrouter');
}
