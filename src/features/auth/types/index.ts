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