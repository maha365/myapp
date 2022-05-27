import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ressource-humaine',
  templateUrl: './ressource-humaine.component.html',
  styleUrls: ['./ressource-humaine.component.scss']
})
export class RessourceHumaineComponent implements OnInit {


  msj="success"
  test:boolean=false;

  ngOnInit(): void {
  }
  url="./assets/images/avatar2.png"

  onSelectFile(e:any){
    if(e.target.files)
    {
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        this.test=true;
      }
    }
  }
  
}
