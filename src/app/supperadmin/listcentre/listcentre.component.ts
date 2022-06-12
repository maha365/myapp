import { Component, OnInit } from '@angular/core';
import { SupadminService } from '../supadmin.service';

@Component({
  selector: 'app-listcentre',
  templateUrl: './listcentre.component.html',
  styleUrls: ['./listcentre.component.scss']
})
export class ListcentreComponent implements OnInit {
tabs:any=[];

  constructor(private cfs:SupadminService) { }

  getAll()
  {
    this.cfs.getAllCentre().subscribe(res=>{
      this.tabs=res;
      console.log(res)
    })
  }
  ngOnInit(): void {
    this.getAll()
  }

}
