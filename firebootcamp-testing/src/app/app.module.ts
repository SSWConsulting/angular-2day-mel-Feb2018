import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { JokeComponent } from './joke/joke.component';
import { HttpClientModule } from '@angular/common/http';
import { JokeService } from './joke/joke.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ JokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
