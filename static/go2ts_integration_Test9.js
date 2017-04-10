define(["require", "exports", "./time_Time"], function (require, exports, time_Time) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { x: time_Time.empty() }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { X: time_Time.marshal(x.x) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { x: time_Time.unmarshal(x.X) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test9.js.map