import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { EtudiantService } from 'src/app/etudiant/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';
import { Formateur } from 'src/app/Models/Formateurs';
import { Formation } from 'src/app/Models/Formation';
import { FormateurServiceService } from '../formateur-service.service';

@Component({
  selector: 'app-ajout-seance',
  templateUrl: './ajout-seance.component.html',
  styleUrls: ['./ajout-seance.component.scss']
})
export class AjoutSeanceComponent implements OnInit {
  dateSeance!: Date;
  test!: boolean;
  documents!: FileList;
  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;
  acceptedFiles: string = ".pdf, .jpg, .png, .doc, .docx, .xls, .xlsx, .csv";
  path: any = []
  tabFormation:any=[]
  tabformateur:any=[]
  nomSeance!: any;
  //documents=""
  msj = ''
  email!: any;
  //-----------------------------------------------------------//

  Formateur= new Formateur();
  Etudiant = new Etudiant();
  Formation= new Formation();

  //----------------------------------------------------------------//
  constructor(private sr: FormateurServiceService, private keycloakService: KeycloakService , private etud:EtudiantService,  ) { }
  selectFile(event: any) {
    this.documents = event.target.files;
  }

  public onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  getFormateurbyEmail(email:any)
  {
    this.sr.getFormateurByemail(email).subscribe(res=>{this.tabformateur=res
      console.log("Formateur: ",res)

    })
  }
  getformatiobbyFormateur(formateur:any)
  {

    this.sr.FormationByFormateur(formateur).subscribe(res=>{
      this.tabFormation=res
      console.log("Formation by fomateur: ",res)
    })
  }

  Ajouter() {

    // const imageFormData = new FormData();
    // imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);

    let data: any = {
      "nomSeance": this.nomSeance,
      "dateSeance": this.dateSeance,
      "documents": this.documents,
      "formations":this.Formation,
      "etudiant":this.Etudiant,
      "formateur":this.Formateur
    }
    this.sr.CreateCentre(data).subscribe(res => console.log(res));
    console.log(data)
    this.test = true;
    this.msj = "Seance ajouté !"

  }


  async ngOnInit(): Promise<void> {

    console.log(this.keycloakService.getUsername());

    let userDetails = await this.keycloakService.loadUserProfile();
    console.log(userDetails.email);
    this.email = userDetails.email;
this.getFormateurbyEmail(this.email)
    console.log(this.email)
   this.getformatiobbyFormateur(this.tabformateur);
  }
}
