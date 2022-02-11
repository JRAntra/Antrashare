//newsfeed
export interface News {
    _id?: string,
    publisherName: string,
    publishedTime?: number,
    content: {
        image?: string,
        video?: string,
        text?: string,
    },
    comment?: StoryComment[];
    likedIdList?: [
        {
            userId?: string;
        }
    ]
}
//same as News, use it in news.service
export interface Story {
    [x: string]: any;
    _id?: string,
    publisherName?: string,
    publishedTime?: number,
    content?: {
        image?: string,
        video?: string,
        text?: string,
    },
    comment?: StoryComment[];
    likedIdList?: [
        {
            userId?: string;
        }
    ]
}

export interface StoryComment {
    _id?: string;
    avatar?: ImageBitmap,
    publisherName?: string,
    publishedTime?: number,
    content?: {
        image?: string,
        video?: string,
        text?: string
    }
}