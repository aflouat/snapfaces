import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';


@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  //

  userHasSnapped!:boolean;
  snapButtonText!:string;

  ngOnInit(): void {

    this.userHasSnapped=false;
    this.snapButtonText="Oh Snap";
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

snap() {
  if(this.userHasSnapped){
    this.unSnap();
  }else{
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }

}

}
