import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Formateur } from 'src/app/Models/Formateurs';
import { RH } from 'src/app/Models/RH';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajouformation',
  templateUrl: './ajouformation.component.html',
  styleUrls: ['./ajouformation.component.scss']
})
export class AjouformationComponent implements OnInit {
  formateur !: Formateur ; 
  ListFormateurs !: Formateur[] ;
  nomFormation!: any;
  Ddebut!: any;
  Dfin!: any;
  Prix!: any;
  nbreHeures!: any;
  specialite!: any;
  Certif!: any;
  id = 0;
  RH = new RH();
tabs:any=[]
  msj = ''
  test!: boolean;
  color = '';
  numb: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];
  curmail!:any;
  constructor(private sRh: RhService , private router: Router,private KeycloakService: KeycloakService) { }

  async ngOnInit(): Promise<void> {
    this.sRh.getAllFormateur().subscribe(res => this.ListFormateurs = res , ex => console.log(ex)) ; 

    let userDetails = await this.KeycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.curmail = userDetails.email;

    this.getStudbyem(this.curmail);
  }


  
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
        console.log("ena RH : ", this.RH = this.tabs  )

    })
  }


  ajout() {

      //this.etd.Cin=this.Cin
     

      let data: any = {
        "nomFormation": this.nomFormation,
        "ddebut": this.Ddebut,
        "dfin": this.Dfin,
        "prix": this.Prix,
        "nbreHeures": this.nbreHeures,
        "specialite": this.specialite,
        "certif": this.Certif,
        "formateur": this.formateur,
        "rh":this.RH


      }
      this.sRh.CreateFormation(data).subscribe(res => console.log(res));
      console.log(data)
      this.test=true;
      this.msj="Formation modifier avec succe ! "
      setTimeout(() =>{
        this.router.navigate(['/listeFormation']);
      }, 1000);

  }
}
