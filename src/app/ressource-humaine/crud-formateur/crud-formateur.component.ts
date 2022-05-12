import { Component, OnInit } from '@angular/core';
import { RhService } from '../rh.service';

@Component({
  selector: 'app-crud-formateur',
  templateUrl: './crud-formateur.component.html',
  styleUrls: ['./crud-formateur.component.scss']
})
export class CrudFormateurComponent implements OnInit {

  tab:any=[];

  constructor(private sRh:RhService) { }

  getAll(){
    this.sRh.getAllFormateur().subscribe(rs=>{
      this.tab=rs;
      console.log(this.tab);
    })

  }
  ngOnInit(): void {
    this.getAll();
  }

}
