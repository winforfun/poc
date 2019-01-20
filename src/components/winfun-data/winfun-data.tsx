import { Component, Prop, State } from "@stencil/core";
import { load } from "../../utils/utils";
import Tunnel from "../../data/pack"
import { Pack} from "../../data/pack"

@Component({
  tag: "winfun-data",
  shadow: false
})
export class WFData {
  /**
   * URL to toprateddata.xml
   */
  @Prop() src: string = "http://c3420952.r52.cf0.rackcdn.com/toprateddata.xml";

  /**
   * The player
   */
  @State() data: Pack;

  async componentWillLoad() {
    this.data = await load(this.src);
  }

  render() {
    return (<Tunnel.Provider state={this.data}><slot /></Tunnel.Provider>);
  }
}
