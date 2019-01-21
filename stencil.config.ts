import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { PluginOptions } from '@stencil/sass/dist/declarations';
import importer from 'node-sass-import';

export const config: Config = {
  namespace: 'winfun',
  plugins: [
    sass({
      importer: importer
    } as PluginOptions)
  ],
  bundles: [
    { components: [ 'winfun-data', 'winfun-list', 'winfun-player', 'context-consumer' ]}
  ],
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
