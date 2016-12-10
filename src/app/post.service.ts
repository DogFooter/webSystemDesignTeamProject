import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

    private postUrl = '/post'


    constructor(private http: Http) { }

    // this is for test with mock data
    // 
    getPost(id: number): Observable<Post> {
        return this.http.get(this.postUrl+'/'+id).map((r:Response) => r.json().data.data as Post);
    }
    getPosts(query: String): Observable<any> {
        if (query) {
            return this.http.get(this.postUrl+'?'+query).map((r:Response) => r.json().data as any);
        }
        else {
            return this.http.get(this.postUrl).map((r:Response) => r.json().data as any);
        }
    }
    
    

    // this is for ajax
    //
    addPost(post: Post): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(post);
        return this.http.post(this.postUrl,  post , options ).map(
            (r: Response) => r.json().data as any
        ); 
    }

    delPost(id: number): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.postUrl+'/del/'+id).map((r:Response) => r.json().data as any);
    }

}
