import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Link, Node} from '../../d3/models';
import {Observable} from 'rxjs';

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
      style='stroke:rgb(105,105,105);stroke-width:1;fill:none'
      marker-end="url(#arrow)"
    ></svg:path>
  `
})
export class LinkVisualComponent implements OnChanges, DoCheck, OnInit, OnDestroy {


  constructor(private cd: ChangeDetectorRef) {
  }


  @Input('linkVisual') link: Link;
  @Input() events: Observable<void>;

  private eventsSubscription: any;
  path_link: string;


  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(() =>
      this.path_link = this.positionCurveLink(this.link.source, this.link.target)
    );
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngDoCheck() {
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
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

  positionCurveLink(source, target) {
    const offset = 30;

    const midpoint_x = (source.x + target.x) / 2;
    const midpoint_y = (source.y + target.y) / 2;

    const dx = (target.x - source.x);
    const dy = (target.y - source.y);

    const normalise = Math.sqrt((dx * dx) + (dy * dy));

    const offSetX = midpoint_x + offset * (dy / normalise);
    const offSetY = midpoint_y - offset * (dx / normalise);

    return 'M' + source.x + ',' + source.y +
      'S' + offSetX + ',' + offSetY +
      ' ' + target.x + ',' + target.y;
  }


}
