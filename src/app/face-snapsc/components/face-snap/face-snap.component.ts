import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit  {

  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService : FaceSnapsService, private router: Router){}

  buttonText!: string;

  ngOnInit() {
    this.buttonText='Oh Snap!'
  }

  onSnap(){
    if(this.buttonText=='Oh Snap!'){
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText='Oops, Snap!';
    }else{
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText='Oh Snap!';
    }
  }
  onViewFaceSnap():void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
