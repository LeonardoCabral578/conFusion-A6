import { Routes } from '@angular/router';

import { MenuComponent } from '../components/menu/menu.component';
import { DishdetailComponent } from '../components/dishdetail/dishdetail.component';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'aboutus', component: AboutComponent },
  { path: 'dishdetail/:id', component: DishdetailComponent },
  { path: 'contactus', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];