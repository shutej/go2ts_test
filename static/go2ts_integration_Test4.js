define(["require", "exports", "./anonymous_T2", "./anonymous_T3", "./anonymous_T4", "./anonymous_T0", "./anonymous_T1"], function (require, exports, anonymous_T2, anonymous_T3, anonymous_T4, anonymous_T0, anonymous_T1) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aStringObject: anonymous_T0.empty(), aIntObject: anonymous_T1.empty(), aFloatObject: anonymous_T2.empty(), aBoolObject: anonymous_T3.empty(), aByteObject: anonymous_T4.empty() }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aStringObject: anonymous_T0.marshal(x.aStringObject), aIntObject: anonymous_T1.marshal(x.aIntObject), aFloatObject: anonymous_T2.marshal(x.aFloatObject), aBoolObject: anonymous_T3.marshal(x.aBoolObject), aByteObject: anonymous_T4.marshal(x.aByteObject) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aStringObject: anonymous_T0.unmarshal(x.aStringObject), aIntObject: anonymous_T1.unmarshal(x.aIntObject), aFloatObject: anonymous_T2.unmarshal(x.aFloatObject), aBoolObject: anonymous_T3.unmarshal(x.aBoolObject), aByteObject: anonymous_T4.unmarshal(x.aByteObject) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test4.js.map