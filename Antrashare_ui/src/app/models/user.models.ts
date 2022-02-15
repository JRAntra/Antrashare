export interface UserProfile {
  id: string;
  userEmail: string;
  userRole: string;
  name: string;
  username: string;
  password: string;
  gender: string;
  age: number;
  phone: string;
  postedNewsList: any[];
  LikeList: any[];
  avatar_url?: string;
}

export interface UserAccount {
  id: string;
  userEmail: string;
  password: string;
  userRole: string;
}

export interface role {
  canAccess: boolean;
}

export interface registerUser {
  name: string;
  username: string;
  useremail: string;
  password: string;
  gender: string;
  age: number;
  phone: string;
}

export interface loginData {
  age: number,
  exp: number,
  gender: string,
  iat: number,
  name: string,
  phone: number,
  userEmail: string,
  userName: string,
  userRole: string,
  _id: string,
};