import * as _ from "./runtime";
import * as go2ts_integration_Test1 from "./go2ts_integration_Test1";

export type T = go2ts_integration_Test1.T | null;
export function empty(): T { return null; }
export type MarshalT = go2ts_integration_Test1.MarshalT | null;
export function marshal(x: T): MarshalT { return ((f) => (x) => x !== null ? f(x) : null)(go2ts_integration_Test1.marshal)(x); }
export function unmarshal(x: MarshalT): T { return ((f) => (x) => x !== null ? f(x) : null)(go2ts_integration_Test1.unmarshal)(x); }
