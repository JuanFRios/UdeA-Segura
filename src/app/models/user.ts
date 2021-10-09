export interface User {
    fullName: string;
    identification: string;
    password: string;
    userName: string;
    universityRole: string;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface RenewTokenUser {
    fullName: string;
    identification: string;
    userName: string;
    universityRole: string;
    token: string;
    uid: string;
}
