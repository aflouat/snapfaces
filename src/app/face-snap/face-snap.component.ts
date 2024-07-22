import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe} from '@angular/common';
import {FaceSnapService} from '../services/face-snaps.service';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  //
  constructor(private faceSnapService: FaceSnapService) {
  }

  userHasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.initUISnapButton();
  }

  private initUISnapButton() {
    this.userHasSnapped = false;
    this.snapButtonText = "Oh Snap";
  }


  snapAddedToUI() {
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }


  onSnap(id: string) {
    this.userHasSnapped = !this.userHasSnapped;

    if (this.userHasSnapped) {
      this.faceSnapService.addSnapToFaceById(id);
      this.snapAddedToUI();


    } else {
      this.faceSnapService.removeSnapToFaceById(id);
      this.initUISnapButton();

    }

  }

}
