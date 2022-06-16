import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Formation } from 'src/app/Models/Formation';
import { RH } from 'src/app/Models/RH';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajout-formateur',
  templateUrl: './ajout-formateur.component.html',
  styleUrls: ['./ajout-formateur.component.scss']
})
export class AjoutFormateurComponent implements OnInit {
  formation !: Formation;
  Username!: any;
  email!: String;
  Numtel: any = [];
  Sexe!: any;
  Diplome!: any;
  AnExperience!: any;
  Dateinscription!: any;
  Cin: any = [];
  Location!: any;
  disab: boolean = false;
  id = 0
  msj = ''
  test!: boolean;
  color = '';
  numb: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  ListFormations !: Formation[];
  RH = new RH();
  curmail!:any;
  tabs:any=[]

  constructor(private sRh: RhService, private http: HttpClient, private router: Router,private KeycloakService: KeycloakService) { }

  keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.msj = "Inserer un numéro correct";

      this.color = "danger";

      return this.test = false;
    } else {
      return true;
    }
  }

  ajouteee() { console.log(this.formation) }

  async ngOnInit(): Promise<void> {

    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.curmail = userDetails.email;

    this.getStudbyem(this.curmail);
  }

  getStudbyem(email: any) {
    this.sRh.getRhByemail(email).subscribe(res => {

      this.tabs = res,
        console.log("aaa", res),
        console.log("zzz", this.tabs)
        console.log("ena RH : ", this.RH = this.tabs  )

    })
  }


  ajout() {
    if (!this.email.includes("@")) {
      this.msj = "Inserer un email correct";
      this.test = false;
      this.color = "danger";

    } else {
      //this.etd.Cin=this.Cin
      let data: any = {
        "username": this.Username,
        "email": this.email,
        "numtel": this.Numtel,
        "sexe": this.Sexe,
        "diplome": this.Diplome,
        "anExperience": this.AnExperience,
        "dateinscription": this.Dateinscription,
        "cin": this.Cin,
        "location": this.Location,
"rh":this.RH
      }

      this.sRh.CreateFormateur(data).subscribe(res => console.log(res));
      console.log(data)

      this.test = true;
      this.msj = "Formateur ajouter avec succe ! "
      // setTimeout(() => {
      //   this.router.navigate(['/listeFormateur']);
      // }, 1000);
    }
  }
}



