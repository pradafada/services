import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empinfo',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './empinfo.component.html',
  styleUrl: './empinfo.component.css',
  providers: [DataService]
})
export class EmpinfoComponent {
  empReceived1: string[]=[];
  empReceived2: string[]=[];
  empReceived3: string[]=[];

  getEmpFromServiceClass1() {
    this.empReceived1 = this.dservice.getEmp1()
  }
  getEmpFromServiceClass2() {
    this.empReceived2 = this.dservice.getEmp2()
  }
  getEmpFromServiceClass3() {
    this.empReceived3 = this.dservice.getEmp3()
  }

  constructor(private dservice: DataService) {
    
  }

  updateEmp(frm: any) {
    this.dservice.addInfo(frm.value.location)
  }

}
