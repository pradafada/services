import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  emp1: string[] = ["Adam Taylor", 'E234', 'at@abc.net']
  emp2: string[] = ["John Sims", 'A567', 'js@abc.net']
  emp3: string[] = ["Bob Nomes", 'B890', 'bn@abc.net']

  getEmp1(): string[] {
    return this.emp1
  }
  getEmp2(): string[] {
    return this.emp2
  }
  getEmp3(): string[] {
    return this.emp3
  }

  addInfo(emp: any) {
    this.emp1.push(emp)
    this.emp2.push(emp)
    this.emp3.push(emp)
    return this.emp1
  }

  constructor() { }
}
