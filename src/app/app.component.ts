import {Component, OnInit} from '@angular/core';
import {ELEMENT, TAG, TYPE} from './globals';
import {Character} from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  // nodes = [{
  //   id: 'A',
  //   info: {name: 'A'},
  // }, {
  //   id: 'B',
  //   info: {name: 'B'},
  // }, {
  //   id: 'C',
  //   info: {name: 'C'},
  // }, {
  //   id: 'D',
  //   info: {name: 'D'},
  // }];


  links = [];
  nodes = [];

  // links = [{
  //   source: 'A',
  //   target: 'D'
  // }];
  character_list: Character[] = [
    {
      name: 'Vegenta',
      id: 'Vegeta-01',
      element: ELEMENT.PURPLE,
      tag: [TAG.FRIEZA_FORCE, TAG.SAIYAN],
      target: TAG.SAIYAN,
      type: TYPE.TAG
    },
    {
      name: 'Goku',
      id: 'Goku-01',
      element: ELEMENT.BLUE,
      tag: [TAG.SON_FAMILY, TAG.SAIYAN],
      target: TAG.SAIYAN,
      type: TYPE.TAG
    },
    // {
    //   name: 'Shallot-01',
    //   id: 'Shallot',
    //   element: ELEMENT.PURPLE,
    //   tag: [TAG.SAIYAN],
    //   target: TAG.SAIYAN,
    //   type: TYPE.TAG
    // },
    // {
    //   name: 'Frieza-01',
    //   id: 'Frieza',
    //   element: ELEMENT.PURPLE,
    //   tag: [TAG.FRIEZA_FORCE, TAG.TRANSFORMING],
    //   target: ELEMENT.GREEN,
    //   type: TYPE.TAG
    // },
  ];

  ngOnInit() {

    [this.links, this.nodes] = this.generateLinks(this.character_list);
  }

  generateLinks(list: Array<Character>) {
    const map_target = new Map();
    const map_source = new Map();

    let generated_liks = [];
    const generate_nodes = [];

    list.forEach(item => {
      if (map_source.has(item.target)) {
        generated_liks = [...generated_liks, ...this.sourceLinks(map_source.get(item.target), item.id)];
      }

      generate_nodes.push({
        id: item.id,
        info: {
          name: item.id,
          element: item.element
        }
      });
      item.tag.forEach(tag => {
        if (map_source.has(tag)) {
          map_source.set(tag, [...map_source.get(tag), item.id]);
        } else {
          map_source.set(tag, [item.id]);
        }
      });

    });
    return [generated_liks, generate_nodes];
  }


  sourceLinks(list, target) {
    const generated_links = [];
    list.forEach(item => {
      generated_links.push({
        source: item,
        target: target
      });
    });
    return generated_links;
  }

}
