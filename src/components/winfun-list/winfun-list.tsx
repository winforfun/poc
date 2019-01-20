import { Component } from "@stencil/core";
import Tunnel from "../../data/pack";
import { Pack } from "../../data/pack";

@Component({
  tag: "winfun-list",
  styleUrl: "winfun-list.scss",
  shadow: true
})
export class WFList {
  render() {
    return (
      <Tunnel.Consumer>
        {data => {
          const { players } = data as Pack;
          if (players) {
            return (
              <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                  {players.data.map(player => (
                      <winfun-player class="mdc-layout-grid__cell" playerId={player.id} />
                  ))}
                </div>
              </div>
            );
          }
        }}
      </Tunnel.Consumer>
    );
  }
}
