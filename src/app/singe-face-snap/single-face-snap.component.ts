import {Component, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe} from '@angular/common';
import {FaceSnapService} from '../services/face-snaps.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;

  //
  constructor(private faceSnapService: FaceSnapService,
              private route: ActivatedRoute, private router: Router) {
  }

  userHasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.initUISnapButton();
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
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
      this.faceSnapService.snapById(id,'snap');
      this.snapAddedToUI();


    } else {
      this.faceSnapService.snapById(id,'unsnap');
      this.initUISnapButton();

    }

  }

  onGoBackToSnaps() {
    this.router.navigateByUrl(`/facesnaps`);

  }
}
