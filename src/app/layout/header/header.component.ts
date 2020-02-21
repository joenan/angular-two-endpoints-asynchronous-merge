import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  div:any;

  constructor() { }

  ngOnInit() {
    // this.div = document.querySelector('#menu-toggle');
  }

  toggle(e:any) {
    // console.log(e);
      var wrapper = document.querySelector('#wrapper');
      wrapper.classList.toggle("toggled");
    
  }

}
