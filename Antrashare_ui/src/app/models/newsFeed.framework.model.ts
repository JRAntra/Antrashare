export interface NewsStory {
  _id?:string;
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
  _id?:string;
  publisherName: string;
  publishedTime?: number;
  content: {
    image?: string;
    video?: string;
    text?: string;
  };
}

