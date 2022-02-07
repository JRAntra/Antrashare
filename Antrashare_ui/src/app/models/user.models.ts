import { NewsFeedComment } from "./comments.models";

export interface story {
  _id?: string;
  image?: string;
  publisherName: string;
  publishedTime: string;
  content: {
    image?: string;
    video?: string;
    text?: string;
  };
  comment?: NewsFeedComment[];
  likedIdList?: [{
    userId?: string;
  }];
}

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
