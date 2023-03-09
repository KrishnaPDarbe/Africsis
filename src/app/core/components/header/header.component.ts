import { Component, HostListener } from '@angular/core';
declare const window: any;

@Component({
  selector: 'africsis-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset >= 120) {
      document.querySelectorAll('header').forEach((element) => {
        element.classList.add('text-smaller');
      });
    } else {
      document.querySelectorAll('header').forEach((element) => {
        element.classList.remove('text-smaller');
      });
    }
  }
}
