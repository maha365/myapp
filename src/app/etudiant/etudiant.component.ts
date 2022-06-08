import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { EtudiantService } from './etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
  username = "";
  email!: any;
  roles!: any;
  tabs: any = [];

  form={nom:"",id:0}
nomform="";
  constructor(private KeycloakService: KeycloakService, private et: EtudiantService) { }
  url = "./assets/images/avatar2.png"

  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }


  }


  getStudbyem(email: any) {
    this.et.getStudentByemail(email).subscribe(res => {
      
      this.tabs = res,
       console.log(res)
      
    this.username=this.tabs.username
    this.form.nom=this.tabs.formations.nomFormation
    console.log(this.form.nom)
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

  Logout() {
    this.KeycloakService.logout();

  }
}
