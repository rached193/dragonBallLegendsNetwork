import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'db-menu',
  templateUrl: './menu.template.html',
  styleUrls: ['./menu.style.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Output() filterChange = new EventEmitter();
  @Input() masterFilter;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  filterType(type) {

    if (this.masterFilter.type === type) {
      this.masterFilter.type = null;
    } else {
      this.masterFilter.type = type;
    }
    this.filterChange.emit(type);
  }
}

