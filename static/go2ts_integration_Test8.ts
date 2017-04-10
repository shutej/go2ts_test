import * as _ from "./runtime";
import * as go2ts_integration_Test1 from "./go2ts_integration_Test1";

export type T = Array<go2ts_integration_Test1.T | null>;
export function empty(): T { return []; }
export type MarshalT = Array<go2ts_integration_Test1.MarshalT | null>;
export function marshal(x: T): MarshalT { return _.fmapArray(((f) => (x) => x !== null ? f(x) : null)(go2ts_integration_Test1.marshal))(x); }
export function unmarshal(x: MarshalT): T { return _.fmapArray(((f) => (x) => x !== null ? f(x) : null)(go2ts_integration_Test1.unmarshal))(x); }
