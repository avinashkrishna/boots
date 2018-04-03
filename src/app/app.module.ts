import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InternalControlsComponent } from './internal-controls/internal-controls.component';
import { KeyControlsComponent } from './internal-controls/key-controls/key-controls.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AddKeyControlComponent } from './internal-controls/key-controls/add-key-control/add-key-control.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InternalControlsComponent,
    KeyControlsComponent,
    HeaderComponent,
    SideNavComponent,
    AddKeyControlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
