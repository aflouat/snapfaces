import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapListComponent } from '../face-snap-list/face-snap-list.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FaceSnapComponent, FaceSnapListComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  snaps!:FaceSnap[];

  

}



