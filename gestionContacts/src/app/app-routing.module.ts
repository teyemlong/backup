import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { SaabComponent } from './saab/saab.component';
import { AudiComponent } from './audi/audi.component';
const routes: Routes = [    
    { path: 'contactform', component: ContactFormComponent },
    { path: 'mercedes', component: MercedesComponent },
    { path: 'saab', component: SaabComponent }
    
    
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }