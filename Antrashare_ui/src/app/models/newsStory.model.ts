export interface NewsStory {
  publisherName: String;
  publishedTime: String;
  content: {
    image: String;
    video: String;
    text: String;
  };
  comment: [
    {
      publisherName: String;
      publishedTime: String;
      content: {
        image: String;
        video: String;
        text: String;
      };
    }
  ];
  likedIdList: [
    {
      type: String;
    }
  ];
}
