
// winfun: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './winfun.core.js';
import { COMPONENTS } from './winfun.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
