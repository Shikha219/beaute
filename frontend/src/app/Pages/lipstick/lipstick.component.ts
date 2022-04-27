import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent implements OnInit {

  constructor(private shared: SharedService) { }
  fair = true
  dark = true
  mild = true
  tone: string
  title: string

  ngOnInit(): void {
    this.tone = this.shared.getTone()
    if(this.tone == null) {
      this.title = "Lipsticks"
    }else{
      this.title = "Lipsticks for You"
      if(this.tone == "fair") {
        this.dark = false
        this.mild = false
      }else if(this.tone == "mild") {
        this.dark = false
        this.fair = false
      }else if(this.tone == "dark") {
        this.fair = false
        this.mild = false
      }
    }
  }
}
