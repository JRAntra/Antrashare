import { NewsFeedComment } from "./comments.models";

export interface newsStory {
    _id?: string;
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