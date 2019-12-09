import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post, GetPostsResponse } from '@app/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  api: string = "http://localhost:3000/api"

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Function to get a subset of posts from the api. 
   * 
   * @param page @type { number } - The current page index
   * @param limit @type { number } - The page size limit
   * @returns @type { Promise<GetPostsResponse> }  - The total number of items and the current page results
   */
  getPosts(page: number, limit: number): Promise<GetPostsResponse> {
    let params = new HttpParams().set("page",page.toString()).set("limit", limit.toString());
    return this.http.get<GetPostsResponse>(`${this.api}/posts`, { params: params }).toPromise();
  }

  /**
   * A function that sends a new post to the api via a post request
   * 
   * @param post @type { Post } - The post to be added
   */
  addPost(post: Post): Promise<Post> {
    return this.http.post<Post>(`${this.api}/posts`, post).toPromise();
  }
}
