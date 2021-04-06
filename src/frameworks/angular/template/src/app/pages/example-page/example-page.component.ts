import { Component } from '@angular/core';

import { ExampleService } from "../../services/example.service";

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent {
  exampleData = this.exampleService.getExampleData();
  items = this.exampleService.getItems();

  constructor(private exampleService: ExampleService) {}

  clearItems(): void {
    this.items = this.exampleService.clearItems();
  }
}
