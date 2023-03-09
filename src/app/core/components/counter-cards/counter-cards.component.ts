import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AfricsisNews } from '../../model/arricsisNews';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'africsis-counter-cards',
  templateUrl: './counter-cards.component.html',
  styleUrls: ['./counter-cards.component.scss']
})
export class CounterCardsComponent implements OnInit,AfterViewInit {

  @ViewChildren('counterCard', { read: ElementRef })
  counterCard: QueryList<ElementRef> | undefined;
  countercardData: any | undefined;
  observer: any;

  constructor(private _newService: NewsService) {}

  ngOnInit(): void {
    this._newService.getCounterData().subscribe((res) => {
      this.countercardData = res;
    });
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    this.counterCard?.changes.subscribe((d) => {

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
