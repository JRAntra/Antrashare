//newfeed
export interface NewFeed {
    publisherName: string, 
    publishedTime: string,
    content: {
        image: string;
        video: string;
        text: string;
    },
    comment: Story[]
}

//story item
export interface Story {
    publisherName: string, 
    publishedTime: string,
    content: {
        image: string;
        video: string;
        text: string;
    }
}