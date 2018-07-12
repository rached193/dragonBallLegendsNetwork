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
    const map_source = new Map(); // Mapa de las fuentes
    const map_target = new Map(); // Mapa de los objetivos


    let generated_liks = [];
    const generate_nodes = [];

    list.forEach(item => {
      /** 1º Generamos los nodos **/
      generate_nodes.push({
        id: item.id,
        info: {
          name: item.id,
          element: item.element
        }
      });


      /** 2º Generamos los links  a los que apunta **/
      if (map_source.has(item.target)) {
        generated_liks = [...generated_liks, ...this.sourceLinks(map_source.get(item.target), item.id)];
      }

      /** 3º Recorremos los tags **/
      item.tag.forEach(tag => {
        /** 3.1º Almacenamos en fuente sus tags **/
        if (map_source.has(tag)) {
          map_source.set(tag, [...map_source.get(tag), item.id]);
        } else {
          map_source.set(tag, [item.id]);
        }

        /** 3.2º Generamos los links a los que es apuntado **/
        if (map_target.has(tag)) {
          generated_liks = [...generated_liks, ...this.targetLinks(map_target.get(tag), item.id)];
        }
      });

      /** 3.1º Almacenamos en target a quien apunta **/
      if (map_target.has(item.target)) {
        map_target.set(item.target, [...map_target.get(item.target), item.id]);
      } else {
        map_target.set(item.target, [item.id]);
      }


    });
    return [generated_liks, generate_nodes];
  }


  sourceLinks(list, source) {
    const generated_links = [];
    list.forEach(item => {
      generated_links.push({
        source: source,
        target: item
      });
    });
    return generated_links;
  }

  targetLinks(list, target) {
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
