import { Component, OnInit } from '@angular/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listRestaurants } from '../../graphql/queries';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  restaurants: Array<any>;

  constructor() { }

  async ngOnInit() {
    const response = await API.graphql(graphqlOperation(listRestaurants));
    this.restaurants = (response as any).data.listRestaurants.items;
  }


}
