//newsfeed
export interface News {
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