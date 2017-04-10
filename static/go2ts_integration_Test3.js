define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aStringSlice: [], aIntSlice: [], aFloatSlice: [], aBoolSlice: [], aByteSlice: "" }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aStringSlice: _.fmapArray(_.identityString)(x.aStringSlice), aIntSlice: _.fmapArray(_.identityNumber)(x.aIntSlice), aFloatSlice: _.fmapArray(_.identityNumber)(x.aFloatSlice), aBoolSlice: _.fmapArray(_.identityBoolean)(x.aBoolSlice), aByteSlice: window.btoa(x.aByteSlice) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aStringSlice: _.fmapArray(_.identityString)(x.aStringSlice), aIntSlice: _.fmapArray(_.identityNumber)(x.aIntSlice), aFloatSlice: _.fmapArray(_.identityNumber)(x.aFloatSlice), aBoolSlice: _.fmapArray(_.identityBoolean)(x.aBoolSlice), aByteSlice: _.bytesUnmarshal(x.aByteSlice) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test3.js.map