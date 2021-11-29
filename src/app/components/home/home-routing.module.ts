import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HazardmapComponent } from '../hazardmap/hazardmap.component';
import { WeatherComponent } from '../weather/weather.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'hazardmap', component: HazardmapComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
