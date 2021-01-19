import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Data } from './Data';
import { environment} from '../environments/environment';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userService = '/examen/c2s/users/';


  constructor(private httpClient: HttpClient) { }


  public getUser() : Observable<Data> {
    return this.httpClient.get<Data>(`http://localhost:8080${this.userService}`);
   }
}
