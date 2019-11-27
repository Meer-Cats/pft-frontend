import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {map} from 'rxjs/operators';
import {ApiCollectionResponse} from './api-collection-response';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {
  private loginUrl = '';
  private logoutUrl = '';
  private searchUrl = '';

  public constructor(
    private http: HttpClient
  ) {}

  public login(employee: Employee): Observable<Employee> {
    return this.http
      .post<Employee>(this.loginUrl, employee);
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

  public getAll(): Employee[] {
    const employees: Employee[] = [];
    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });

    employees.push({
      email: 'test@gmail.com', name: 'TEST', surname: 'Test', photo: '',
      hs_java: 9, hs_javascript: 8, hs_python: 4, ss_management: 2, ss_scrum: 3
    });
    return employees;
  }
}
