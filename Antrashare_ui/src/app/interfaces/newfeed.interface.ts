//newfeed
export interface NewFeed {
    avatar?: ImageBitmap;
    // comment?: Story[],
    content: Content;
    comment?: [],
    likedIdList?: [],
    publishedTime: string,
    publisherName: string,
    __v?: number;
    _id: string,
}

//story item
export interface Story {
    avatar?: ImageBitmap;
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
