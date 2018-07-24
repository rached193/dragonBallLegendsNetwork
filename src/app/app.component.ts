import {Component, OnInit} from '@angular/core';
import {ELEMENT, TAG, TYPE} from './globals';
import {Character, character_list} from './character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  links = [];
  nodes = [];

  ngOnInit() {

    [this.links, this.nodes] = this.generateLinks(character_list);
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
          name: item.name + '-' + item.id,
          element: item.element,
          imgSource: item.id,
        }
      });


      /** 2º Generamos los links  a los que apunta **/
      if (item.type === TYPE.TAG) {
        if (map_source.has(item.target)) {
          generated_liks = [...generated_liks, ...this.sourceLinks(map_source.get(item.target), item.id)];
        }
      } else if (item.type === TYPE.ELEMENT) {
        if (map_source.has(item.element)) {
          generated_liks = [...generated_liks, ...this.sourceLinks(map_source.get(item.element), item.id)];
        }
      }


      /** 3º Recorremos los tags **/
      item.tag.forEach(tag => {
        /** 3.1º Almacenamos  sus tags **/
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

      if (map_target.has(item.element)) {
        generated_liks = [...generated_liks, ...this.targetLinks(map_target.get(item.element), item.id)];
      }

      /** 4º Almacenamos a quien apunta **/
      if (map_target.has(item.target)) {
        map_target.set(item.target, [...map_target.get(item.target), item.id]);
      } else {
        map_target.set(item.target, [item.id]);
      }

      /** 5º Almacenamos a su color **/
      if (map_source.has(item.element)) {
        map_source.set(item.element, [...map_source.get(item.element), item.id]);
      } else {
        map_source.set(item.element, [item.id]);
      }


    });

    console.log(map_source);
    console.log(map_target);

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
