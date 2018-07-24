import {Component, Input} from '@angular/core';
import {Node} from '../../d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + nodeVisual.x + ',' + nodeVisual.y + ')'">
      <!--<svg:circle [attr.class]="nodeInfo.element"-->
      <!--cx="0"-->
      <!--cy="0"-->
      <!--r="50">-->
      <!--</svg:circle>-->
      <svg:image
        x="-50" y="-50"
        height="100" width="100"
        xlink:href="firefox.jpg"
        attr.xlink:href="assets/{{nodeInfo.imgSource}}.png"
        (mouseenter)="openTooltip()"
      >
      </svg:image>
    </svg:g>
  `,
  styleUrls: ['./node-visual.style.scss'],
})
export class NodeVisualComponent {
  @Input() nodeVisual: Node;
  @Input() nodeInfo;

  openTooltip = (element) => {
    // console.log(element);
    // console.log('hello');
  };
}
