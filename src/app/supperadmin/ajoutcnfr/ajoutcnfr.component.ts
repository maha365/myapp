import { Component, OnInit } from '@angular/core';
import { CentreFormation } from 'src/app/Models/CentreFormation';
import { SupadminService } from '../supadmin.service';

@Component({
  selector: 'app-ajoutcnfr',
  templateUrl: './ajoutcnfr.component.html',
  styleUrls: ['./ajoutcnfr.component.scss']
})
export class AjoutcnfrComponent implements OnInit {

  centreFormation!: CentreFormation;
  ListFormation!: CentreFormation[]

  nomC!: String;
  anCreation!: String;
  emailProCentre!: String;
  certifCentre!: String;
  localC!: String;
  //photo!: String;
  fondateur!: String;
  numtel!: String;
  registreCommerce!: String;
  msj = ''
  test!: boolean;
  specialite!:any;
  constructor(private sup: SupadminService) { }

  ajout() {
    let data: any = {
      "nomC": this.nomC,
      "anCreation": this.anCreation,
      "emailProCentre": this.emailProCentre,
      "localC": this.localC,
      "fondateur": this.fondateur,
      "numtel": this.numtel,
      "registreCommerce": this.registreCommerce,
      "specialite":this.specialite
    }
    this.sup.CreateCentre(data).subscribe(res =>{ console.log(res)
      this.test=true;
      this.msj="Centre des formations ajouté !"
    });
   
  
}
    
keyPressNumbers(event: any) {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    this.msj = "Inserer un numéro correct";


    return this.test = false;
  } else {
    return true;
  }
}


  ngOnInit(): void {
  }

}
