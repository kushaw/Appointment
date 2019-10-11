import { HeaderData } from './../models/HeaderData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor() { }

  getTitles(){
   return HeaderData.data.title
  }
  setTitles(str:string){
    HeaderData.data.title = str;
  }
}
