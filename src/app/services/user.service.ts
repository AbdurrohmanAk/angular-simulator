import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, tap, of, catchError, finalize } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import { UserApiService } from './user-api.service';
import { LoaderService } from './loader.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userApiService: UserApiService = inject(UserApiService);
  private loaderService: LoaderService = inject(LoaderService);
  private messageService: MessageService = inject(MessageService);

  private userSubject: BehaviorSubject<IUser[]> =
    new BehaviorSubject<IUser[]>([]);

  users$ = this.userSubject.asObservable();

  setUsers(users: IUser[]): void {
    this.userSubject.next(users);
  }

  getUsers(): Observable<IUser[]> {
    return this.users$;
  }

  loadUsers(): Observable<IUser[]> {
    this.loaderService.showLoader();
    
    return this.userApiService.getUsers().pipe(
      tap(users => {
        this.setUsers(users);
      }),
      catchError(() => {
        this.messageService.showError('Не удалось загрузить пользователей');
        return of([]);
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      })
    );
  }
}
