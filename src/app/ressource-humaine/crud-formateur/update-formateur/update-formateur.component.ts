import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formateur } from 'src/app/Models/Formateurs';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.scss']
})
export class UpdateFormateurComponent implements OnInit {

  Username:any;
  email:any;
  Numtel:any;
  Sexe:any;
  Diplome:any;
  AnExperience:any;
  Dateinscription:any;
  Cin:any;
  Location!:any;

  id=0
  formateur=new Formateur(); 
  tab: any = []; 
  constructor(private sRh: RhService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.id = this.route.snapshot.params['id'];
    this.sRh.getFormateurByID(this.id).subscribe((res) => {
      (this.tab = res), console.log(res), (this.Username = this.tab.username);
      this.email = this.tab.email;
      this.Numtel = this.tab.numtel;
      this.Sexe = this.tab.sexe;
      this.Diplome = this.tab.diplome;
      this.AnExperience = this.tab.anExperience;
      this.Dateinscription = this.tab.dateinscription;
      this.Cin = this.tab.cin;
      this.Location = this.tab.location;
      
    });
  }
  up()
  {
  //this.rh.Cin=this.Cin
    let data : any = {
      "id":this.id,
      "username": this.Username,
      "email": this.email,
      "numtel": this.Numtel,
      "sexe": this.Sexe,
      "diplome":this.Diplome,
      "anExperience":this.AnExperience,
      "dateinscription":this.Dateinscription,
      "cin":this.Cin, 
      "location":this.Location,
    
    }
    this.sRh.UpdateFromateur(data).subscribe((res) => {
      console.log(res);
    });}


    updateRh() {
      this.formateur.id = this.id;
      this.formateur.email = this.tab.email;
      this.formateur.Numtel = this.tab.numtel;
      this.formateur.Sexe = this.tab.sexe;
      this.formateur.Diplome = this.tab.diplome;
      this.formateur.AnExperience = this.tab.anExperience;
      this.formateur.Dateinscription = this.tab.dateinscription;
      this.formateur.Cin = this.tab.cin;
      this.formateur.Location = this.tab.location;
      
      console.log(this.formateur);
      this.sRh.UpdateFromateur(this.formateur).subscribe((res) => {
        console.log(res);
      });
    }
  
}
