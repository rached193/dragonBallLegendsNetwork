import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Link, Node} from '../../d3/models';

@Component({
  selector: '[linkVisual]',
  // template: `
  //   <svg:line
  //     [attr.x1]='link.source.x'
  //     [attr.y1]='link.source.y'
  //     [attr.x2]='link.target.x'
  //     [attr.y2]='link.target.y'
  //     style='stroke:rgb(255,0,0);stroke-width:2;'
  //   ></svg:line>
  // `
  template: `
    <svg:defs>
      <svg:marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"
                  viewBox="0 0 20 20">
        <svg:path d="M0,0 L0,6 L9,3 z" fill="#f00"/>
      </svg:marker>
    </svg:defs>
    <svg:path
      [attr.d]='path_link'
      style='stroke:rgb(255,0,0);stroke-width:1;fill:none'
      marker-end="url(#arrow)"
    ></svg:path>
  `
})
export class LinkVisualComponent implements OnChanges, DoCheck, OnInit {


  constructor(private cd: ChangeDetectorRef) {
  }


  @Input('linkVisual') link: Link;
  source_x: number;
  target_x: number;
  path_link: string;

  ngOnInit() {
    this.source_x = this.link.source.x;
    this.target_x = this.link.target.x;
    this.source_x = this.link.source.x;
    this.target_x = this.link.target.x;

  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
    if (this.link.source.x !== this.source_x) {
      this.source_x = this.link.source.x;
      this.path_link = this.positionLink(this.link.source, this.link.target);
    }


    // if (this.link.target.x !== this.target_x) {
    //   this.target_x = this.link.target.x;
    //   this.cd.detectChanges();
    // }
  }

  positionLink(source, target) {
    const dx = target.x - source.x,
      dy = target.y - source.y,
      dr = Math.sqrt(dx * dx + dy * dy);
    return 'M' +
      source.x + ',' +
      source.y + 'A' +
      dr + ',' + dr + ' 0 0,1 ' +
      target.x + ',' +
      target.y;
  }
}
