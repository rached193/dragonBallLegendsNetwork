import {Component, Input} from '@angular/core';
import {Node} from '../../d3/models';

@Component({
  selector: '[nodeVisual]',
  template: `
    <svg:g [attr.transform]="'translate(' + nodeVisual.x + ',' + nodeVisual.y + ')'">
      <svg:circle
        cx="0"
        cy="0"
        r="50">
      </svg:circle>
      <svg:text>
        {{nodeInfo.name}}
      </svg:text>
    </svg:g>
  `,
  styleUrls: ['./node-visual.style.scss'],
})
export class NodeVisualComponent {
  @Input() nodeVisual: Node;
  @Input() nodeInfo;
}
