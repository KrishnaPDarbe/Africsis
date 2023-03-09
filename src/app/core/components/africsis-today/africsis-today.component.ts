import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { SwiperOptions } from 'swiper';
import { AfricsisNews } from '../../model/arricsisNews';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'africsis-today',
  templateUrl: './africsis-today.component.html',
  styleUrls: ['./africsis-today.component.scss'],
})
export class AfricsisTodayComponent implements OnInit, AfterViewInit {
  @ViewChildren('africsisToday', { read: ElementRef })
  africsisToday: QueryList<ElementRef> | undefined;

  observer: any;
  config: SwiperOptions = {
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 50,
  };

  africsisNews: Array<AfricsisNews> | undefined;
  constructor(private _newService: NewsService) {}

  ngOnInit(): void {
    this._newService.getNewsData().subscribe((res) => {
      this.africsisNews = res;
    });
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    this.africsisToday?.changes.subscribe((d) => {

      if (d) {
        d._results?.forEach((element: { nativeElement: any; }) => {
          this.observer.observe(element.nativeElement);
        });

      }
    });
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
