export interface Role {
  canAccess: boolean
}

export interface UserAccount {
  userName?: string;
  userEmail: string;
  password?: string;
  userRole?: string;
  bearerTokey?: string;
}

export interface UserProfile {
  id: string;
  userEmail: string;
  userRole: string;
  username: string;
  password: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
}