//role permission
export interface Role {
    canAccess: boolean
}
//user profile
export interface UserProfile {
    _id: string,
    userEmail: string,
    userRole: string,
    name?: string,
    userName: string,
    gender?: string,
    age?: number,
    phone?: number,
    exp?: number,
    iat?: number
}

//user account
export interface UserAccount {
    _id?: string,
    userEmail: string,
    _userRole?: string, 
    password: string
}