import * as _ from "./runtime";
export type T = { x: boolean; };
export function empty(): T { return { x: false }; }
export type MarshalT = { X: boolean; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: _.identityBoolean(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: _.identityBoolean(x.X) }; })(x); }
