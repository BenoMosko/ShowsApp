import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stage3',
  templateUrl: './stage3.component.html',
  styleUrls: ['./stage3.component.css']
})
export class Stage3Component implements OnInit {

  constructor(private http : HttpClient, private router : Router) { }
  
  sub : Subscription = new Subscription();
  language : string = "";
  genre : string = "";
  tables : any[] = [];

  ngOnInit(): void
  {
    this.sub = this.http.get<any[]>("http://api.tvmaze.com/shows").subscribe(data =>
    {
      this.tables = data;
    })
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
