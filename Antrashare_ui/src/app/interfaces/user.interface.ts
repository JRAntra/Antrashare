//user profile
export interface UserProfile {
    _id: string,
    userEmail: string,
    userRole: string, 
    name?: string, 
    userName: string,
    password?: string,
    gender?: string,
    age?: number,
    phone?: number,
    avatar?: ImageBitmap,
}

export interface UserInfo {
    userEmail: string,
    userRole: string, 
    userName: string,
    name?: string, 
    gender?: string,
    age?: number,
    phone?: number,
}

//user account
export interface UserAccount {
    id: string,
    userEmail: string,
    userRole: string, 
    password: string
}

//role permission
export interface Role {
    canAccess: boolean
}

export interface UserInfoStore {
    userName: string, 
    userEmail: string,
    userRole: string
}