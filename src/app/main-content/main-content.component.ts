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
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Archibald",
      "Mon meilleur ami",
      "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      16,
      new Date() );
      this.mySnap.setLocation("3 mountain view");

      this.myOtherSnap = new FaceSnap(
        "OtherArchibald",
        "Mon meilleur ami",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        3,
        new Date() );

      this.myLastSnap = new FaceSnap(
          "LastArchibald",
          "Mon meilleur ami",
          "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
          12,
          new Date() );
  }

}



