import { Pack } from '../data/pack';
import xmltojson from 'xmltojson';

interface Attr {
  _value: string;
}

interface Node {
  _attr: Array<Attr>;
}

function getAttrs(node: Node) : Object {
  const attrs = node._attr;
  return Object.keys(attrs).reduce((result, attr) => {
    result[attr] = attrs[attr]._value;
    return result;
  } , {});
}

export async function load(src: string) : Promise<Pack> {
  const data = await fetch(src);
  const pack = xmltojson.parseString(await data.text());
  return pack.PackData.map(pack => ({
    ...getAttrs(pack),
    players: pack.PlayerData.map(player => ({
      ...getAttrs(player),
      data: player.P.map(getAttrs),
      get(id: number) {
        return this.data.find(p => p.id === id)
      }
    }))[0],
    clubs: pack.ClubData.map(club => ({
      ...getAttrs(club),
      data: club.C.map(getAttrs),
      get(id: number) {
        return this.data.find(c => c.id === id)
      }
    }))[0],
    stadiums: pack.StadiumData.map(stadium => ({
      ...getAttrs(stadium),
      data: stadium.S.map(getAttrs),
      get(id: number) {
        return this.data.find(c => c.id === id)
      }
    }))[0]
  }))[0];
}

