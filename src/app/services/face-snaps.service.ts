import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import {snapType} from "../models/snap-type.typs";
import { BehaviorSubject, catchError, Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({'providedIn':'root'})

export class FaceSnapService{
  private faceSnapsUrl = 'assets/facesnaps.json';
  private snaps$ = new BehaviorSubject<FaceSnap[]>([]);
    
            constructor(private http: HttpClient) {
              this.loadInitialData().subscribe();
            }

            private loadInitialData(): Observable<FaceSnap[]> {
              return this.http.get<FaceSnap[]>(this.faceSnapsUrl).pipe(
                tap(snaps => this.snaps$.next(snaps)),
                catchError(error => {
                  console.error('Failed to load face snaps', error);
                  throw error;
                })
              );
            }
          
            public getSnaps(): Observable<FaceSnap[]> {
              return this.snaps$.asObservable();
            }

  /*  public getSnaps(): FaceSnap[]{
        return [...this.snaps];
    }*/
    snapById(faceSnapId: string, type:snapType ): void {
      const foundFaceSnap = this.getFaceSnapById(faceSnapId);
      foundFaceSnap.snap(type);
    }

  public getFaceSnapById(faceSnapId: string) {
    const snaps = this.snaps$.getValue();

    const foundFaceSnap = snaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }
}

