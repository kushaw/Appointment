import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public mainVar ={
    "Title":"Application App",
    "TagLine":"Make appointment easy"
  };
  constructor() { }

  getvar(){
    return this.mainVar;
  }


}
