import { Component, OnInit } from '@angular/core';
import { AdmincfService } from '../admincf.service';

@Component({
  selector: 'app-crud-rh',
  templateUrl: './crud-rh.component.html',
  styleUrls: ['./crud-rh.component.scss']
})
export class CrudRHComponent implements OnInit {
  
  tab:any=[];

  constructor(private sAdmin:AdmincfService) { }

  getAll(){
    this.sAdmin.getAllRh().subscribe(rs=>{
      this.tab=rs;
      console.log(this.tab);
    })

  }
  ngOnInit(): void {
    this.getAll();
  }

}
