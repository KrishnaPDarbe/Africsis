import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'africsis-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit,AfterViewInit {


  @ViewChildren('servicesCard', { read: ElementRef })
  servicesCard: QueryList<ElementRef> | undefined;
  observer: any;
  services:any;
  constructor(private readonly service:NewsService) { }

  ngOnInit(): void {
    this.service.getServicesDate().subscribe(res=>{
      this.services=res;
    })
    this.intersectionObserver();
  }

  ngAfterViewInit(): void {
    this.servicesCard?.changes.subscribe((d) => {

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
