import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username="";
  email!:any;
  numtel!:any;
  cin!:any;
  tabs:any=[]
  constructor(private KeycloakService: KeycloakService, private et: EtudiantService) { }
  getStudbyem(email: any) {
    this.et.getStudentByemail(email).subscribe(res => {
      
      this.tabs = res,
       console.log(res)
      
    this.username=this.tabs.username
   this.cin=this.tabs.cin;
   this.numtel=this.tabs.numtel
      })
  }


  async ngOnInit(): Promise<void> {

    console.log(this.KeycloakService.getUsername());
    // this.username = this.KeycloakService.getUsername();
    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;
    this.getStudbyem(this.email);
  }


}
