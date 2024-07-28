import {snapType} from "./snap-type.typs";

export class FaceSnap {
  location?:string;
  id: string;

    constructor(
      public title: string,
        public description:string,
        public imageUrl:string,
        public snaps:number,
        public createdAt:Date
    ){
      this.id = crypto.randomUUID().substring(0, 8);

    }
    addSnap(): void {
        this.snaps++;
      }

      removeSnap(): void {
        this.snaps--;
      }
      setLocation(_location : string ){
        this.location=_location;
      }
      withLocation(_location : string): FaceSnap{
        this.setLocation(_location);
        return this;
      }
      snap(type : snapType):void{
      if(type==='snap'){
        this.addSnap();
      }else if(type==='unsnap'){
        this.removeSnap();
      }
      }
}
