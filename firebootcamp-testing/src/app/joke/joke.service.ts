import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<any> {
    return this.http.get(`http://api.icndb.com/jokes/random`);
      // .map(response => response.json().value.joke);
  }

}
