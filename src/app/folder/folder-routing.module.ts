import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsComponent } from './Bookings/Bookings.component';
import { ChatsComponent } from './chats/chats.component';

import { FolderPage } from './folder.page';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'bookings',
    component:BookingsComponent }

    ,{
      path:'messages',
      component:ChatsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
