import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://52.66.206.214:8080/';

  getStudents() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Student[]>(this.baseUrl + '/employees', httpOptions);
  }

  createStudent(student: Student) {
    return this.http.post(this.baseUrl + '/employee', student);
  }

}
