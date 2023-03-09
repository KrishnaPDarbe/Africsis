import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { CoreModule } from '../core/core.module';
import { LocationComponent } from './components/location/location.component';


@NgModule({
  declarations: [
    LocationComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
