import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoundationComponent } from './Pages/foundation/foundation.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LipstickComponent } from './Pages/lipstick/lipstick.component';

const routes: Routes = [
  { path: "", component:HomePageComponent},
  { path: "foundation", component:FoundationComponent},
  { path: "lipstick", component:LipstickComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

