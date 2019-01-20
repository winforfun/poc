import '../stencil.core';
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
declare const _default: {
    Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
        state: Pack;
    }>;
    Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
    wrapConsumer: (childComponent: any, fieldList: ("desc" | "players" | "name" | "clubs" | "stadiums")[]) => ({ children, ...props }: any) => JSX.Element;
    injectProps: (childComponent: any, fieldList: ("desc" | "players" | "name" | "clubs" | "stadiums")[]) => void;
};
export default _default;
