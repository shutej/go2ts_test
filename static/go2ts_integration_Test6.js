define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0, aIntPtr: null, aIntSlice: [], aIntMap: {}, aByteSlice: "", aint2: 0 }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aString: _.identityString(x.aString), aInt: _.identityNumber(x.aInt), aFloat: _.identityNumber(x.aFloat), aBool: _.identityBoolean(x.aBool), aByte: _.identityNumber(x.aByte), aIntPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aIntPtr), aIntSlice: _.fmapArray(_.identityNumber)(x.aIntSlice), aIntMap: _.fmapObject(_.identityNumber)(x.aIntMap), aByteSlice: window.btoa(x.aByteSlice), AInt2: _.identityNumber(x.aint2) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aString: (x.hasOwnProperty("aString") ? _.identityString(x.aString) : ""), aInt: (x.hasOwnProperty("aInt") ? _.identityNumber(x.aInt) : 0), aFloat: (x.hasOwnProperty("aFloat") ? _.identityNumber(x.aFloat) : 0.0), aBool: (x.hasOwnProperty("aBool") ? _.identityBoolean(x.aBool) : false), aByte: (x.hasOwnProperty("aByte") ? _.identityNumber(x.aByte) : 0), aIntPtr: (x.hasOwnProperty("aIntPtr") ? (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aIntPtr) : null), aIntSlice: (x.hasOwnProperty("aIntSlice") ? _.fmapArray(_.identityNumber)(x.aIntSlice) : []), aIntMap: (x.hasOwnProperty("aIntMap") ? _.fmapObject(_.identityNumber)(x.aIntMap) : {}), aByteSlice: (x.hasOwnProperty("aByteSlice") ? _.bytesUnmarshal(x.aByteSlice) : ""), aint2: _.identityNumber(x.AInt2) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test6.js.map