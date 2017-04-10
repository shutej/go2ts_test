define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { x: "" }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { X: _.identityString(x.x) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { x: _.identityString(x.X) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=anonymous_T0.js.map