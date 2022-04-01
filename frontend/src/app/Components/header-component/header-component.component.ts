import { Component, OnInit } from '@angular/core';
import { faHome,faUser,faHeart,faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faHeart = faHeart;
  faShoppingBag = faShoppingBag;

  constructor() { }

  ngOnInit(): void {
  }

}
