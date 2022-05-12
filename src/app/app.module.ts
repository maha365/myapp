import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';  //accordion and accordion tab
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LoginFormComponent } from './login-form/login-form.component';
//import { SideBarComponent } from './side-bar/side-bar.component';
import { AdminCfComponent } from './admin-cf/admin-cf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdmincfService } from './admin-cf/admincf.service';
import { RessourceHumaineComponent } from './ressource-humaine/ressource-humaine.component';
import { RessourceHumaineModule } from './ressource-humaine/ressource-humaine.module';
//import { ImComponent } from './im/im.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    //SideBarComponent,
    AdminCfComponent,
    RessourceHumaineComponent,
   // ImComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    BrowserAnimationsModule, ButtonModule, MenubarModule, TabMenuModule,
    AccordionModule,MatToolbarModule,MatSidenavModule,MatIconModule,MatListModule,MatButtonModule,MatMenuModule,FormsModule,ReactiveFormsModule,HttpClientModule,RessourceHumaineModule
  ],
  providers: [AdmincfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
