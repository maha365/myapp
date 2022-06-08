import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-dashboard-etudiant',
  templateUrl: './dashboard-etudiant.component.html',
  styleUrls: ['./dashboard-etudiant.component.scss']
})
export class DashboardEtudiantComponent implements OnInit {
  tabs: any = [];
  username = "";
  email!: any;
  roles!: any;
nbrheurs!:any;
spec!:any;
prix!:any;
nomF="";
nomforma="";
  constructor(private KeycloakService: KeycloakService, private et: EtudiantService) { }

  getStudbyem(email: any) {
    this.et.getStudentByemail(email).subscribe(res => {
      
      this.tabs = res,
       console.log(res)
      
    this.username=this.tabs.username
    this.nomF=this.tabs.formations.nomFormation
    this.spec=this.tabs.formations.specialite
    this.prix=this.tabs.formations.prix;
    this.nomforma=this.tabs.formations.formateur.username
    this.nbrheurs=this.tabs.formations.nbreHeures
    console.log(this.nomF)
      })
  }


  async ngOnInit(): Promise<void> {

    console.log(this.KeycloakService.getUsername());
    // this.username = this.KeycloakService.getUsername();
    this.roles = this.KeycloakService.getUserRoles()[3]
    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;
    this.getStudbyem(this.email);
  }

}
