export interface Comment {
    publisherName: string;
    content: Story;
    publishedTime: string;
}

export interface News {
    publisherName: string;
    content: Story;
    comment: Comment[];
    likedIdList: string[];
    publishedTime: string;
}

export interface Story {
    image: string;
    text: string;
    video: string;
}