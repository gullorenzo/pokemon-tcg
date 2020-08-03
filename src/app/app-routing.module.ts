import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PodemonDatailsComponent } from './podemon-datails/podemon-datails.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cards/:id', component: PodemonDatailsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


