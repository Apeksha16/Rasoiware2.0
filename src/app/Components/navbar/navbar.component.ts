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
        name: 'Eng',
        path: '',
        isShow: false,
      },
      {
        name: 'Location',
        path: '',
        isShow: false,
      },
    ],
  };

  // isShow: boolean = false;

  onMouseOver(item: string, i: number) {
    if (item === 'Eng' || item === 'Location') {
      this.config.links[i].isShow = true;
    }
  }
}
