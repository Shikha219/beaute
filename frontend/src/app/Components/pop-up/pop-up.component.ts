import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  image;

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  selectImage(event) {
    if(event.target.files.length >0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.image,this.image.name);

    this.http.post('http://127.0.0.1:5000/upload',formData).subscribe (
      (res) =>console.log(res),
      (err) =>console.log(err)
    );
  }

}
