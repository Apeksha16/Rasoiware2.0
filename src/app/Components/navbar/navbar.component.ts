import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  config: any = {
    logoPath: 'assets/rasoiware.png',
    links: [
      {
        name: 'Home',
        path: '',
        isShow: false,
      },
      {
        name: 'Shop',
        path: '',
        isShow: false,
      },
      {
        name: 'Product',
        path: '',
        isShow: false,
      },
      {
        name: 'Blog',
        path: '',
        isShow: false,
      },
      {
        name: 'About',
        path: '',
        isShow: false,
      },
      {
        name: 'Contact',
        path: '',
        isShow: false,
      },
    ],
  };

  // isShow: boolean = false;

  onMouseOver(item: string, i: number) {
    if (item === 'Shop' || item === 'Product' || item === 'Home') {
      this.config.links[i].isShow = true;
    }
  }
}
