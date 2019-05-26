import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

import { Technology } from './technology.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class TechnologiesService {
  constructor(
    private http: HttpClient
  ) {
  }

  saveData(techs: Technology[]): Observable<{}> {
    // const headers = new HttpHeaders().set('Authorization', 'my-new-auth-token');
    const params = new HttpParams().set('test', 'test');
    const url = 'http://localhost:3000/api/technologies';
    // return this.http.post(
    // 	url,
    // 	data,
    // 	{
    // 		params
    // 	}
    // );


    const request = new HttpRequest(
      'POST',
      // 'technologies',
      url,
      techs,
      {
        reportProgress: true,
        params,
      });
    return this.http.request(request);
    // return this.http.post('technologies', techs);
  }

  getData() {
    return this.http.get(
      'technologies'
    )
      .pipe(
        map(
          (data) => {
            return data;
          }
        )
      );
  }
}
