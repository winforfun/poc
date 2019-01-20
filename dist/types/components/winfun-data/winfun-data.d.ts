import '../../stencil.core';
import { Pack } from "../../data/pack";
export declare class WFData {
    /**
     * URL to toprateddata.xml
     */
    src: string;
    /**
     * The player
     */
    data: Pack;
    componentWillLoad(): Promise<void>;
    render(): JSX.Element;
}
