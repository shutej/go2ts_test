define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aStringMap: {}, aIntMap: {}, aFloatMap: {}, aBoolMap: {}, aByteMap: {} }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aStringMap: _.fmapObject(_.identityString)(x.aStringMap), aIntMap: _.fmapObject(_.identityNumber)(x.aIntMap), aFloatMap: _.fmapObject(_.identityNumber)(x.aFloatMap), aBoolMap: _.fmapObject(_.identityBoolean)(x.aBoolMap), aByteMap: _.fmapObject(_.identityNumber)(x.aByteMap) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aStringMap: _.fmapObject(_.identityString)(x.aStringMap), aIntMap: _.fmapObject(_.identityNumber)(x.aIntMap), aFloatMap: _.fmapObject(_.identityNumber)(x.aFloatMap), aBoolMap: _.fmapObject(_.identityBoolean)(x.aBoolMap), aByteMap: _.fmapObject(_.identityNumber)(x.aByteMap) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test5.js.map