import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RH } from 'src/app/Models/RH';
import { AdmincfService } from '../../admincf.service';

@Component({
  selector: 'app-update-rh',
  templateUrl: './update-rh.component.html',
  styleUrls: ['./update-rh.component.scss']
})
export class UpdateRhComponent implements OnInit {
  Username:any;
  emailRH:any;
  Numtel:any;
  Sexe:any;
  Diplome:any;
  AnExperience:any;
  Dateinscription:any;
  Cin:any;
  permis:any;
  Location:any;
  id=0
  rh=new RH(); 
  tab: any = []; 
  constructor(private sAdmin: AdmincfService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.id = this.route.snapshot.params['id'];
    this.sAdmin.getRHByID(this.id).subscribe((res) => {
      (this.tab = res), console.log(res), (this.Username = this.tab.username);
      this.emailRH = this.tab.emailRH;
      this.Numtel = this.tab.numtel;
      this.Sexe = this.tab.sexe;
      this.Diplome = this.tab.diplome;
      this.AnExperience = this.tab.anExperience;
      this.Dateinscription = this.tab.dateinscription;
      this.Cin = this.tab.cin;
      this.permis = this.tab.permis;
      this.Location = this.tab.location;
    });
  }
  up()
  {
  //this.rh.Cin=this.Cin
    let data : any = {
      "id":this.id,
      "username": this.Username,
      "emailRH": this.emailRH,
      "numtel": this.Numtel,
      "sexe": this.Sexe,
      "diplome":this.Diplome,
      "anExperience":this.AnExperience,
      "dateinscription":this.Dateinscription,
      "cin":this.Cin,
      "permis":this.permis,
      "location":this.Location
    }
    this.sAdmin.UpdateRH(data).subscribe((res) => {
      console.log(res);
    });}


    updateRh() {
      this.rh.id = this.id;
      this.rh.emailRH = this.tab.emailRH;
      this.rh.Numtel = this.tab.numtel;
      this.rh.Sexe = this.tab.sexe;
      this.rh.Diplome = this.tab.diplome;
      this.rh.AnExperience = this.tab.anExperience;
      this.rh.Dateinscription = this.tab.dateinscription;
      this.rh.Cin = this.tab.cin;
      this.rh.permis = this.tab.permis;
      this.rh.Location = this.tab.location;
      console.log(this.rh);
      this.sAdmin.UpdateRH(this.rh).subscribe((res) => {
        console.log(res);
      });
    }
  
}
