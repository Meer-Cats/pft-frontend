import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {map} from 'rxjs/operators';
import {ApiCollectionResponse} from './api-collection-response';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private loginUrl = 'http://192.168.43.200:8080/session/login';
  private logoutUrl = '';
  private searchUrl = '';

  public constructor(
    private http: HttpClient
  ) {
  }

  public login(mail: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginUrl, {mail, password});
  }

  public logout(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.logoutUrl, employee);
  }

  public search(query: string): Observable<Employee[]> {
    return this.http
      .get<ApiCollectionResponse<Employee>>(this.searchUrl + query)
      .pipe(
        map(r => r.data.items)
      );
  }
}
