import { NgModule } from '@angular/core';
import { CustomPreloadService } from './custom-preload.service';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';

const routes: Routes = [
  {
    path : "home",
    loadChildren : () => import(`./home/home.module`).then(m => m.HomeModule)
  },
  {
    path : "employee",
    loadChildren : () => import(`./lazy/lazy.module`).then(m => m.LazyModule)
  },
  {
    path : "student",
    data : { preload : true },
    loadChildren : () => import(`./student/student.module`).then(m => m.StudentModule)
  },
  {
    path : "**",
    redirectTo : "home"
  }
];

@NgModule({
  //Preloading
  // imports: [RouterModule.forRoot(routes , {preloadingStrategy : PreloadAllModules })],

  //NoPreloading
  // imports: [RouterModule.forRoot(routes , {preloadingStrategy : NoPreloading })],

  //create a custom preLoading
  imports: [RouterModule.forRoot(routes , {preloadingStrategy : CustomPreloadService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
