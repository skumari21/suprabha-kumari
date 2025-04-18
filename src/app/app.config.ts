import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '**',
    component: AppComponent
  }
]

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ],
};