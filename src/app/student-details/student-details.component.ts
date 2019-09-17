import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  students: any;

  constructor(
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    this.getEmployess();
  }

  getEmployess() {
    this.studentService.getStudents()
      .subscribe( data => {
        this.students = data;
        console.log('Employees', this.students);
      },
      error => console.log(error));
  }

}
