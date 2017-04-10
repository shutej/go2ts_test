define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function identityBoolean(x) {
        return x;
    }
    exports.identityBoolean = identityBoolean;
    function identityNumber(x) {
        return x;
    }
    exports.identityNumber = identityNumber;
    function identityString(x) {
        return x;
    }
    exports.identityString = identityString;
    function fmapArray(fn) {
        return function (x) {
            if (x === null) {
                return [];
            }
            return x.map(fn);
        };
    }
    exports.fmapArray = fmapArray;
    function fmapObject(fn) {
        return function (x) {
            var retval = {};
            if (x === null) {
                return retval;
            }
            for (var key in x) {
                retval[key] = fn(x[key]);
            }
            return retval;
        };
    }
    exports.fmapObject = fmapObject;
    function bytesUnmarshal(x) {
        if (!x) {
            return "";
        }
        return window.atob(x);
    }
    exports.bytesUnmarshal = bytesUnmarshal;
});
//# sourceMappingURL=runtime.js.map