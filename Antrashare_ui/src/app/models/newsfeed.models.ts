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
    comment?: NewsComment[];
    likedIdList?: [
        {
            userId?: string;
        }
    ]
}

export interface NewsComment {
    _id?: string,
    publisherName: string,
    publishedTime?: number,
    comment?: NewsComment[];
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