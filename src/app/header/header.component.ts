import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { Title } from '../models/Title';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [TitleService]
})
export class HeaderComponent implements OnInit {
  titles:string = "";
  constructor(private titleService:TitleService) { 
    this.titles = this.titleService.getTitles();
  }

  ngOnInit() {
    
  }

}
