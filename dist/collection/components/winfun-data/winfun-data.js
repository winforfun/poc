import { load } from "../../utils/utils";
import Tunnel from "../../data/pack";
export class WFData {
    constructor() {
        this.src = "http://c3420952.r52.cf0.rackcdn.com/toprateddata.xml";
    }
    async componentWillLoad() {
        this.data = await load(this.src);
    }
    render() {
        return (h(Tunnel.Provider, { state: this.data },
            h("slot", null)));
    }
    static get is() { return "winfun-data"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "src": {
            "type": String,
            "attr": "src"
        }
    }; }
}
