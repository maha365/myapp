import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { RhService } from '../rh.service';

@Component({
  selector: 'app-profile-rh',
  templateUrl: './profile-rh.component.html',
  styleUrls: ['./profile-rh.component.scss']
})
export class ProfileRhComponent implements OnInit {

  constructor(private rh: RhService, private KeycloakService: KeycloakService,) { }
  tabs: any = [];
  username = ""
  permis = ""
  numtel = "";
  sexe = "";
  diplome = "";
  anExperince = ""
  cin = "";
  location = "";
  dateInscr = "";
  email!:any;
  getStudbyem(email: any) {
    this.rh.getRhByemail(email).subscribe(res => {

      this.tabs = res,
        console.log(res)

      this.username = this.tabs.username
      this.permis = this.tabs.permis
      this.numtel=this.tabs.numtel;
      this.sexe=this.tabs.sexe;
      this.diplome=this.tabs.diplome;
      this.cin=this.tabs.cin;
      this.location=this.tabs.location
      this.dateInscr=this.tabs.dateinscription
      this.anExperince=this.tabs.anExperience
    })
  }

  async ngOnInit(): Promise<void> {

    console.log(this.KeycloakService.getUsername());
    //   this.username=this.KeycloakService.getUsername();
    //this.roles = this.KeycloakService.getUserRoles()[3]
    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;

    this.getStudbyem(this.email);
  }

}
