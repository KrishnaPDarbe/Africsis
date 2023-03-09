import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'africsis-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  programsData:any
  constructor(private service:NewsService) { }

  ngOnInit(): void {
    this.service.getProgramsData().subscribe(res=>{
      this.programsData=res;
    })
  }

}
