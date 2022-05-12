import { Component, OnInit } from '@angular/core';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajouformation',
  templateUrl: './ajouformation.component.html',
  styleUrls: ['./ajouformation.component.scss']
})
export class AjouformationComponent implements OnInit {
  nomFormation!:any;
  Ddebut!:any;
  Dfin!:any;
  Prix!:any;
  nbreHeures!:any;
  specialite!:any;
  Certif!:any;
  id=0;
  constructor(private sRh:RhService) { }

  ngOnInit(): void {
  }
  ajout()
  {
  //this.etd.Cin=this.Cin
    let data : any = {
      "nomFormation": this.nomFormation,
      "ddebut": this.Ddebut,
      "dfin": this.Dfin,
      "prix": this.Prix,
      "nbreHeures":this.nbreHeures,
      "specialite":this.specialite,
      "certif":this.Certif,
     
      
    }
    this.sRh.CreateFormation(data).subscribe(res => console.log(res)) ;
    console.log(data)
  }
}
