import { Component, OnInit } from '@angular/core';
import { RhService } from '../rh.service';

@Component({
  selector: 'app-crud-etud',
  templateUrl: './crud-etud.component.html',
  styleUrls: ['./crud-etud.component.scss']
})
export class CrudEtudComponent implements OnInit {

  tab:any=[];

  constructor(private sRh:RhService) { }

  getAll(){
    this.sRh.getAllEtudiant().subscribe(rs=>{
      this.tab=rs;
      console.log(this.tab);
    })
  }
  ngOnInit(): void {
    this.getAll();
  }
}
