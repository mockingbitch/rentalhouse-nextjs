export type AuthState = {
    id? : string;
    data? : object,
    error? : object,
    isLoggedIn? : boolean,
    isLoading? : boolean
};

export interface UserAuth {
    email?: string;
    password?: string;
}