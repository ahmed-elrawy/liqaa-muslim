import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

// Component
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from './pages/about/about.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent

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
    path: 'teacher',
    component: TeacherComponent
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
