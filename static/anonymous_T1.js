define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { x: 0 }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { X: _.identityNumber(x.x) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { x: _.identityNumber(x.X) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=anonymous_T1.js.map