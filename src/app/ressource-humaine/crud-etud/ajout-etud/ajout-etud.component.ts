import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajout-etud',
  templateUrl: './ajout-etud.component.html',
  styleUrls: ['./ajout-etud.component.scss']
})
export class AjoutEtudComponent implements OnInit {

 
  Cin:any;
  Username:any;
  email:any;
  numtel:any;
   etd= new Etudiant();
  /**photo:any="";**/
id=0
photo="photo"
  constructor(private sRh:RhService) { }

ajout()
{
//this.etd.Cin=this.Cin
  let data : any = {
    "cin": this.Cin,
    "username": this.Username,
    "email": this.email,
    "numtel": this.numtel,
    "photo": this.photo,
  }
  this.sRh.CreateEtud(data).subscribe(res => console.log(res)) ;
  console.log(data)
}
  ngOnInit(): void {
  }

}
