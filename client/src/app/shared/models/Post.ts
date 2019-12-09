// Interface that represents a post
export interface Post{
    id?: number,
    title: string;
    category: string;
    subjectURL?: string;
    body: string;
    posted?: Date
}