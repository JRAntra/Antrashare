export interface NewFeed {
    _id?: string,
    publisherName: string,
    publishedTime?: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
    comment?: NewsFeedComponent[],
    likedIdList?: [
        {
            userId?: string;
        }
    ],
}

export interface NewsFeedComponent {
    _id?: string,
    publisherName: string,
    publishedTime?: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
}