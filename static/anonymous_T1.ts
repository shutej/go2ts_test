import * as _ from "./runtime";
export type T = { x: number; };
export function empty(): T { return { x: 0 }; }
export type MarshalT = { X: number; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: _.identityNumber(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: _.identityNumber(x.X) }; })(x); }
