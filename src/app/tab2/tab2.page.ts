import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createRestaurant } from '../../graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public createForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  async ngOnInit() {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
    // const response = await API.graphql(graphqlOperation(listRestaurants));
    // this.restaurants = (response as any).data.listRestaurants.items;
  }

  public async onCreate() {
    const name = this.createForm.get('name').value;
    const description = this.createForm.get('description').value;
    const city = this.createForm.get('city').value;

    const restaurant = { name, description, city };
    try {
      await API.graphql(graphqlOperation(createRestaurant, {
        input: restaurant
      }));
      console.log('item created!');
      // this.restaurants = [restaurant, ...this.restaurants];
      this.createForm.reset();
    }
    catch (e) {
      console.log('error creating restaurant...', e);
    }
  }
}
