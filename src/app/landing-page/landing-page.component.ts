import { Component } from '@angular/core';
import {HeaderMenuComponent} from "../header-menu/header-menu.component";
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-landing-page',
  standalone: true,
    imports: [
        HeaderMenuComponent,
        RouterOutlet,
      RouterLink

    ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
