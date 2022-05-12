import { Component, OnInit } from '@angular/core';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})
export class AjoutFormateurComponent implements OnInit {

  Username!:any;
  email!:any;
  Numtel!:any;
  Sexe!:any;
  Diplome!:any;
  AnExperience!:any;
  Dateinscription!:any;
  Cin!:any;
  Location!:any;
 
  id=0

  constructor(private sRh:RhService) { }

  ngOnInit(): void {
  }
  ajout()
{
//this.etd.Cin=this.Cin
  let data : any = {
    "username": this.Username,
    "email": this.email,
    "numtel": this.Numtel,
    "sexe": this.Sexe,
    "diplome":this.Diplome,
    "anExperience":this.AnExperience,
    "dateinscription":this.Dateinscription,
    "cin":this.Cin,
    "location":this.Location,
    
    
  }
  this.sRh.CreateFormateur(data).subscribe(res => console.log(res)) ;
  console.log(data)
}

}



