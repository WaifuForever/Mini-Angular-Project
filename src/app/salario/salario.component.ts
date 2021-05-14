import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.scss']
})
export class SalarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  salaryForm: FormGroup;
  salary = 0
  ngOnInit(): void {
    this.salaryForm = this.formBuilder.group({
      'salary': [null, Validators.required],
      
    });
  }

  calc(){
    this.salary = this.salaryForm.controls['salary'].value
    if(this.salary > 0 && this.salary < 280){
      return this.salary * 1.2
    } else if (this.salary >= 280 && this.salary < 700){
      return this.salary * 1.15
    } else if (this.salary >= 700 && this.salary < 1500){
      return this.salary * 1.1
    } else if (this.salary >= 1500){
      return this.salary * 1.05
    }
    
  }
}
