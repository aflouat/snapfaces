import { Component, inject, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
constructor(private faceSnapService : FaceSnapService){}

  snaps!:FaceSnap[];

  ngOnInit(): void {
    this.snaps = this.faceSnapService.getSnaps();
   }

  

}
