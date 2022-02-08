export interface NewsFeedComment {
    _id?: string;
    publisherName: string;
    publishedTime: string;
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
}