export type LoginRequest = {
    email: string;
    password: string;
}

export type RegisterRequest = {
    fullName: string;
    email: string;
    password: string;
    phone: string;
}

export type LoginResponse = {
    access_token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
};

export type RegisterResponse = {
    fullName: string;
    email: string;
    phone: string;
    createAt: string;
}

export interface ILoginForm {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface IRegisterForm {
    fullName: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IApiError<T = any> {
    statusCode: number;
    error: string;
    message: string;
    data?: T;
}