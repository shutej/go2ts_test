import * as _ from "./runtime";
export type T = { aString: string; aInt: number; aFloat: number; aBool: boolean; aByte: number; };
export function empty(): T { return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 }; }
export type MarshalT = { aString: string; aInt: number; aFloat: number; aBool: boolean; aByte: number; };
export function marshal(x: T): MarshalT { return (function(x) { return { aString: _.identityString(x.aString), aInt: _.identityNumber(x.aInt), aFloat: _.identityNumber(x.aFloat), aBool: _.identityBoolean(x.aBool), aByte: _.identityNumber(x.aByte) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aString: _.identityString(x.aString), aInt: _.identityNumber(x.aInt), aFloat: _.identityNumber(x.aFloat), aBool: _.identityBoolean(x.aBool), aByte: _.identityNumber(x.aByte) }; })(x); }
