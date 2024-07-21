import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit{
  snaps!:FaceSnap[];
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit(): void {
    this.snaps = [ 
      new FaceSnap(
      "Archibald",
      "Mon meilleur ami",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      10,
      new Date() ),
      new FaceSnap(
        "Pelican",
        "Mon meilleur ami",
        "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
        3,
        new Date() ),
      new FaceSnap(
          "Lapin",
          "Mon meilleur ami",
          "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_1280.jpg",
          12,
          new Date() )];
          this.snaps[1].setLocation("3 mountain view"); 
  }

}



