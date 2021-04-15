import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'example-page', component: ExamplePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
