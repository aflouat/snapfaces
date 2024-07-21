import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from "./main-content/main-content.component";
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HttpErrorResponse } from '@angular/common/http';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainContentComponent,SideMenuComponent,HeaderMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
 
  title = 'snapface 2';
}
