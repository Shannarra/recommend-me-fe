export interface IUserLoginProps {
    user: {
        email: string;
        password: string;
    }
}

export interface IUserLoginSuccess {
    message: string;
    token: string;
    user: IUserProps;
}

export interface IUserProps {
    id: number;
    email: string;
    created_at: string;
    updated_at: string;
    fname: string;
    lname: string;
}
