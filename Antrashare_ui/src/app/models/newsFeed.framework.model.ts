export interface NewsStory {
  publisherName: string;
  publishedTime: string;
  content: {
    image: string;
    video: string;
    text: string;
  };
  comment: [
    {
      publisherName: string;
      publishedTime: string;
      content: {
        image: string;
        video: string;
        text: string;
      };
    }
  ];
  likedIdList: [
    {
      type: string;
    }
  ];
}

export interface NewsFeedComment {
  publisherName: string;
  publishedTime: string;
  content: {
    image: string;
    video: string;
    text: string;
  };
}
