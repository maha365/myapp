import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Models/Formateurs';
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

  msj = ''
  test!: boolean;
  color = '';
  numb: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];

  constructor(private sRh: RhService , private router: Router) { }

  ngOnInit(): void {
    this.sRh.getAllFormateur().subscribe(res => this.ListFormateurs = res , ex => console.log(ex)) ; 
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
        "formateur": this.formateur
       


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
