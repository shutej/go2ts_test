import * as _ from "./runtime";
export type T = { aStringSlice: Array<string>; aIntSlice: Array<number>; aFloatSlice: Array<number>; aBoolSlice: Array<boolean>; aByteSlice: string; };
export function empty(): T { return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [], aByteSlice: "" }; }
export type MarshalT = { aStringSlice: Array<string>; aIntSlice: Array<number>; aFloatSlice: Array<number>; aBoolSlice: Array<boolean>; aByteSlice: string | null; };
export function marshal(x: T): MarshalT { return (function(x) { return { aStringSlice: _.fmapArray(_.identityString)(x.aStringSlice), aIntSlice: _.fmapArray(_.identityNumber)(x.aIntSlice), aFloatSlice: _.fmapArray(_.identityNumber)(x.aFloatSlice), aBoolSlice: _.fmapArray(_.identityBoolean)(x.aBoolSlice), aByteSlice: window.btoa(x.aByteSlice) }; })(x); }
export function unmarshal(x: MarshalT): T { return (function(x) { return { aStringSlice: _.fmapArray(_.identityString)(x.aStringSlice), aIntSlice: _.fmapArray(_.identityNumber)(x.aIntSlice), aFloatSlice: _.fmapArray(_.identityNumber)(x.aFloatSlice), aBoolSlice: _.fmapArray(_.identityBoolean)(x.aBoolSlice), aByteSlice: _.bytesUnmarshal(x.aByteSlice) }; })(x); }
