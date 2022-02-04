export interface Story {
    userPic: string;
    userName: string;
    comment: string[];
    likes: number;
    publishedDate: string;
}

export interface News {
    publisherName: string,
    publishedTime: string,
    content: {
        image: string,
        video: string,
        text: string,
    },
    comment: [
        {
            publisherName: string,
            publishedTime: string,
            content: {
                image: string,
                video: string,
                text: string,
            },
        },
    ],
    likedIdList: [
        {
            type: string,
        },
    ],
}