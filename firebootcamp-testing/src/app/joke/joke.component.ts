import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';
@Component({
  selector: 'app-joke',
  template: `
    <h1>{{title}}</h1>
    <div class="well">
      <p [innerHtml]="joke"></p>
      <button class="btn btn-success" (click)="getJoke()">Get next     joke</button>
    </div>
  `,
})
export class JokeComponent implements OnInit {
  joke: string;
  title = 'Chuck Norris Jokes';

  constructor(
    private jokeService: JokeService
  ) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke()
    .subscribe(joke => {
      console.log('got joke', joke);
      this.joke = joke.value.joke;
    });
  }

}
