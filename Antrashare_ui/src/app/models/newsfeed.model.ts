export interface Comment {
    publisherName: string;
    content: Story;
    publishedTime?: string;
}

export interface News {
    __v?: string;
    _id?: string;
    publisherName: string;
    content: Story;
    comment: Comment[];
    likedIdList?: string[];
    publishedTime?: string;
}

export interface Story {
    _id?: string;
    image: string;
    text: string;
    video: string;
}