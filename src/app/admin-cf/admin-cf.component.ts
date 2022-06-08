import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-admin-cf',
  templateUrl: './admin-cf.component.html',
  styleUrls: ['./admin-cf.component.scss']
})
export class AdminCfComponent implements OnInit {

  email!:any;
  roles!:any;
  username!:any;
  constructor(private KeycloakService: KeycloakService) { }

  async ngOnInit(): Promise<void> {

    console.log(this.KeycloakService.getUsername());
     this.username = this.KeycloakService.getUsername();
    this.roles = this.KeycloakService.getUserRoles()[0];
    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;
  }



Logout(){
  this.KeycloakService.logout()
}
  url="./assets/images/avatar2.png"

  onSelectFile(e:any){
    if(e.target.files)
    {
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }


}
