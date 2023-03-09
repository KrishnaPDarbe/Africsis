import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AfricsisTodayComponent } from './components/africsis-today/africsis-today.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CounterCardsComponent } from './components/counter-cards/counter-cards.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ServicesComponent } from './components/services/services.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { GenericCardComponent } from './components/generic-card/generic-card.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AfricsisTodayComponent,
    CounterCardsComponent,
    PartnersComponent,
    ServicesComponent,
    ProgramsComponent,
    GenericCardComponent,
    SubscribeComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule,
    NgxUsefulSwiperModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent,FooterComponent,SubscribeComponent],
})
export class CoreModule {}
