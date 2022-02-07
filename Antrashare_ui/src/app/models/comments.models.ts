export interface NewsFeedComment {
    _id?: string;
    publisherName: string;
    publisherTime?: number;
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
}