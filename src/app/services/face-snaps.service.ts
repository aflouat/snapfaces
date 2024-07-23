import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import {snapType} from "../models/snap-type.typs";

@Injectable({'providedIn':'root'})

export class FaceSnapService{
    private snaps:FaceSnap[]=[
        new FaceSnap(
        "Archibald",
        "Mon meilleur ami",
        "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        10,
        new Date() ),
        new FaceSnap(
          "Pelican",
          "Mon meilleur pelican",
          "https://cdn.pixabay.com/photo/2024/04/21/14/13/pelican-8710717_1280.jpg",
          253,
          new Date() ),
        new FaceSnap(
            "Lapin",
            "Mon lapin préféré",
            "https://cdn.pixabay.com/photo/2016/12/04/21/58/rabbit-1882699_1280.jpg",
            12,
            new Date() ).withLocation("3 mountain view")];
    public getSnaps(): FaceSnap[]{
        return [...this.snaps];
    }
    snapById(faceSnapId: string, type:snapType ): void {
      const foundFaceSnap = this.getFaceSnapById(faceSnapId);
      foundFaceSnap.snap(type);
    }

  public getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.snaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }
}

