define(["require", "exports", "./go2ts_integration_Test1"], function (require, exports, go2ts_integration_Test1) {
    "use strict";
    exports.__esModule = true;
    function empty() { return null; }
    exports.empty = empty;
    function marshal(x) { return (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(go2ts_integration_Test1.marshal)(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (f) { return function (x) { return x !== null ? f(x) : null; }; })(go2ts_integration_Test1.unmarshal)(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test7.js.map