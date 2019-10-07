import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {
  title = 'Application App';
  mainVar:any;
  constructor(private _appservices:AppService) { }

  ngOnInit() {
    this.mainVar = this._appservices.getvar();
    this.title =  this.mainVar.Title;
    console.log (this.mainVar);
  }
  

}
