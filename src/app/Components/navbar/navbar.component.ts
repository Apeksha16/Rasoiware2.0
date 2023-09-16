import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
config:any={
  logoPath:'assets/rasoiware.png',
  links:[
    {
      name:'Home',
      path:'',
    },
    {
      name:'Shop',
      path:'',
    },
    {
      name:'Product',
      path:'',
    },
    {
      name:'Blog',
      path:'',
    },
    {
      name:'About',
      path:'',
    },
    {
      name:'Contact',
      path:'',
    },
  ],
}
}
