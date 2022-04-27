import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  predictedTone:string

  constructor() { }
  setTone(predictedTone) {
    this.predictedTone = predictedTone
  }

  getTone() {
    return this.predictedTone
  }
}
