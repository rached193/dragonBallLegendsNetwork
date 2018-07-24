import {ELEMENT, TAG, TYPE} from './globals';

export interface Character {
  id: String;
  name: String,
  element: String;
  tag: Array<String>;
  target: String;
  type: String;
}


export const character_list: Character [] =
  [
    {
      name: 'Picollo',
      id: 'DBL01-07S',
      element: ELEMENT.GREEN,
      tag: [TAG.REGENERATION],
      type: TYPE.ELEMENT,
      target: ELEMENT.GREEN
    },
    // {
    //   name: 'Krillin',
    //   id: 'DBL01-33E',
    //   element: ELEMENT.RED,
    //   tag: [TAG.SUPER_WARRIOR],
    //   type: TYPE.ELEMENT,
    //   target: ELEMENT.RED
    // },
    {
      name: 'Nappa',
      id: 'DBL01-19E',
      element: ELEMENT.RED,
      tag: [TAG.FRIEZA_FORCE, TAG.SAIYAN],
      type: TYPE.ELEMENT,
      target: ELEMENT.YELLOW
    },
    {
      name: 'Vegeta',
      id: 'DBL01-17S',
      element: ELEMENT.PURPLE,
      tag: [TAG.FRIEZA_FORCE, TAG.SAIYAN],
      type: TYPE.TAG,
      target: TAG.SAIYAN
    },
    {
      name: 'Goku',
      id: 'DBL01-03S',
      element: ELEMENT.BLUE,
      tag: [TAG.SAIYAN, TAG.SON_FAMILY],
      type: TYPE.TAG,
      target: TAG.SAIYAN
    },
    // {
    //   name: 'Gohan',
    //   id: 'DBL01-36S',
    //   element: ELEMENT.YELLOW,
    //   tag: [TAG.HYBRID_SAIYAN, TAG.SON_FAMILY, TAG.KIDS],
    //   type: TYPE.TAG,
    //   target: TAG.HYBRID_SAIYAN
    // },
    {
      name: 'Goku',
      id: 'DBL01-04S',
      element: ELEMENT.RED,
      tag: [TAG.SAIYAN, TAG.SON_FAMILY],
      type: TYPE.TAG,
      target: TAG.SAIYAN
    },
    {
      name: 'Captain Ginyu',
      id: 'DBL01-44S',
      element: ELEMENT.GREEN,
      tag: [TAG.FRIEZA_FORCE, TAG.GINYU_FORCE],
      type: TYPE.TAG,
      target: TAG.GINYU_FORCE
    },
    // {
    //   name: 'Pan',
    //   id: 'DBL01-05S',
    //   element: ELEMENT.BLUE,
    //   tag: [TAG.HYBRID_SAIYAN, TAG.GT, TAG.SON_FAMILY, TAG.FEMALE_WARRIOR],
    //   type: TYPE.TAG,
    //   target: TAG.FEMALE_WARRIOR
    // },
  ];
