import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private userUrl = '/new-user';

    constructor(private http: Http) { }

    signUp(newUser: User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl, newUser, options).map(
            (r: Response) => r.json() as any
        );
    }

    logIn(user: User): Observable<any> { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl, user, options).map(
            (r: Response) => r.json() as any
        );
    }

    logOut(user: User): Observable<any> { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl, user, options).map(
            (r: Response) => r.json() as any
        );
    }
}
