import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../interfaces/IUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {

  private http: HttpClient = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
