export interface NewsStory {
  _id?: string;
  publisherName: string;
  publishedTime?: number;
  content: {
    image?: string;
    video?: string;
    text?: string;
  };
  comment?: NewsFeedComment[];
  likedIdList?: [
    {
      userId?: string;
    }
  ];
}

export interface NewsFeedComment {
  _id?: string;
  publisherName: string;
  publishedTime?: number;
  content: {
    image?: string;
    video?: string;
    text?: string;
  };
}

export interface UserAccount {

  name: string,
  userName: string,
  userEmail: string,

  userRole: string,
  age: string,
  gender: string,
  phone: string

}

