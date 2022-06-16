import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Etudiant } from 'src/app/Models/Etudiant';
import { Formation } from 'src/app/Models/Formation';
import { RH } from 'src/app/Models/RH';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajout-etud',
  templateUrl: './ajout-etud.component.html',
  styleUrls: ['./ajout-etud.component.scss']
})
export class AjoutEtudComponent implements OnInit {

  formations!: Formation;
  ListFormation!: Formation[];
  Cin: any;
  Username: any;
  email: any;
  numtel: any;
  etd = new Etudiant();
  RH = new RH();
  /**photo:any="";**/
  id = 0
  photo = "photo"
  curmail!: any;
  msj = ''
  test!: boolean;
  color = '';
  numb: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];
  tabs: any = [];
  username = ""
  constructor(private KeycloakService: KeycloakService, private sRh: RhService) { }

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

  getStudbyem(email: any) {
    this.sRh.getRhByemail(email).subscribe(res => {

      this.tabs = res,
        console.log("aaa", res),
        console.log("zzz", this.tabs)
      this.username = this.tabs.username,
        console.log("ena RH : ", this.RH = this.tabs
        )

    })
  }



  ajout() {
    let data: any = {
      "cin": this.Cin,
      "username": this.Username,
      "email": this.email,
      "numtel": this.numtel,
      "photo": this.photo,
      "formations": this.formations,
      "rh": this.RH
    }
    this.sRh.CreateEtud(data).subscribe(res => console.log(res));
    console.log(data)
    this.test = true;
    this.msj = "Etudiant ajouté !"
  }

  async ngOnInit(): Promise<void> {
    this.sRh.getAllFormation().subscribe(res => { this.ListFormation = res, console.log(res) });

    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.curmail = userDetails.email;

    this.getStudbyem(this.curmail);
  }


}
