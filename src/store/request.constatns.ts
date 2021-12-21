export const API_VERSION = 1;
export const ROOT = `http://localhost:3000`
export const API_ROOT = `${ROOT}/api/v${API_VERSION}`
export const LOGIN_PATH = `${API_ROOT}/users/sign_in`
export const API_USERS_ROOT = `${API_ROOT}/users`
export const CREATE_RECOMMENDATION_PATH = (id: number) => `${API_USERS_ROOT}/${id}/recommendations`
export const ALL_RECOMMENDATIONS_PATH = (id: number) => `${API_USERS_ROOT}/${id}/recommendations`

export const REQUEST_HEADERS = {
    CONTENT_TYPE: {
        JSON: {"Content-Type": "application/json"},
        FORM_DATA: {"Content-Type": "multipart/form-data"}
    },
    JWT: (token: string) => {
        return { Authorization: `Bearer ${token}` }
    }
};

export enum REQUEST_STATUS {
    OK = 200,
    UNAUTHORIZED = 401
}

