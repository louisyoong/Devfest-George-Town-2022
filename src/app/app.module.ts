import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './_layout/navbar/navbar.component';
import { HomeLayoutComponent } from './_layout/home-layout/home-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeLayoutComponent,
    HomepageComponent,
    FooterComponent,
    PartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
