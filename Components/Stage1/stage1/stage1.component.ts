import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Show } from 'src/app/Classes/Show/show';
import { Service1Service } from 'src/app/Services/Service1/service1.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stage1',
  templateUrl: './stage1.component.html',
  styleUrls: ['./stage1.component.css']
})
export class Stage1Component implements OnInit {

  constructor(private service : Service1Service, private router : Router, private http : HttpClient) { }

  sub : Subscription = new Subscription();
  shows : any[] = [];
  selectedShowId : string = ""; 

  ngOnInit(): void
  {
    this.sub = this.http.get<any[]>("http://api.tvmaze.com/shows").subscribe(data =>
    {
      this.shows = data;
    })
  }

  select(id : string)
  {
    this.router.navigate(["/stage2/" + id]);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
