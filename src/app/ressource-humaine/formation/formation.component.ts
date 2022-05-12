import { Component, OnInit } from '@angular/core';
import { RhService } from '../rh.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  tab:any=[];

  constructor(private sRh:RhService) { }

  getAll(){
    this.sRh.getAllFormation().subscribe(rs=>{
      this.tab=rs;
      console.log(this.tab);
    })

  }
  ngOnInit(): void {
    this.getAll();
  }


}
