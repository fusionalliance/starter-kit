import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Page components
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { HomeComponent } from './pages/home/home.component';

// Components
import { TopNavigationComponent } from "./components/top-navigation/top-navigation.component";

// Services
import { ExampleService } from "./services/example.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExamplePageComponent,
    TopNavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
