import * as _ from "./runtime";
export type T = { x: string; };
export function empty(): T { return { x: "" }; }
export type MarshalT = { X: string; };
export function marshal(x: T): MarshalT { return (function(x) { return { X: _.identityString(x.x) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { x: _.identityString(x.X) }; })(x); }
