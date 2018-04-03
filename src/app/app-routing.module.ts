import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyControlsComponent } from './internal-controls/key-controls/key-controls.component';
import { AddKeyControlComponent } from './internal-controls/key-controls/add-key-control/add-key-control.component';



const routes: Routes = [
  { path: '', redirectTo: 'keycontrol', pathMatch: 'full', },
  { path: 'keycontrol', component: KeyControlsComponent },
  { path: 'addkeycontrol', component: AddKeyControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
