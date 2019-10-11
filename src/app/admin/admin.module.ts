import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
    //AadminroutingModule
    
  ],
  exports:[HomeComponent,AboutComponent,HeaderComponent,FooterComponent,ContactComponent]
})
export class AdminModule { }
