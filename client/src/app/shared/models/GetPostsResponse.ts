import { Post } from './Post';

export interface GetPostsResponse{
    total: number,
    results: Post[] 
}