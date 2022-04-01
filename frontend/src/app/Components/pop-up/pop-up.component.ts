import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  images: any;

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit(): void {
  }

  selectImage(event:any) {
    if(event.target.files.length >0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.images);

    this.http.post<any>('http://localhost:3000/file',formData).subscribe (
      (res: any) =>console.log(res),
      (err: any) =>console.log(err)
    );
  }

}
