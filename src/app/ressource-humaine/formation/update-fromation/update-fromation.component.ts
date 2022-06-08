import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/Models/Formateurs';
import { Formation } from 'src/app/Models/Formation';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-update-fromation',
  templateUrl: './update-fromation.component.html',
  styleUrls: ['./update-fromation.component.scss']
})
export class UpdateFromationComponent implements OnInit {
  formateur !: Formateur ; 
  ListFormateurs !: Formateur[] ;

  test:boolean=false;
  msj="";
  
  nomFormation:any;
  Ddebut:any;
  Dfin:any;
  Prix:any;
  nbreHeures:any;
  specialite:any;
  Certif:any;
  formation = new Formation();
  id=0;
  tab: any = []; 
//  formateur !: Formateur ; 
//  ListFormateurs !: Formateur[] ;
  constructor(private sRh: RhService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getData();
  this.sRh.getAllFormateur().subscribe(res => this.ListFormateurs = res , ex => console.log(ex)) ; 

  }
  getData() {
    this.id = this.route.snapshot.params['id'];
    this.sRh.getFormationByID(this.id).subscribe((res) => {
      (this.tab = res), console.log(res), (this.nomFormation= this.tab.nomFormation);
      this.Ddebut = this.tab.ddebut;
      this.Dfin = this.tab.dfin;
      this.Prix = this.tab.prix;
      this.nbreHeures = this.tab.nbreHeures;
      this.specialite = this.tab.specialite;
      this.Certif = this.tab.certif;
      this.formateur= this.tab.formateur;
    });
  }
 
    updateFormation() {
      this.formation.id = this.id;
      this.formation.nomFormation = this.nomFormation;
      this.formation.Ddebut = this.Ddebut;
      this.formation.Dfin = this.Dfin;
      this.formation.Prix = this.Prix;
      this.formation.nbreHeures = this.nbreHeures;
      this.formation.specialite = this.specialite;
      this.formation.Certif = this.Certif;
      console.log(this.formation);
      this.sRh.UpdateFromation(this.formation).subscribe((res) => {
        console.log(res);
      });
    }


    
   up()
  {
  //this.rh.Cin=this.Cin
    let data : any = {
      "id":this.id,
      "nomFormation": this.nomFormation,
      "ddebut": this.Ddebut,
      "dfin": this.Dfin,
      "prix": this.Prix,
      "nbreHeures":this.nbreHeures,
      "specialite":this.specialite,
      "certif":this.Certif,
      "formateur": this.formateur
    }
    this.sRh.UpdateFromation(data).subscribe((res) => {
      console.log(res);

      this.test=true;
      this.msj="Formation modifier avec succe ! "
      setTimeout(() =>{
        this.router.navigate(['/listeFormation']);
      }, 1000);
    });}

}


