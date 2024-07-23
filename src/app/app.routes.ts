import { Routes } from '@angular/router';
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {AppComponent} from "./app.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SingleFaceSnapComponent} from "./singe-face-snap/single-face-snap.component";

export const routes: Routes = [
  { path: 'facesnaps/:id', component: SingleFaceSnapComponent },

  {
    path:'facesnaps',component:FaceSnapListComponent
  },
  {    path:'',component:LandingPageComponent}
];
