import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from 'src/app/resolvers/route-resolver.resolver';

@Component({
  selector: 'app-subclass',
  templateUrl: './subclass.component.html',
  styleUrls: ['./subclass.component.css']
})
export class SubclassComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
  }

}
