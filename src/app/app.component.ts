import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  allownav: boolean;
  constructor(
    private route: Router
  ) {}
  checkOutRoute: boolean;

  ngOnInit(): void {
    this.allownav = this.route.url === '/' ? false : true;
    console.log(this.route.url);
  }
}
