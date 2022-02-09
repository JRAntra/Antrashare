//role permission
export interface Role {
    canAccess: boolean
}
//user profile
export interface UserProfile {
    id: string,
    userEmail: string,
    userRole: string,
    name?: string,
    username: string,
    gender?: string,
    age?: number,
    phone?: string,
}

//user account
export interface UserAccount {
    id: string,
    userEmail: string,
    userRole: string,
    password: string
}
