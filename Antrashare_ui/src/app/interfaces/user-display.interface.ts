export interface UserInfoNewsStory {
    publisherName: string,
    publishedTime: string,
}

export interface UserInfo {
    userName: string,
    userEmail: string
}

export interface UserProfile {
    userEmail: string,
    userRole: string, 
    name?: string, 
    userName: string,
    gender?: string,
    age?: number,
    phone?: number
}