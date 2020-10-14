import { Box } from '../entities/Box';
import { Environment } from '../entities/Environment';

import SolvusClient from '@solvus/client';

AFRAME.registerSystem('app', {
  schema: {},

  init: function () {
    console.log('Game Initialized');
    let client = new SolvusClient(undefined, undefined, false);

    // Example summon a custom entity
    this.box = new Box(0, 2, -5, {
      width: 2,
      height: 2,
      depth: 2,
    });

     this.env = document.querySelector('#sky');

    client.on('division', (time) => {
        let color;
        let sky;

        if(time.division % 2 == 0){
            color = '#fff';
            sky = '#000';
        }else{
            color = '#000';
            sky = '#fff';
        }

        this.box.el.setAttribute('material', {color});
        this.env.setAttribute('color', sky);
    });
    

  },

  tick(time, timeDelta) {
    // Your gameloop code
    this.box.update(time, timeDelta);
    
  },
});
