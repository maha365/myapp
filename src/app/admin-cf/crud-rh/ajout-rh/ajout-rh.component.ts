import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { AdminCfComponent } from '../../admin-cf.component';
import { AdmincfService } from '../../admincf.service';

@Component({
  selector: 'app-ajout-rh',
  templateUrl: './ajout-rh.component.html',
  styleUrls: ['./ajout-rh.component.scss']
})
export class AjoutRhComponent implements OnInit {
  Username!: any;
  emailRH!: any;
  Numtel!: any;
  Sexe!: any;
  Diplome!: any;
  AnExperience!: any;
  Dateinscription!: any;
  Cin!: any;
  permis!: any;
  Location!: any;
  id = 0
  msjErr = "";
  msErr: boolean = false;
  succ: boolean = false;
  ListMail!:any;
  
  constructor(private sAdmin: AdmincfService, private KeycloakService: KeycloakService) { }

  ngOnInit(): void {
  }
  ajout() {
    var numbers = new RegExp(/^[0-9]+$/);
    var test = '@';

    if (this.Username == null || this.emailRH == null || this.Numtel == null || this.Sexe == null || this.Diplome == null || this.AnExperience == null || this.Dateinscription == null || this.Cin == null || this.permis == null || this.Location == null) {
      this.msjErr = "Tous les champs sont obligatoires";
      this.msErr = true;
    } else {

      let data: any = {
        "username": this.Username,
        "emailRH": this.emailRH,
        "numtel": this.Numtel,
        "sexe": this.Sexe,
        "diplome": this.Diplome,
        "anExperience": this.AnExperience,
        "dateinscription": this.Dateinscription,
        "cin": this.Cin,
        "permis": this.permis,
        "location": this.Location

      }
      this.sAdmin.CreateRH(data).subscribe(res => console.log(res));
      console.log(data)
      this.msjErr = "Success";
      this.succ = true;

    }

  }
}
