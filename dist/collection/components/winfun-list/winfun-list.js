import Tunnel from "../../data/pack";
export class WFList {
    render() {
        return (h(Tunnel.Consumer, null, data => {
            const { players } = data;
            if (players) {
                return (h("div", { class: "mdc-layout-grid" },
                    h("div", { class: "mdc-layout-grid__inner" }, players.data.map(player => (h("winfun-player", { class: "mdc-layout-grid__cell", playerId: player.id }))))));
            }
        }));
    }
    static get is() { return "winfun-list"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:winfun-list:**/"; }
}
