import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { RhService } from './rh.service';

@Component({
  selector: 'app-ressource-humaine',
  templateUrl: './ressource-humaine.component.html',
  styleUrls: ['./ressource-humaine.component.scss']
})
export class RessourceHumaineComponent implements OnInit {

  constructor(private KeycloakService: KeycloakService, private rh: RhService) { }
  msj = "success"
  test: boolean = false;
  username = "";
  email!: any;
  roles!: any;
  async ngOnInit(): Promise<void> {

    console.log(this.KeycloakService.getUsername());
    //   this.username=this.KeycloakService.getUsername();
    this.roles = this.KeycloakService.getUserRoles()[3]
    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;

    this.getStudbyem(this.email);
  }


  Logout() {
    this.KeycloakService.logout();

  }
  url = "./assets/images/avatar2.png"

  tabs: any = [];
  getStudbyem(email: any) {
    this.rh.getRhByemail(email).subscribe(res => {

      this.tabs = res,
        console.log("aaa",res),
console.log("zzz",this.tabs.username)
      this.username = this.tabs.username
    })
  }






  onSelectFile(e: any) {
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.test = true;
      }
    }
  }



}
