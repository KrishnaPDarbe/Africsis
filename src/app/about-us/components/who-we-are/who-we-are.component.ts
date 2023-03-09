import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {

  @ViewChildren('africsisToday', { read: ElementRef })
  africsisToday: QueryList<ElementRef> | undefined;

  observer: any;

  constructor() { }

  ngOnInit(): void {
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
   const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((e1)=>this.observer.observe(e1))
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('appear')
        }else{
          entry.target.classList.remove('appear')
        }
      })
    }, options);
  }

}
