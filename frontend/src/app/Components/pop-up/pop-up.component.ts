import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from "../../Services/shared.service";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  image;
  predictedTone;

  constructor(
    private http: HttpClient,
    private shared: SharedService
    ) { }

  ngOnInit(): void {
  }

  convertObjToJSon(res) {
    this.predictedTone = res
    this.predictedTone = JSON.stringify(this.predictedTone)
    this.predictedTone = this.predictedTone.slice(11,15);
    this.shared.setTone(this.predictedTone)
  }

  selectImage(event) {
    if(event.target.files.length >0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('image', this.image,this.image.name);

    this.http.post('http://127.0.0.1:5000/upload',formData).subscribe (
      (res) =>this.convertObjToJSon(res),
      (err) =>console.log(err),
      
      
      
    );
  }

}
