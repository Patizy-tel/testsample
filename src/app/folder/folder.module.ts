import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './Schedules/Schedules.component';
import { BookingsComponent } from './Bookings/Bookings.component';
import { ChatsComponent } from './chats/chats.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage ,
    HomeComponent,
    BookingsComponent ,
    ChatsComponent


  ],
  exports:[
    BookingsComponent ,
    ChatsComponent

  ]
})
export class FolderPageModule {}
