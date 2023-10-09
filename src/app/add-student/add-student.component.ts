import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student:Student= new Student();
  newRoll!:number;
  submitted:boolean=false;
  //studentForm!:FormGroup;

  constructor(private router: Router,private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentService.generateId().subscribe(data => {
      this.newRoll=data;
    });
    /*this.studentForm=new FormGroup({
      sname:new FormControl(""),
      cname:new FormControl(""),
      sub1:new FormControl(""),
      sub2:new FormControl(""),
      sub3:new FormControl(""),
    });*/
  }//end of ngOnInit

  insertStudent():void{
    this.student.rollNumber=this.newRoll;
    /*this.student.studentName=studentData.sname;
    this.student.courseName=studentData.cname;
    this.student.subject1=studentData.sub1;
    this.student.subject2=studentData.sub2;
    this.student.subject3=studentData.sub3;
    this.student.totalMarks=0;
    this.student.grade=" ";*/
    this.studentService.insertStudent(this.student).subscribe(data=>{
      this.student=new Student();
      this.submitted=true;
    });
  }//end of insertStudent

  returnBack(){
    this.router.navigate(['/AllStudents']);
  }
}
