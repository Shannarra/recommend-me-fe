export const COUNTER_LS_NAME: string = 'counterState';
export const LOGGED_LS_NAME: string = 'isLoggedIn';
export const JWT_LS_NAME: string = '__jwt';
export const USER_LS_NAME: string = '__user';
export const USER_LOGIN_STATE: string = '__login_state';


export const API_VERSION = 1;
export const ROOT = `http://localhost:3000`
export const API_ROOT = `${ROOT}/api/v${API_VERSION}`
export const LOGIN_PATH = `${API_ROOT}/users/sign_in`

export const ALERT_CONSTANTS = {
    SUCCESS: "Operation succeeded",
    ERROR: "Operation failed",
    CLEAR: ""
}

export const USER_ACTION_CONSTANTS = {
    LOGIN: 'LOG_IN',
    LOGOUT: 'LOG_OUT',
    REGISTER: 'REGISTER'
}

export const LOGIN_STATE = {
    SUCCESS: "Login successful!",
    FAILIURE: "Login failed!",
}

export const LOCAL_STORAGE = {
    read: (key: string) => window.localStorage.getItem(key),
    write: (key: string, thing: string) => window.localStorage.setItem(key, thing),
    remove: (key: string) => window.localStorage.removeItem(key),
    tryParseRead: (key: string) => {
        const it = window.localStorage.getItem(key);

        if (it === null)
            return null;
        else
            return JSON.parse(it);
    }
}
