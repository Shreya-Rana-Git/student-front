import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = 'http://localhost:8585/student-app/student';
  private idUrl = 'http://localhost:8585/student-app/id-gen';
  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
}

insertStudent(student: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, student);
}

getStudentByRoll(roll : number): Observable<any> {
 return this.http.get(`${this.baseUrl}/${roll}`);
}
generateId():Observable<any> {
  return this.http.get(`${this.idUrl}`);

}
}
