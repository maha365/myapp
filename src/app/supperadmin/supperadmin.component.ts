import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { SupadminService } from './supadmin.service';

@Component({
  selector: 'app-supperadmin',
  templateUrl: './supperadmin.component.html',
  styleUrls: ['./supperadmin.component.scss']
})
export class SupperadminComponent implements OnInit {

  username = "";
  email!: any;
  roles!: any;
  tabs: any = [];


  constructor(private KeycloakService: KeycloakService, private et: SupadminService) { }

  url = "./assets/images/avatar2.png"

  getStudbyem(email: any) {
   /* this.et.getStudentByemail(email).subscribe(res => {
      
      this.tabs = res,
       console.log(res)
      
    this.username=this.tabs.username
    this.form.nom=this.tabs.formations.nomFormation
    console.log(this.form.nom)
      })*/
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

  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }


  }


}
