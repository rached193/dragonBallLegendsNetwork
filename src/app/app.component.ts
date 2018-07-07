import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  nodes = [{
    name: 'A',
    x: 200,
    y: 150
  }, {
    name: 'B',
    x: 140,
    y: 300
  }, {
    name: 'C',
    x: 300,
    y: 300
  }, {
    name: 'D',
    x: 300,
    y: 180
  }];

  links = [{
    source: 0,
    target: 1
  }, {
    source: 1,
    target: 2
  }, {
    source: 2,
    target: 3
  }];

}
