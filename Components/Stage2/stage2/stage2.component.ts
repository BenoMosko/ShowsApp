import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Service1Service } from 'src/app/Services/Service1/service1.service';

@Component({
  selector: 'app-stage2',
  templateUrl: './stage2.component.html',
  styleUrls: ['./stage2.component.css']
})
export class Stage2Component implements OnInit {

  constructor(private ar : ActivatedRoute, private http : HttpClient, private service : Service1Service, private router : Router) { }

  sub1 : Subscription = new Subscription();
  sub2 : Subscription = new Subscription();
  showId : string = "";
  show : any = {};


  ngOnInit(): void
  {
    this.sub1 = this.ar.params.subscribe(data =>
      {
        this.showId = data["id"];
        this.sub2 = this.http.get<any>("http://api.tvmaze.com/shows/" + this.showId).subscribe(result =>
        {
          this.show = result;
        })
      })
  }


  toTable()
  {
    this.router.navigate(["/stage3"]);
    sessionStorage.setItem('language', this.show.language);
    sessionStorage.setItem('genre', this.show.genre);
  }

  ngOnDestroy()
  {
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
  }

}
