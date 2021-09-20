import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home' ,
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {initialNavigation: 'enabledBlocking'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }