import { Component, inject, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from '../services/face-snaps.service';
import {HeaderMenuComponent} from "../header-menu/header-menu.component";
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent, HeaderMenuComponent,CommonModule, HttpClientModule],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
constructor(private faceSnapService : FaceSnapService){}

faceSnaps$!: Observable<FaceSnap[]>;

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapService.getSnaps();
   }



}
