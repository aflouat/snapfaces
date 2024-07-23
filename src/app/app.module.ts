import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {Router, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }
