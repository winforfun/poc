import { createProviderConsumer } from "@stencil/state-tunnel";
  
export interface Pack {
  name: string;
  desc: string;
  players: Data<Player>;
  clubs: Data<Club>;
  stadiums: Data<Stadium>;
}

interface Data<T = Player | Club | Stadium> {
  baseImageUrl: string;
  data: Array<T>;
  get(id: number): T;
}

interface Identity {
  id: number;
}

export interface Player extends Identity {
  f: string;
  s: string;
  i: string;
}

export interface Club extends Identity {
  n: string;
}

export interface Stadium extends Identity {
  n: string;
  i: string;
}

export default createProviderConsumer<Pack>(null, (subscribe, child) => (
  <context-consumer subscribe={subscribe} renderer={child} />
));
