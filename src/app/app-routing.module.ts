import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@views/public/landing/landing.component';
import { ListComponent } from '@views/public/list/list.component';

const routes: Routes = [
  { 
    path:'', component: LandingComponent
  },
  {
    path:'lista', component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
