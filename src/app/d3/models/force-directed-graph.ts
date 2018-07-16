import {EventEmitter} from '@angular/core';
import {Link} from './link';
import {Node} from './node';
import * as d3 from 'd3';

const FORCES = {
  LINKS: 1 / 30,
  COLLISION: 1,
  CHARGE: -1,
  DISTANCE: 450
};

export class ForceDirectedGraph {
  public ticker: EventEmitter<d3.Simulation<Node, Link>> = new EventEmitter();
  public simulation: d3.Simulation<any, any>;

  public nodes: Node[] = [];
  public links: Link[] = [];

  constructor(nodes, links, options: { width, height }) {
    this.nodes = nodes;
    this.links = links;
    this.initSimulation(options);
  }

  initNodes() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

    this.simulation.nodes(this.nodes);
  }

  initLinks() {
    if (!this.simulation) {
      throw new Error('simulation was not initialized yet');
    }

    // Initializing the links force simulation


    this.simulation.force('links',
      d3.forceLink(this.links)
        .id(function (item) {
          return item['id'];
        })
        .strength(FORCES.LINKS)
        .distance(FORCES.DISTANCE)
    );
  }

  initSimulation(options) {
    if (!options || !options.width || !options.height) {
      throw new Error('missing options when initializing simulation');
    }

    /** Creating the simulation */
    if (!this.simulation) {
      const ticker = this.ticker;

      // Creating the force simulation and defining the charges
      this.simulation = d3.forceSimulation()
      // .force('charge', d3.forceManyBody().strength(FORCES.CHARGE));
        .force('charge', null);

      // Translates all nodes to visually move them into the center of the svg element.
      this.simulation.force('center', d3.forceCenter(options.width / 2, options.height / 2));


      // Connecting the d3 ticker to an angular event emitter
      this.simulation.on('tick', function () {
        ticker.emit(this);
      });

      this.initNodes();
      this.initLinks();
    }

    /** Updating the central force of the simulation */
    this.simulation.force('centers', d3.forceCenter(options.width / 2, options.height / 2));

    /** Restarting the simulation internal timer */
    this.simulation.restart();
  }
}
