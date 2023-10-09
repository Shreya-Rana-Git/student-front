import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ShowStudentsComponent } from './show-students/show-students.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  { path: 'AllStudents', component: ShowStudentsComponent},
  { path: 'AddStudent', component: AddStudentComponent},
  { path: 'details/:rollNumber', component: StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
