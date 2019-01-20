import xmltojson from 'xmltojson';
function getAttrs(node) {
    const attrs = node._attr;
    return Object.keys(attrs).reduce((result, attr) => {
        result[attr] = attrs[attr]._value;
        return result;
    }, {});
}
export async function load(src) {
    const data = await fetch(src);
    const pack = xmltojson.parseString(await data.text());
    return pack.PackData.map(pack => (Object.assign({}, getAttrs(pack), { players: pack.PlayerData.map(player => (Object.assign({}, getAttrs(player), { data: player.P.map(getAttrs), get(id) {
                return this.data.find(p => p.id === id);
            } })))[0], clubs: pack.ClubData.map(club => (Object.assign({}, getAttrs(club), { data: club.C.map(getAttrs), get(id) {
                return this.data.find(c => c.id === id);
            } })))[0], stadiums: pack.StadiumData.map(stadium => (Object.assign({}, getAttrs(stadium), { data: stadium.S.map(getAttrs), get(id) {
                return this.data.find(c => c.id === id);
            } })))[0] })))[0];
}
