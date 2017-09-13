import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-id-view',
  templateUrl: './id-view.component.html',
  styleUrls: ['./id-view.component.sass']
})
export class IdViewComponent implements OnInit {

  public id: number;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => { 
        this.id = +params['id']; 
    });
}

}
