import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './components/contact/contact.component';
import { PropertiesComponent } from './components/properties/properties.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/contacts' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'properties', component: PropertiesComponent },
  { path: '**', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
