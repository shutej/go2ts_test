define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { x: false }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { X: _.identityBoolean(x.x) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { x: _.identityBoolean(x.X) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=anonymous_T3.js.map