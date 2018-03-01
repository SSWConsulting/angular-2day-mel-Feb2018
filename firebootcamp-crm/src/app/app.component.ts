import { Component } from '@angular/core';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fbc';

valueChanged(event) {
  console.log('value changed');
  this.title = event.target.value;
}

}
