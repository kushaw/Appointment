import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  mainVar:any;
  constructor(private _appservices:AppService) { }

  ngOnInit() {
    this.mainVar = this._appservices.getvar();
  }

}
