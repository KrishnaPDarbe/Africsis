import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerships',
  templateUrl: './partnerships.component.html',
  styleUrls: ['./partnerships.component.scss']
})
export class PartnershipsComponent implements OnInit,AfterViewInit {

  observer: any;

  constructor() {
    this.intersectionObserver();
   }

  ngOnInit(): void {
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
