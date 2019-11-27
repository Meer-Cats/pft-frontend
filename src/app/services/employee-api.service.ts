import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {map} from 'rxjs/operators';
import {ApiCollectionResponse} from './api-collection-response';
import {User} from '../models/user';
import {Question} from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private loginUrl = 'http://192.168.43.200:8080/session/login';
  private logoutUrl = '';
  private searchUrl = 'http://192.168.43.200:8080/employee/search';
  private employeesUrl = 'http://192.168.43.200:8080/employee/all';
  private recommendUrl = 'http://192.168.43.200:8080/employee/recommend';
  private inviteUrl = 'http://localhost:8080/employee/invite';

  public constructor(
    private http: HttpClient
  ) {
  }

  public login(mail: string, password: string): Observable<User> {
    return this.http.post<User>(this.loginUrl, {mail, password}, { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
      }), withCredentials: true});
  }

  public logout(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.logoutUrl, employee);
  }

  public search(skills: string[]): Observable<Employee[]> {
    return this.http
      .get<ApiCollectionResponse<Employee>>(this.searchUrl.concat('?skills=[', ...skills, ']'))
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

  public recommend(email: string, key: string): Observable<string> {
    return this.http
      .post<string>(this.recommendUrl, {employee: email, key});
  }

  public getQuestion(): Observable<Question> {
    return this.http
      .get<Question>(this.recommendUrl)
      .pipe(
        map(result => result instanceof HttpErrorResponse ? null : result)
      );
  }

  invite(mails: string[], subject: string, message: string, inviteDate: Date): Observable<void> {
    return this.http
      .post<void>(this.inviteUrl, {employee: mails, subject, body: message, inviteDate});
  }
}
