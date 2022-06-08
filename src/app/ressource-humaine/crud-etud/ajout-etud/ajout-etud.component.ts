import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { Formation } from 'src/app/Models/Formation';
import { RhService } from '../../rh.service';

@Component({
  selector: 'app-ajout-etud',
  templateUrl: './ajout-etud.component.html',
  styleUrls: ['./ajout-etud.component.scss']
})
export class AjoutEtudComponent implements OnInit {

 formations!:Formation;
 ListFormation!: Formation[];
  Cin:any;
  Username:any;
  email:any;
  numtel:any;
   etd= new Etudiant();
  /**photo:any="";**/
id=0
photo="photo"

msj = ''
test!: boolean;
color = '';
numb: any[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', ','];

  constructor(private sRh:RhService) { }

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



ajout()
{
  
//this.etd.Cin=this.Cin
  let data : any = {
    "cin": this.Cin,
    "username": this.Username,
    "email": this.email,
    "numtel": this.numtel,
    "photo": this.photo,
    "formations": this.formations
  }
  this.sRh.CreateEtud(data).subscribe(res => console.log(res)) ;
  console.log(data)
  this.test=true;
  this.msj="Etudiant ajouté !"
}
  ngOnInit(): void {

    this.sRh.getAllFormation().subscribe(res => {this.ListFormation = res , console.log(res)}) ; 

  }

}
