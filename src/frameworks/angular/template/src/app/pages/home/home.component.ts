import { Component } from '@angular/core';

import { ExampleService } from "../../services/example.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  index = 1;

  addItem() {
    this.exampleService.addItem(this.index);
    this.index++;
  }

  constructor(private exampleService: ExampleService) {}
}
