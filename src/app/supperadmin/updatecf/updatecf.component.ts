import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreFormation } from 'src/app/Models/CentreFormation';
import { SupadminService } from '../supadmin.service';

@Component({
  selector: 'app-updatecf',
  templateUrl: './updatecf.component.html',
  styleUrls: ['./updatecf.component.scss']
})
export class UpdatecfComponent implements OnInit {

  centreFormation!: CentreFormation;
  ListFormation!: CentreFormation[];

  id=0;
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
  specialite!: any;
  tabs: any = []
  constructor(private sup: SupadminService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];


   }

  getData() {
    this.sup.getcentreByID(this.id).subscribe((res) => {
      (this.tabs = res), 
      console.log(res), 
      (this.nomC = this.tabs.nomC);
      this.anCreation = this.tabs.anCreation;
      this.emailProCentre = this.tabs.emailProCentre;
      this.certifCentre = this.tabs.certifCentre;
      this.numtel = this.tabs.numtel;
      this.specialite = this.tabs.specialite;
      this.fondateur = this.tabs.fondateur;
      this.localC = this.tabs.localC;
      this.registreCommerce = this.tabs.registreCommerce;

    });
  }

  update()
  {
    this.centreFormation.id=this.id;
    this.centreFormation.nomC=this.nomC;
    this.centreFormation.Specialite=this.specialite;
    this.centreFormation.anCreation=this.anCreation;
    this.centreFormation.emailProCentre=this.emailProCentre;
    this.centreFormation.fondateur=this.fondateur;
    this.centreFormation.localC=this.localC;
    this.centreFormation.registreCommerce=this.registreCommerce;
    this.centreFormation.numtel=this.numtel;
    console.log(this.centreFormation);
    this.sup.UpdateCentre(this.centreFormation).subscribe((res) => {
      console.log(res);
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
    this.getData();

  }

}
