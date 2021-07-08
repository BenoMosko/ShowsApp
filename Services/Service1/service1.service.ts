import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from 'src/app/Classes/Show/show';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http : HttpClient) { }

  obj : any = {};

  getShows()
  {
    return this.obj;
  }
}
