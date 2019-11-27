import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
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
  private searchUrl = 'http://192.168.43.200:8080/search';
  private employeesUrl = 'http://192.168.43.200:8080/employee/all';
  private recommendUrl = 'http://192.168.43.200:8080/recommend';

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

  public getAll(): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(this.employeesUrl)
      .pipe(
        map(result => result instanceof HttpErrorResponse ? [] : result)
      );
  }

  public recommend(email: string): Observable<string> {
    return this.http
      .post<string>(this.recommendUrl, {employee: email});
  }
}
