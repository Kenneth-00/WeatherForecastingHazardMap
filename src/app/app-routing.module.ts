import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazardmapComponent } from './components/hazardmap/hazardmap.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  {
    path: 'weathermap', component: LoginComponent,
    children: [
      {
        path: 'signup', component: SignupComponent
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'weather', component: WeatherComponent
      },
      {
        path: 'hazardmap', component: HazardmapComponent
      }
    ]
  },
  {path: '', redirectTo: 'weathermap', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
