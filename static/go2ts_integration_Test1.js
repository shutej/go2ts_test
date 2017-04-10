define(["require", "exports", "./runtime"], function (require, exports, _) {
    "use strict";
    exports.__esModule = true;
    function empty() { return { aString: "", aInt: 0, aFloat: 0.0, aBool: false, aByte: 0 }; }
    exports.empty = empty;
    function marshal(x) { return (function (x) { return { aString: _.identityString(x.aString), aInt: _.identityNumber(x.aInt), aFloat: _.identityNumber(x.aFloat), aBool: _.identityBoolean(x.aBool), aByte: _.identityNumber(x.aByte) }; })(x); }
    exports.marshal = marshal;
    function unmarshal(x) { return (function (x) { return { aString: _.identityString(x.aString), aInt: _.identityNumber(x.aInt), aFloat: _.identityNumber(x.aFloat), aBool: _.identityBoolean(x.aBool), aByte: _.identityNumber(x.aByte) }; })(x); }
    exports.unmarshal = unmarshal;
});
//# sourceMappingURL=go2ts_integration_Test1.js.map