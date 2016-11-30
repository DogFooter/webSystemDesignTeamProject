import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

    // private postUrl = 'http://localhost:3000/post';
    // private postUrl = 'http://172.30.127.123:3000/post';
    private postUrl = '/post'


    constructor(private http: Http) { }

    // this is for test with mock data
    // 
    getPost(id: number): Observable<Post> {
        return this.http.get(this.postUrl+'/'+id).map((r:Response) => r.json().data as Post);
    }
    getPosts(query: String): Observable<Post[]> {
        if (query) {
            return this.http.get(this.postUrl+'?'+query).map((r:Response) => r.json().data as Post[]);
        }
        else {
            return this.http.get(this.postUrl).map((r:Response) => r.json().data as Post[]);
        }
    }
    
    
    // addPost(post: Post): Post {
    //     return post;
    // }

    // this is for ajax
    //
    addPost(post: Post): Observable<Post> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(post);
        return this.http.post(this.postUrl,  post , options ).map(
            (r: Response) => r.json() as Post
        ); 
    }

    //
    // getPosts(): Observable<Post[]> {
    //     return this.http.get(this.postUrl).map((r:Response) => r.json().data as Post[]);
    // }

}
