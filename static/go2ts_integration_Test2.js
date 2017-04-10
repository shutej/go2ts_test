define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aStringPtr: null, aIntPtr: null, aFloatPtr: null, aBoolPtr: null, aBytePtr: null }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aStringPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityString)(x.aStringPtr), aIntPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aIntPtr), aFloatPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aFloatPtr), aBoolPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityBoolean)(x.aBoolPtr), aBytePtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aBytePtr) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aStringPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityString)(x.aStringPtr), aIntPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aIntPtr), aFloatPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aFloatPtr), aBoolPtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityBoolean)(x.aBoolPtr), aBytePtr: (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(_.identityNumber)(x.aBytePtr) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test2.js.map