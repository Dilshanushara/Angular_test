import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  marks : number[]=[10,30,67,45,37,88]
  public getmarks():number[] {
      return this.marks;
  }

  public getMarksObs():Observable<number[]> {
    return of(this.marks);
  }
}