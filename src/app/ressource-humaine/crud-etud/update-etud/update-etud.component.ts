import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from 'src/app/Models/Etudiant';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-update-etud',
  templateUrl: './update-etud.component.html',
  styleUrls: ['./update-etud.component.scss']
})
export class UpdateEtudComponent implements OnInit {

  Cin: any;
  Username: any;
  email: any;
  numtel: any;
  etd = new Etudiant();
  /**photo:any="";**/
  id = 0;
  photo = 'photo';
  tab: any = [];
  constructor(private sRh: RhService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.id = this.route.snapshot.params['id'];
    this.sRh.getEtudiantByID(this.id).subscribe((res) => {
      (this.tab = res), console.log(res), (this.Username = this.tab.username);
      this.email = this.tab.email;
      this.Cin = this.tab.cin;
      this.numtel = this.tab.numtel;
    });
  }
  updateEtudiant() {
    this.etd.id = this.id;
    this.etd.Cin = this.Cin;
    this.etd.Username = this.Username;
    this.etd.Email = this.email;
    this.etd.Numtel = this.numtel;
    console.log(this.etd);
    this.sRh.UpdateEtud(this.etd).subscribe((res) => {
      console.log(res);
    });
  }


  up()
{
//this.etd.Cin=this.Cin
  let data : any = {
    "id":this.id,
    "cin": this.Cin,
    "username": this.Username,
    "email": this.email,
    "numtel": this.numtel,
    "photo": this.photo,
  }
  this.sRh.UpdateEtud(data).subscribe((res) => {
    console.log(res);
  });}


}
