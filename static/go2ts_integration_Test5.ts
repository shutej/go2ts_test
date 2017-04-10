import * as _ from "./runtime";
export type T = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; };
export function empty(): T { return { aStringMap: {}, aIntMap: {}, aFloatMap: {}, aBoolMap: {}, aByteMap: {} }; }
export type MarshalT = { aStringMap: { [k: string]: string }; aIntMap: { [k: string]: number }; aFloatMap: { [k: string]: number }; aBoolMap: { [k: string]: boolean }; aByteMap: { [k: string]: number }; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringMap: _.fmapObject(_.identityString)(x.aStringMap), aIntMap: _.fmapObject(_.identityNumber)(x.aIntMap), aFloatMap: _.fmapObject(_.identityNumber)(x.aFloatMap), aBoolMap: _.fmapObject(_.identityBoolean)(x.aBoolMap), aByteMap: _.fmapObject(_.identityNumber)(x.aByteMap) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringMap: _.fmapObject(_.identityString)(x.aStringMap), aIntMap: _.fmapObject(_.identityNumber)(x.aIntMap), aFloatMap: _.fmapObject(_.identityNumber)(x.aFloatMap), aBoolMap: _.fmapObject(_.identityBoolean)(x.aBoolMap), aByteMap: _.fmapObject(_.identityNumber)(x.aByteMap) }; })(x); }
