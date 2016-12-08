import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NationService {

    url: String = '/getgeo';

    constructor(private http: Http) { }

    getGeoByNation(nation: string): Observable<any> {
        console.log('nation service in here')
        return this.http.get(this.url+'/'+nation).map(
            (r: Response) => r.json() as any
        );
    }
}
