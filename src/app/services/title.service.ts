import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

 private  headerData= {
      title:'Appointment App',
      discription: " blaagafafg fgadf"
  }

  getTitles(){
    return this.headerData.title;
  }
  setTitles(str:string){
    this.headerData.title = str;
  }
}
