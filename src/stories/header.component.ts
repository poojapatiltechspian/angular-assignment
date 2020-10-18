import { Component } from '@angular/core';

@Component({
  selector: 'app-story-header',
  template: `<div class="navbar">
    <div class="tooltip">
      <span class="tooltiptext">Switch Theme</span><label class="switch"><input type="checkbox" id="darkTheme"> <span class="slider round"></span></label>
    </div>
  <a routerLink="./home" routerLinkActive="active">Home</a>
  <a routerLink="./crud-oprations" routerLinkActive="active">Crud Operations</a>
  <div class="dropdown">
      <button class="dropbtn">NgRx
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a routerLink="./product-list" routerLinkActive="active">Product List</a>
        <a routerLink="./add-product" routerLinkActive="active">Add Product</a>
      </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn">Practice Assignment
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a routerLink="./flex-Layout" routerLinkActive="active">Flexbox Layout</a>
      <a routerLink="./grid-layout" routerLinkActive="active">Grid Layout</a>
      <a routerLink="./ngrx-tutorial-example1" routerLinkActive="active">NgRx Example1</a>
      <a routerLink="./ngrx-tutorial-example2" routerLinkActive="active">NgRx Example2</a>

    </div>
  </div>
  <a class="align-right">Logout</a>
</div>`,
  styleUrls: ['./header.css'],
})
export default class HeaderStoryComponent {
  constructor(){}
}
