import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ExampleService {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  clearItems() {
    this.items = [];
    return this.items;
  }

  getExampleData() {
    return this.http.get<{ id: number, description: string; price: number }[]>(
      "/assets/exampleData.json"
    );
  }

  constructor(private http: HttpClient) {}
}
