import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';// NgbModule for @ng-bootstrap from https://ng-bootstrap.github.io/#/getting-started
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
