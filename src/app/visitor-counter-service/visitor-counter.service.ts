import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorCounterService {

  constructor(private http: HttpClient) { }

  updateCounter(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/');
  }
}
