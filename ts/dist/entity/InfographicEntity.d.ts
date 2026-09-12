import { MediazonaEntityBase } from '../MediazonaEntityBase';
import type { MediazonaSDK } from '../MediazonaSDK';
import type { Control } from '../types';
import type { Infographic, InfographicListMatch } from '../MediazonaTypes';
declare class InfographicEntity extends MediazonaEntityBase<Infographic> {
    constructor(client: MediazonaSDK, entopts: any);
    make(this: InfographicEntity): InfographicEntity;
    list(this: any, reqmatch?: InfographicListMatch, ctrl?: Control): Promise<InfographicEntity[]>;
}
export { InfographicEntity };
