import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HazardmapComponent } from './components/hazardmap/hazardmap.component';
import { LoginComponent } from './components/login/login.component';
import { WeatherComponent } from './components/weather/weather.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel} from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    WeatherComponent,
    HazardmapComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatLabel,
    MatError

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
