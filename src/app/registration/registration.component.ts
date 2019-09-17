import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../services/student/student.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  students: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private studentService: StudentService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.getEmployess();
    this.addForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required]
    });

  }

  onSubmit() {
    this.studentService.createStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['']);
        this.addForm.reset();
        this.getEmployess();
      });
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
