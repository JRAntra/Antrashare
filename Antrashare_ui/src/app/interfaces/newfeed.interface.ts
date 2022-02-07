//newfeed
export interface NewFeed {
    content: Content;
    comment?: Comment[],
    likedIdList?: LikeList[],
    publishedTime: string,
    publisherName: string,
    __v?: number;
    _id: string,
}

//story item
export interface Story {
    publisherName: string,
    publishedTime: string,
    content: Content;
    _id?: string,
}

export interface Comment {
    content: Content;
    publishedTime: string,
    publisherName: string,
    _id: string,
}

export interface Content {
    image?: string;
    video?: string;
    text?: string;
    _id?: string;
}

export interface LikeList {
    _id?: string;
}
