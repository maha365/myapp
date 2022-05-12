import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-cf',
  templateUrl: './admin-cf.component.html',
  styleUrls: ['./admin-cf.component.scss']
})
export class AdminCfComponent implements OnInit {

  constructor() { }

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
      }
    }
  }
}
