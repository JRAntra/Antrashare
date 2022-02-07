// Two required interfaces for provided server "AngularTrainingBackEnd"
export interface NewsStory {
    _id?: string,
    publisherName: string,
    publishedTime?: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
    comment?: NewsFeedComment[],
    likedIdList?: [
        {
            userId?: string;
        }
    ],
}

export interface NewsFeedComment {
    _id?: string,
    publisherName: string,
    publishedTime?: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    };
}