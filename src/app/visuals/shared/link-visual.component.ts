import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Link, Node} from '../../d3/models';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
      [attr.x1]="link.source.x"
      [attr.y1]="link.source.y"
      [attr.x2]="link.target.x"
      [attr.y2]="link.target.y"
      style="stroke:rgb(255,0,0);stroke-width:2;"
    ></svg:line>
  `
})
export class LinkVisualComponent implements OnChanges, DoCheck, OnInit {


  constructor(private cd: ChangeDetectorRef) {
  }


  @Input('linkVisual') link: Link;
  source_x: number;
  target_x: number;


  ngOnInit() {
    this.source_x = this.link.source.x;
    this.target_x = this.link.target.x;
    this.source_x = this.link.source.x;
    this.target_x = this.link.target.x;

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck() {
    console.log(this.link.source.x + ' ' + this.source_x);
    if (this.link.source.x !== this.source_x) {
      this.source_x = this.link.source.x;
      this.cd.detectChanges();
    }


    if (this.link.target.x !== this.target_x) {
      this.target_x = this.link.target.x;
      this.cd.detectChanges();
    }
  }
}
