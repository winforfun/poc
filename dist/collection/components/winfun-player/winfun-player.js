import Tunnel from "../../data/pack";
export class WFPlayer {
    constructor() {
        this.favourite = false;
    }
    render() {
        return (h(Tunnel.Consumer, null, data => {
            const { players } = data;
            if (players) {
                const player = players.get(this.playerId);
                if (player) {
                    return (h("div", { class: "mdc-card" },
                        h("div", { class: "mdc-card__media mdc-card__media--square", style: {
                                backgroundImage: `url(${players.baseImageUrl}${player.i})`
                            } },
                            h("div", { class: "mdc-card__media-content" }, "*")),
                        h("div", { class: "mdc-card__actions" },
                            h("div", { class: "mdc-card__action-buttons" },
                                h("button", { class: "mdc-button mdc-card__action mdc-card__action--button", onClick: () => (this.favourite = !this.favourite), title: `${this.favourite ? "Remove from" : "Add to"} favorites`, "aria-pressed": String(!!this.favourite) },
                                    h("svg", { class: "mdc-button__icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                                        h("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })),
                                    h("span", { class: "mdc-button__label" },
                                        player.s,
                                        ", ",
                                        player.f))),
                            h("div", { class: "mdc-card__action-icons" },
                                h("button", { class: "mdc-icon-button mdc-card__action mdc-card__action--icon", title: "Share" },
                                    h("svg", { class: "mdc-icon-button__icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                                        h("path", { d: "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" }))),
                                h("button", { class: "mdc-icon-button mdc-card__action mdc-card__action--icon", title: "More options" },
                                    h("svg", { class: "mdc-icon-button__icon", "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
                                        h("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })))))));
                }
            }
        }));
    }
    static get is() { return "winfun-player"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "favourite": {
            "type": Boolean,
            "attr": "favourite",
            "reflectToAttr": true,
            "mutable": true
        },
        "playerId": {
            "type": Number,
            "attr": "player-id"
        }
    }; }
    static get style() { return "/**style-placeholder:winfun-player:**/"; }
}
