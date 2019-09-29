import { Component, OnInit } from '@angular/core';
import { GithubFollowersService} from '../github-followers.service';
import { Observable } from 'rxjs';
import 'rxjs/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {
followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService ) { }

  ngOnInit() {
    Observable
    ([
    this.route.paramMap,
    this.route.queryParamMap
    ])
    .switchMap(combined => {
      // tslint:disable-next-line: prefer-const
      let id = combined[0].get('id');
      // tslint:disable-next-line: prefer-const
      let page = combined[1].get('page');


      return this.service.getAll();
    })
    .subscribe(followers => this.followers = followers);
  }

}
