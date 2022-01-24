//newfeed
export interface NewFeed {
    avatar: ImageBitmap;
    publisherName: string, 
    publishedTime: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    },
    comment: Story[]
}

//story item
export interface Story {
    avatar: ImageBitmap;
    publisherName: string, 
    publishedTime: string,
    content: {
        image?: string;
        video?: string;
        text?: string;
    }
}