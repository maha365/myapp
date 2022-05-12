import { Component, OnInit } from '@angular/core';
import { AdminCfComponent } from '../../admin-cf.component';
import { AdmincfService } from '../../admincf.service';

@Component({
  selector: 'app-ajout-rh',
  templateUrl: './ajout-rh.component.html',
  styleUrls: ['./ajout-rh.component.scss']
})
export class AjoutRhComponent implements OnInit {
  Username!:any;
  emailRH!:any;
  Numtel!:any;
  Sexe!:any;
  Diplome!:any;
  AnExperience!:any;
  Dateinscription!:any;
  Cin!:any;
  permis!:any;
  Location!:any;
  id=0

  constructor(private sAdmin:AdmincfService) { }

  ngOnInit(): void {
  }
  ajout()
{
//this.etd.Cin=this.Cin
  let data : any = {
    "username": this.Username,
    "emailRH": this.emailRH,
    "numtel": this.Numtel,
    "sexe": this.Sexe,
    "diplome":this.Diplome,
    "anExperience":this.AnExperience,
    "dateinscription":this.Dateinscription,
    "cin":this.Cin,
    "permis":this.permis,
    "location":this.Location
    
  }
  this.sAdmin.CreateRH(data).subscribe(res => console.log(res)) ;
  console.log(data)
}

}
