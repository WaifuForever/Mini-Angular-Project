import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.component.html',
  styleUrls: ['./salario.component.scss']
})
export class SalarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calc(salary: number){
    if(salary > 0 && salary < 280){
      return salary * 1.2
    } else if (salary >= 280 && salary < 700){
      return salary * 1.15
    } else if (salary >= 700 && salary < 1500){
      return salary * 1.1
    } else if (salary >= 1500){
      return salary * 1.05
    }
    
  }
}
