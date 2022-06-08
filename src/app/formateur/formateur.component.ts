import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.scss']
})
export class FormateurComponent implements OnInit {

  constructor(private KeycloakService: KeycloakService) { }
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
  ngOnInit(): void {
  }
  Logout(){
    this.KeycloakService.logout();
   
  }

}
