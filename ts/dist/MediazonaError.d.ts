import { Context } from './Context';
declare class MediazonaError extends Error {
    isMediazonaError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { MediazonaError };
