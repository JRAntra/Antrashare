//newsfeed
export interface News {
    _id: string,
    avatar?: ImageBitmap,
    publisherName: string,
    publishedTime: string,
    content: {
        image?: string,
        video?: string,
        text?: string,
    },
    comment?: [{
        avatar?: ImageBitmap,
        publisherName: string,
        publishedTime: string,
        content: {
            image?: string,
            video?: string,
            text?: string
        }
    }],
    likedList?: []
}