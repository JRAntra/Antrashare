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
    content: {
        image?: string,
        video?: string,
        text?: string
    }
}