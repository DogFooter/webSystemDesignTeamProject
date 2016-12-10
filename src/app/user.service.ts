import { Injectable } from '@angular/core';
import { User } from './user';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    private userUrl = '/user';

    constructor(private http: Http) { }

    signUp(newUser: User): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl+'/register', newUser, options).map(
            (r: Response) => r.json().data as any
        );
    }

    logIn(user: User): Observable<any> { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl+'/login', user, options).map(
            (r: Response) => r.json().data as any 
        );
    }

    logOut(user: string): Observable<any> { 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl+"/logout",{}, options).map(
            (r: Response) => r.json().data as any
        );
    }

    loggedIn(): Observable<any>{ 
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.userUrl+"/loggedin",{}, options).map(
            (r: Response) => r.json().data as any
        );
    }



}
