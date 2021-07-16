(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-pipes', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-pipes'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var DiffPipe = /** @class */ (function () {
        function DiffPipe() {
        }
        DiffPipe.prototype.transform = function (input) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!Array.isArray(input)) {
                return input;
            }
            // tslint:disable-next-line no-bitwise
            return args.reduce(function (d, c) { return d.filter(function (e) { return !~c.indexOf(e); }); }, input);
        };
        return DiffPipe;
    }());
    DiffPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'diff' },] }
    ];

    var InitialPipe = /** @class */ (function () {
        function InitialPipe() {
        }
        InitialPipe.prototype.transform = function (input, num) {
            if (num === void 0) { num = 0; }
            return Array.isArray(input) ? input.slice(0, input.length - num) : input;
        };
        return InitialPipe;
    }());
    InitialPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'initial' },] }
    ];

    var FlattenPipe = /** @class */ (function () {
        function FlattenPipe() {
        }
        FlattenPipe.prototype.transform = function (input, shallow) {
            if (shallow === void 0) { shallow = false; }
            if (!Array.isArray(input)) {
                return input;
            }
            return shallow ? [].concat.apply([], input) : this.flatten(input);
        };
        FlattenPipe.prototype.flatten = function (array) {
            var _this = this;
            return array.reduce(function (arr, elm) {
                if (Array.isArray(elm)) {
                    return arr.concat(_this.flatten(elm));
                }
                return arr.concat(elm);
            }, []);
        };
        return FlattenPipe;
    }());
    FlattenPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'flatten' },] }
    ];

    var IntersectionPipe = /** @class */ (function () {
        function IntersectionPipe() {
        }
        IntersectionPipe.prototype.transform = function (input) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!Array.isArray(input)) {
                return input;
            }
            // tslint:disable-next-line no-bitwise
            return args.reduce(function (n, c) { return n.filter(function (e) { return !!~c.indexOf(e); }); }, input);
        };
        return IntersectionPipe;
    }());
    IntersectionPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'intersection' },] }
    ];

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function isUndefined(value) {
        return typeof value === 'undefined';
    }
    function isNull(value) {
        return value === null;
    }
    function isFunction(value) {
        return typeof value === 'function';
    }
    function isNumber(value) {
        return typeof value === 'number';
    }
    function isString(value) {
        return typeof value === 'string';
    }
    function isBoolean(value) {
        return typeof value === 'boolean';
    }
    function isObject(value) {
        return value !== null && typeof value === 'object';
    }
    function isNumberFinite(value) {
        return isNumber(value) && isFinite(value);
    }
    function isVowel(letter) {
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.indexOf(letter) !== -1;
    }
    function ucFirst(text) {
        var _a = __read(text.split(/\s/g)), part = _a[0], split = _a.slice(1);
        var ucd = part
            .toLowerCase()
            .split(/(?=['|-])/g)
            .map(function (word) { return word.indexOf('-') + word.indexOf("'") > -2
            ? word.slice(0, 2).toUpperCase() + word.slice(2)
            : word.slice(0, 1).toUpperCase() + word.slice(1); })
            .join('');
        return __spreadArray([ucd], __read(split)).join(' ');
    }
    function applyPrecision(num, precision) {
        if (precision <= 0) {
            return Math.round(num);
        }
        var tho = Math.pow(10, precision);
        return Math.round(num * tho) / tho;
    }
    function extractDeepPropertyByMapKey(obj, map) {
        var keys = map.split('.');
        var head = keys.shift();
        return keys.reduce(function (prop, key) {
            return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
        }, obj[head || '']);
    }
    function extractDeepPropertyByParentMapKey(obj, map) {
        var keys = map.split('.');
        var tail = keys.pop();
        var props = extractDeepPropertyByMapKey(obj, keys.join('.'));
        return { props: props, tail: tail };
    }
    function getKeysTwoObjects(obj, other) {
        return __spreadArray(__spreadArray([], __read(Object.keys(obj))), __read(Object.keys(other))).filter(function (key, index, array) { return array.indexOf(key) === index; });
    }
    function isDeepEqual(obj, other) {
        if (!isObject(obj) || !isObject(other)) {
            return obj === other;
        }
        return getKeysTwoObjects(obj, other).every(function (key) {
            if (!isObject(obj[key]) && !isObject(other[key])) {
                return obj[key] === other[key];
            }
            if (!isObject(obj[key]) || !isObject(other[key])) {
                return false;
            }
            return isDeepEqual(obj[key], other[key]);
        });
    }

    var ReversePipe = /** @class */ (function () {
        function ReversePipe() {
        }
        ReversePipe.prototype.transform = function (input) {
            if (isString(input)) {
                return input
                    .split('')
                    .reverse()
                    .join('');
            }
            return Array.isArray(input) ? input.slice().reverse() : input;
        };
        return ReversePipe;
    }());
    ReversePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'reverse' },] }
    ];

    var TailPipe = /** @class */ (function () {
        function TailPipe() {
        }
        TailPipe.prototype.transform = function (input, num) {
            if (num === void 0) { num = 0; }
            return Array.isArray(input) ? input.slice(num) : input;
        };
        return TailPipe;
    }());
    TailPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'tail' },] }
    ];

    var TrurthifyPipe = /** @class */ (function () {
        function TrurthifyPipe() {
        }
        TrurthifyPipe.prototype.transform = function (input) {
            return Array.isArray(input) ? input.filter(function (e) { return !!e; }) : input;
        };
        return TrurthifyPipe;
    }());
    TrurthifyPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'truthify' },] }
    ];

    var UnionPipe = /** @class */ (function () {
        function UnionPipe() {
        }
        UnionPipe.prototype.transform = function (input, args) {
            if (args === void 0) { args = []; }
            if (!Array.isArray(input) || !Array.isArray(args)) {
                return input;
            }
            return args.reduce(function (newArr, currArr) {
                return newArr.concat(currArr.reduce(function (noDupArr, curr) {
                    // tslint:disable-next-line:no-bitwise
                    return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
                }, []));
            }, input);
        };
        return UnionPipe;
    }());
    UnionPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'union' },] }
    ];

    var UniquePipe = /** @class */ (function () {
        function UniquePipe() {
        }
        UniquePipe.prototype.transform = function (input, propertyName) {
            var uniques = [];
            return Array.isArray(input)
                ? isUndefined(propertyName)
                    ? input.filter(function (e, i) { return input.indexOf(e) === i; })
                    : input.filter(function (e, i) {
                        var value = extractDeepPropertyByMapKey(e, propertyName);
                        value = isObject(value) ? JSON.stringify(value) : value;
                        if (isUndefined(value) || uniques[value]) {
                            return false;
                        }
                        uniques[value] = true;
                        return true;
                    })
                : input;
        };
        return UniquePipe;
    }());
    UniquePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'unique' },] }
    ];

    var WithoutPipe = /** @class */ (function () {
        function WithoutPipe() {
        }
        WithoutPipe.prototype.transform = function (input, args) {
            if (args === void 0) { args = []; }
            return Array.isArray(input)
                ? // tslint:disable-next-line:no-bitwise
                    input.filter(function (e) { return !~args.indexOf(e); })
                : input;
        };
        return WithoutPipe;
    }());
    WithoutPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'without' },] }
    ];

    var PluckPipe = /** @class */ (function () {
        function PluckPipe() {
        }
        PluckPipe.prototype.transform = function (input, map) {
            if (Array.isArray(input)) {
                return input.map(function (e) { return extractDeepPropertyByMapKey(e, map); });
            }
            return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
        };
        return PluckPipe;
    }());
    PluckPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'pluck', pure: false },] }
    ];

    var ShufflePipe = /** @class */ (function () {
        function ShufflePipe() {
        }
        // Using a version of the Fisher-Yates shuffle algorithm
        // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        ShufflePipe.prototype.transform = function (input) {
            var _a;
            if (!Array.isArray(input)) {
                return input;
            }
            var shuffled = __spreadArray([], __read(input));
            var n = input.length - 1;
            for (var i = 0; i < n; ++i) {
                var j = Math.floor(Math.random() * (n - i + 1)) + i;
                _a = __read([shuffled[j], shuffled[i]], 2), shuffled[i] = _a[0], shuffled[j] = _a[1];
            }
            return shuffled;
        };
        return ShufflePipe;
    }());
    ShufflePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'shuffle' },] }
    ];

    var EveryPipe = /** @class */ (function () {
        function EveryPipe() {
        }
        EveryPipe.prototype.transform = function (input, predicate) {
            return Array.isArray(input) ? input.every(predicate) : false;
        };
        return EveryPipe;
    }());
    EveryPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'every' },] }
    ];

    var SomePipe = /** @class */ (function () {
        function SomePipe() {
        }
        SomePipe.prototype.transform = function (input, predicate) {
            return Array.isArray(input) ? input.some(predicate) : input;
        };
        return SomePipe;
    }());
    SomePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'some' },] }
    ];

    var SamplePipe = /** @class */ (function () {
        function SamplePipe() {
        }
        SamplePipe.prototype.transform = function (input, len) {
            if (len === void 0) { len = 1; }
            if (!Array.isArray(input)) {
                return input;
            }
            var sample = [];
            var tmp = __spreadArray([], __read(input));
            var l = len < tmp.length ? len : tmp.length;
            for (var i = 0; i < l; ++i) {
                sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
            }
            return sample;
        };
        return SamplePipe;
    }());
    SamplePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sample' },] }
    ];

    var GroupByPipe = /** @class */ (function () {
        function GroupByPipe() {
        }
        GroupByPipe.prototype.transform = function (input, discriminator, delimiter) {
            if (discriminator === void 0) { discriminator = []; }
            if (delimiter === void 0) { delimiter = '|'; }
            if (!Array.isArray(input)) {
                return input;
            }
            return this.groupBy(input, discriminator, delimiter);
        };
        GroupByPipe.prototype.groupBy = function (list, discriminator, delimiter) {
            var _this = this;
            return list.reduce(function (acc, payload) {
                var key = _this.extractKeyByDiscriminator(discriminator, payload, delimiter);
                acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
                return acc;
            }, {});
        };
        GroupByPipe.prototype.extractKeyByDiscriminator = function (discriminator, payload, delimiter) {
            if (isFunction(discriminator)) {
                return discriminator(payload);
            }
            if (Array.isArray(discriminator)) {
                return discriminator.map(function (k) { return extractDeepPropertyByMapKey(payload, k); }).join(delimiter);
            }
            return extractDeepPropertyByMapKey(payload, discriminator);
        };
        return GroupByPipe;
    }());
    GroupByPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'groupBy' },] }
    ];

    // tslint:disable no-bitwise
    var FilterByPipe = /** @class */ (function () {
        function FilterByPipe() {
        }
        FilterByPipe.prototype.transform = function (input, props, search, strict, reverse) {
            if (search === void 0) { search = ''; }
            if (strict === void 0) { strict = false; }
            if (reverse === void 0) { reverse = false; }
            if (!Array.isArray(input) ||
                (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
                return input;
            }
            var terms = String(search)
                .toLowerCase()
                .split(',');
            return input.filter(function (obj) {
                return props.some(function (prop) {
                    return terms.some(function (term) {
                        var value = extractDeepPropertyByMapKey(obj, prop);
                        /* tslint:disable */
                        var _a = extractDeepPropertyByParentMapKey(obj, prop), props = _a.props, tail = _a.tail;
                        if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                            return props.some(function (parent) {
                                var str = String(parent[tail]).toLowerCase();
                                return reverse ? (strict ? str !== term : ~str.indexOf(term)) : (strict ? str === term : !!~str.indexOf(term));
                            });
                        }
                        if (isUndefined(value)) {
                            return false;
                        }
                        var strValue = String(value).toLowerCase();
                        return reverse ? (strict ? term !== strValue : ~strValue.indexOf(term)) : (strict ? term === strValue : !!~strValue.indexOf(term));
                    });
                });
            });
        };
        return FilterByPipe;
    }());
    FilterByPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'filterBy' },] }
    ];

    var OrderByPipe = /** @class */ (function () {
        function OrderByPipe() {
        }
        OrderByPipe.prototype.transform = function (input, config) {
            if (!Array.isArray(input)) {
                return input;
            }
            var out = __spreadArray([], __read(input));
            // sort by multiple properties
            if (Array.isArray(config)) {
                return out.sort(function (a, b) {
                    var l = config.length;
                    for (var i = 0; i < l; ++i) {
                        var _a = __read(OrderByPipe.extractFromConfig(config[i]), 2), prop = _a[0], asc = _a[1];
                        var pos = OrderByPipe.orderCompare(prop, asc, a, b);
                        if (pos !== 0) {
                            return pos;
                        }
                    }
                    return 0;
                });
            }
            // sort by a single property value
            if (isString(config)) {
                var _a = __read(OrderByPipe.extractFromConfig(config), 3), prop = _a[0], asc = _a[1], sign = _a[2];
                if (config.length === 1) {
                    // tslint:disable-next-line:switch-default
                    switch (sign) {
                        case '+':
                            return out.sort(OrderByPipe.simpleSort.bind(this));
                        case '-':
                            return out.sort(OrderByPipe.simpleSort.bind(this)).reverse();
                    }
                }
                return out.sort(OrderByPipe.orderCompare.bind(this, prop, asc));
            }
            // default sort by value
            return out.sort(OrderByPipe.simpleSort.bind(this));
        };
        OrderByPipe.simpleSort = function (a, b) {
            return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
        };
        OrderByPipe.orderCompare = function (prop, asc, a, b) {
            var first = extractDeepPropertyByMapKey(a, prop);
            var second = extractDeepPropertyByMapKey(b, prop);
            if (first === second) {
                return 0;
            }
            if (isUndefined(first) || first === '') {
                return 1;
            }
            if (isUndefined(second) || second === '') {
                return -1;
            }
            if (isString(first) && isString(second)) {
                var pos = first.toLowerCase().localeCompare(second.toLowerCase());
                return asc ? pos : -pos;
            }
            return asc ? first - second : second - first;
        };
        OrderByPipe.extractFromConfig = function (config) {
            var sign = config.substr(0, 1);
            var prop = config.replace(/^[-+]/, '');
            var asc = sign !== '-';
            return [prop, asc, sign];
        };
        return OrderByPipe;
    }());
    OrderByPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'orderBy' },] }
    ];

    // tslint:disable use-pipe-transform-interface
    var GroupByImpurePipe = /** @class */ (function (_super) {
        __extends(GroupByImpurePipe, _super);
        function GroupByImpurePipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GroupByImpurePipe;
    }(GroupByPipe));
    GroupByImpurePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'groupByImpure', pure: false },] }
    ];

    // tslint:disable use-pipe-transform-interface
    var FilterByImpurePipe = /** @class */ (function (_super) {
        __extends(FilterByImpurePipe, _super);
        function FilterByImpurePipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return FilterByImpurePipe;
    }(FilterByPipe));
    FilterByImpurePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'filterByImpure', pure: false },] }
    ];

    // tslint:disable use-pipe-transform-interface
    var OrderByImpurePipe = /** @class */ (function (_super) {
        __extends(OrderByImpurePipe, _super);
        function OrderByImpurePipe() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OrderByImpurePipe;
    }(OrderByPipe));
    OrderByImpurePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'orderByImpure', pure: false },] }
    ];

    var RangePipe = /** @class */ (function () {
        function RangePipe() {
        }
        RangePipe.prototype.transform = function (start, count, step) {
            if (start === void 0) { start = 1; }
            if (count === void 0) { count = 0; }
            if (step === void 0) { step = 1; }
            return Array(count)
                .fill('')
                .map(function (v, i) { return step * i + start; });
        };
        return RangePipe;
    }());
    RangePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'range' },] }
    ];

    var ChunkPipe = /** @class */ (function () {
        function ChunkPipe() {
        }
        ChunkPipe.prototype.transform = function (input, size) {
            if (size === void 0) { size = 1; }
            if (isString(input)) {
                return this.chunk(input
                    .split(''), size);
            }
            return Array.isArray(input) ? this.chunk(input, size) : input;
        };
        ChunkPipe.prototype.chunk = function (input, size) {
            return Array(Math.ceil(input.length / size))
                .fill([])
                .map(function (_, index) { return index * size; })
                .map(function (begin) { return input.slice(begin, begin + size); });
        };
        return ChunkPipe;
    }());
    ChunkPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'chunk' },] }
    ];

    var FromPairsPipe = /** @class */ (function () {
        function FromPairsPipe() {
        }
        FromPairsPipe.prototype.transform = function (input) {
            if (!Array.isArray(input)) {
                return input;
            }
            return input.reduce(function (obj, arr) {
                if (!Array.isArray(arr)) {
                    return obj;
                }
                var _a = __read(arr, 2), prop = _a[0], val = _a[1];
                obj[prop] = val;
                return obj;
            }, {});
        };
        return FromPairsPipe;
    }());
    FromPairsPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'fromPairs' },] }
    ];

    var ARRAY_PIPES = [
        DiffPipe,
        FlattenPipe,
        InitialPipe,
        IntersectionPipe,
        ReversePipe,
        TailPipe,
        TrurthifyPipe,
        UnionPipe,
        UniquePipe,
        WithoutPipe,
        PluckPipe,
        ShufflePipe,
        EveryPipe,
        SomePipe,
        SamplePipe,
        GroupByPipe,
        GroupByImpurePipe,
        FilterByPipe,
        FilterByImpurePipe,
        OrderByPipe,
        OrderByImpurePipe,
        RangePipe,
        ChunkPipe,
        FromPairsPipe
    ];
    var NgArrayPipesModule = /** @class */ (function () {
        function NgArrayPipesModule() {
        }
        return NgArrayPipesModule;
    }());
    NgArrayPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: ARRAY_PIPES,
                    imports: [],
                    exports: ARRAY_PIPES,
                },] }
    ];

    var KeysPipe = /** @class */ (function () {
        function KeysPipe() {
        }
        KeysPipe.prototype.transform = function (obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return Object.keys(obj);
        };
        return KeysPipe;
    }());
    KeysPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'keys' },] }
    ];

    var ValuesPipe = /** @class */ (function () {
        function ValuesPipe() {
        }
        ValuesPipe.prototype.transform = function (obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return Object.keys(obj).map(function (k) { return obj[k]; });
        };
        return ValuesPipe;
    }());
    ValuesPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'values' },] }
    ];

    var PairsPipe = /** @class */ (function () {
        function PairsPipe() {
        }
        PairsPipe.prototype.transform = function (obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return Object.entries(obj);
        };
        return PairsPipe;
    }());
    PairsPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'pairs' },] }
    ];

    var PickPipe = /** @class */ (function () {
        function PickPipe() {
        }
        PickPipe.prototype.transform = function (obj) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return args.reduce(function (o, k) {
                var _a;
                return Object.assign(o, (_a = {}, _a[k] = obj[k], _a));
            }, {});
        };
        return PickPipe;
    }());
    PickPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'pick' },] }
    ];

    var OmitPipe = /** @class */ (function () {
        function OmitPipe() {
        }
        OmitPipe.prototype.transform = function (obj) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return (Object.keys(obj)
                // tslint:disable-next-line:no-bitwise
                .filter(function (k) { return !~args.indexOf(k); })
                .reduce(function (o, k) {
                var _a;
                return Object.assign(o, (_a = {}, _a[k] = obj[k], _a));
            }, {}));
        };
        return OmitPipe;
    }());
    OmitPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'omit' },] }
    ];

    var InvertPipe = /** @class */ (function () {
        function InvertPipe() {
        }
        InvertPipe.prototype.transform = function (obj) {
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return Object.keys(obj).reduce(function (o, k) {
                var _a;
                return Object.assign(o, (_a = {}, _a[obj[k]] = k, _a));
            }, {});
        };
        return InvertPipe;
    }());
    InvertPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'invert' },] }
    ];

    var InvertByPipe = /** @class */ (function () {
        function InvertByPipe() {
        }
        InvertByPipe.prototype.transform = function (obj, cb) {
            if (Array.isArray(obj) || !isObject(obj)) {
                return obj;
            }
            return Object.keys(obj).reduce(function (o, k) {
                var _a;
                var key = cb ? cb(obj[k]) : obj[k];
                return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, (_a = {}, _a[key] = [k], _a));
            }, {});
        };
        return InvertByPipe;
    }());
    InvertByPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'invertBy' },] }
    ];

    var DiffObjPipe = /** @class */ (function () {
        function DiffObjPipe() {
        }
        DiffObjPipe.prototype.transform = function (obj, original) {
            if (original === void 0) { original = {}; }
            if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
                return {};
            }
            return getKeysTwoObjects(obj, original).reduce(function (diff, key) {
                if (!isDeepEqual(original[key], obj[key])) {
                    diff[key] = obj[key];
                }
                return diff;
            }, {});
        };
        return DiffObjPipe;
    }());
    DiffObjPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'diffObj' },] }
    ];

    var OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
    var NgObjectPipesModule = /** @class */ (function () {
        function NgObjectPipesModule() {
        }
        return NgObjectPipesModule;
    }());
    NgObjectPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: OBJECT_PIPES,
                    imports: [],
                    exports: OBJECT_PIPES,
                },] }
    ];

    /**
     * Takes a string and returns the string prepended by 'a' or 'an'.
     * Uses both naive and holdout-list approaches.
     * @constructor
     * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
     */
    var AorAnPipe = /** @class */ (function () {
        function AorAnPipe() {
            this.irregularMap = {
                herb: 'an',
                honor: 'an',
                honorable: 'an',
                hour: 'an',
                mba: 'an',
                msc: 'an',
                'm.sc.': 'an',
                unicorn: 'a',
            };
        }
        AorAnPipe.prototype.transform = function (stringEntity) {
            if (!stringEntity || stringEntity === '') {
                return '';
            }
            else {
                var firstWord = stringEntity.trim().split(' ')[0];
                if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                    return this.irregularMap[firstWord.toLocaleLowerCase()] + " " + stringEntity;
                }
                else {
                    return isVowel(stringEntity[0]) ? "an " + stringEntity : "a " + stringEntity;
                }
            }
        };
        return AorAnPipe;
    }());
    AorAnPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'aOrAn',
                },] }
    ];

    var UcWordsPipe = /** @class */ (function () {
        function UcWordsPipe() {
        }
        UcWordsPipe.prototype.transform = function (text) {
            if (isString(text)) {
                return text
                    .split(' ')
                    .map(function (sub) { return ucFirst(sub); })
                    .join(' ');
            }
            return text;
        };
        return UcWordsPipe;
    }());
    UcWordsPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'ucwords' },] }
    ];

    var LeftTrimPipe = /** @class */ (function () {
        function LeftTrimPipe() {
        }
        LeftTrimPipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            return isString(text) ? text.replace(new RegExp("^[" + chars + "]+"), '') : text;
        };
        return LeftTrimPipe;
    }());
    LeftTrimPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'ltrim' },] }
    ];

    var RepeatPipe = /** @class */ (function () {
        function RepeatPipe() {
        }
        RepeatPipe.prototype.transform = function (str, n, separator) {
            if (n === void 0) { n = 1; }
            if (separator === void 0) { separator = ''; }
            if (n <= 0) {
                throw new RangeError();
            }
            return n === 1 ? str : this.repeat(str, n - 1, separator);
        };
        RepeatPipe.prototype.repeat = function (str, n, separator) {
            return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
        };
        return RepeatPipe;
    }());
    RepeatPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'repeat' },] }
    ];

    var RightTrimPipe = /** @class */ (function () {
        function RightTrimPipe() {
        }
        RightTrimPipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            return isString(text) ? text.replace(new RegExp("[" + chars + "]+$"), '') : text;
        };
        return RightTrimPipe;
    }());
    RightTrimPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'rtrim' },] }
    ];

    var ScanPipe = /** @class */ (function () {
        function ScanPipe() {
        }
        ScanPipe.prototype.transform = function (text, args) {
            if (args === void 0) { args = []; }
            return isString(text)
                ? text.replace(/\{(\d+)}/g, function (match, index) { return (!isUndefined(args[index]) ? args[index] : match); })
                : text;
        };
        return ScanPipe;
    }());
    ScanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'scan' },] }
    ];

    var ShortenPipe = /** @class */ (function () {
        function ShortenPipe() {
        }
        ShortenPipe.prototype.transform = function (text, length, suffix, wordBreak) {
            if (length === void 0) { length = 0; }
            if (suffix === void 0) { suffix = ''; }
            if (wordBreak === void 0) { wordBreak = true; }
            if (!isString(text)) {
                return text;
            }
            if (text.length > length) {
                if (wordBreak) {
                    return text.slice(0, length) + suffix;
                }
                // tslint:disable-next-line:no-bitwise
                if (!!~text.indexOf(' ', length)) {
                    return text.slice(0, text.indexOf(' ', length)) + suffix;
                }
            }
            return text;
        };
        return ShortenPipe;
    }());
    ShortenPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'shorten' },] }
    ];

    var StripTagsPipe = /** @class */ (function () {
        function StripTagsPipe() {
        }
        StripTagsPipe.prototype.transform = function (text) {
            var allowedTags = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                allowedTags[_i - 1] = arguments[_i];
            }
            return allowedTags.length > 0
                ? text.replace(new RegExp("<(?!/?(" + allowedTags.join('|') + ")s*/?)[^>]+>", 'g'), '')
                : text.replace(/<(?:.|\s)*?>/g, '');
        };
        return StripTagsPipe;
    }());
    StripTagsPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'stripTags' },] }
    ];

    var TrimPipe = /** @class */ (function () {
        function TrimPipe() {
        }
        TrimPipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            return isString(text) ? text.replace(new RegExp("^[" + chars + "]+|[" + chars + "]+$", 'g'), '') : text;
        };
        return TrimPipe;
    }());
    TrimPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'trim' },] }
    ];

    var UcFirstPipe = /** @class */ (function () {
        function UcFirstPipe() {
        }
        UcFirstPipe.prototype.transform = function (text) {
            return isString(text) ? ucFirst(text) : text;
        };
        return UcFirstPipe;
    }());
    UcFirstPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'ucfirst' },] }
    ];

    var SlugifyPipe = /** @class */ (function () {
        function SlugifyPipe() {
        }
        SlugifyPipe.prototype.transform = function (str) {
            return isString(str)
                ? str
                    .toLowerCase()
                    .trim()
                    .replace(/[^\w\-]+/g, ' ')
                    .replace(/\s+/g, '-')
                : str;
        };
        return SlugifyPipe;
    }());
    SlugifyPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'slugify' },] }
    ];

    var CamelizePipe = /** @class */ (function () {
        function CamelizePipe() {
        }
        CamelizePipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            if (!isString(text)) {
                return text;
            }
            return text
                .toLowerCase()
                .split(/[-_\s]/g)
                .filter(function (v) { return !!v; })
                .map(function (word, key) {
                return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
            })
                .join('');
        };
        return CamelizePipe;
    }());
    CamelizePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'camelize' },] }
    ];

    var LatinisePipe = /** @class */ (function () {
        function LatinisePipe() {
            // Source: http://semplicewebsites.com/removing-accents-javascript
            // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
            this.latinMap = {
                'Á': 'A',
                'Ă': 'A',
                'Ắ': 'A',
                'Ặ': 'A',
                'Ằ': 'A',
                'Ẳ': 'A',
                'Ẵ': 'A',
                'Ǎ': 'A',
                'Â': 'A',
                'Ấ': 'A',
                'Ậ': 'A',
                'Ầ': 'A',
                'Ẩ': 'A',
                'Ẫ': 'A',
                'Ä': 'A',
                'Ǟ': 'A',
                'Ȧ': 'A',
                'Ǡ': 'A',
                'Ạ': 'A',
                'Ȁ': 'A',
                'À': 'A',
                'Ả': 'A',
                'Ȃ': 'A',
                'Ā': 'A',
                'Ą': 'A',
                'Å': 'A',
                'Ǻ': 'A',
                'Ḁ': 'A',
                'Ⱥ': 'A',
                'Ã': 'A',
                'Ꜳ': 'AA',
                'Æ': 'AE',
                'Ǽ': 'AE',
                'Ǣ': 'AE',
                'Ꜵ': 'AO',
                'Ꜷ': 'AU',
                'Ꜹ': 'AV',
                'Ꜻ': 'AV',
                'Ꜽ': 'AY',
                'Ḃ': 'B',
                'Ḅ': 'B',
                'Ɓ': 'B',
                'Ḇ': 'B',
                'Ƀ': 'B',
                'Ƃ': 'B',
                'Ć': 'C',
                'Č': 'C',
                'Ç': 'C',
                'Ḉ': 'C',
                'Ĉ': 'C',
                'Ċ': 'C',
                'Ƈ': 'C',
                'Ȼ': 'C',
                'Ď': 'D',
                'Ḑ': 'D',
                'Ḓ': 'D',
                'Ḋ': 'D',
                'Ḍ': 'D',
                'Ɗ': 'D',
                'Ḏ': 'D',
                'ǲ': 'D',
                'ǅ': 'D',
                'Đ': 'D',
                'Ƌ': 'D',
                'Ǳ': 'DZ',
                'Ǆ': 'DZ',
                'É': 'E',
                'Ĕ': 'E',
                'Ě': 'E',
                'Ȩ': 'E',
                'Ḝ': 'E',
                'Ê': 'E',
                'Ế': 'E',
                'Ệ': 'E',
                'Ề': 'E',
                'Ể': 'E',
                'Ễ': 'E',
                'Ḙ': 'E',
                'Ë': 'E',
                'Ė': 'E',
                'Ẹ': 'E',
                'Ȅ': 'E',
                'È': 'E',
                'Ẻ': 'E',
                'Ȇ': 'E',
                'Ē': 'E',
                'Ḗ': 'E',
                'Ḕ': 'E',
                'Ę': 'E',
                'Ɇ': 'E',
                'Ẽ': 'E',
                'Ḛ': 'E',
                'Ꝫ': 'ET',
                'Ḟ': 'F',
                'Ƒ': 'F',
                'Ǵ': 'G',
                'Ğ': 'G',
                'Ǧ': 'G',
                'Ģ': 'G',
                'Ĝ': 'G',
                'Ġ': 'G',
                'Ɠ': 'G',
                'Ḡ': 'G',
                'Ǥ': 'G',
                'Ḫ': 'H',
                'Ȟ': 'H',
                'Ḩ': 'H',
                'Ĥ': 'H',
                'Ⱨ': 'H',
                'Ḧ': 'H',
                'Ḣ': 'H',
                'Ḥ': 'H',
                'Ħ': 'H',
                'Í': 'I',
                'Ĭ': 'I',
                'Ǐ': 'I',
                'Î': 'I',
                'Ï': 'I',
                'Ḯ': 'I',
                'İ': 'I',
                'Ị': 'I',
                'Ȉ': 'I',
                'Ì': 'I',
                'Ỉ': 'I',
                'Ȋ': 'I',
                'Ī': 'I',
                'Į': 'I',
                'Ɨ': 'I',
                'Ĩ': 'I',
                'Ḭ': 'I',
                'Ꝺ': 'D',
                'Ꝼ': 'F',
                'Ᵹ': 'G',
                'Ꞃ': 'R',
                'Ꞅ': 'S',
                'Ꞇ': 'T',
                'Ꝭ': 'IS',
                'Ĵ': 'J',
                'Ɉ': 'J',
                'Ḱ': 'K',
                'Ǩ': 'K',
                'Ķ': 'K',
                'Ⱪ': 'K',
                'Ꝃ': 'K',
                'Ḳ': 'K',
                'Ƙ': 'K',
                'Ḵ': 'K',
                'Ꝁ': 'K',
                'Ꝅ': 'K',
                'Ĺ': 'L',
                'Ƚ': 'L',
                'Ľ': 'L',
                'Ļ': 'L',
                'Ḽ': 'L',
                'Ḷ': 'L',
                'Ḹ': 'L',
                'Ⱡ': 'L',
                'Ꝉ': 'L',
                'Ḻ': 'L',
                'Ŀ': 'L',
                'Ɫ': 'L',
                'ǈ': 'L',
                'Ł': 'L',
                'Ǉ': 'LJ',
                'Ḿ': 'M',
                'Ṁ': 'M',
                'Ṃ': 'M',
                'Ɱ': 'M',
                'Ń': 'N',
                'Ň': 'N',
                'Ņ': 'N',
                'Ṋ': 'N',
                'Ṅ': 'N',
                'Ṇ': 'N',
                'Ǹ': 'N',
                'Ɲ': 'N',
                'Ṉ': 'N',
                'Ƞ': 'N',
                'ǋ': 'N',
                'Ñ': 'N',
                'Ǌ': 'NJ',
                'Ó': 'O',
                'Ŏ': 'O',
                'Ǒ': 'O',
                'Ô': 'O',
                'Ố': 'O',
                'Ộ': 'O',
                'Ồ': 'O',
                'Ổ': 'O',
                'Ỗ': 'O',
                'Ö': 'O',
                'Ȫ': 'O',
                'Ȯ': 'O',
                'Ȱ': 'O',
                'Ọ': 'O',
                'Ő': 'O',
                'Ȍ': 'O',
                'Ò': 'O',
                'Ỏ': 'O',
                'Ơ': 'O',
                'Ớ': 'O',
                'Ợ': 'O',
                'Ờ': 'O',
                'Ở': 'O',
                'Ỡ': 'O',
                'Ȏ': 'O',
                'Ꝋ': 'O',
                'Ꝍ': 'O',
                'Ō': 'O',
                'Ṓ': 'O',
                'Ṑ': 'O',
                'Ɵ': 'O',
                'Ǫ': 'O',
                'Ǭ': 'O',
                'Ø': 'O',
                'Ǿ': 'O',
                'Õ': 'O',
                'Ṍ': 'O',
                'Ṏ': 'O',
                'Ȭ': 'O',
                'Ƣ': 'OI',
                'Ꝏ': 'OO',
                'Ɛ': 'E',
                'Ɔ': 'O',
                'Ȣ': 'OU',
                'Ṕ': 'P',
                'Ṗ': 'P',
                'Ꝓ': 'P',
                'Ƥ': 'P',
                'Ꝕ': 'P',
                'Ᵽ': 'P',
                'Ꝑ': 'P',
                'Ꝙ': 'Q',
                'Ꝗ': 'Q',
                'Ŕ': 'R',
                'Ř': 'R',
                'Ŗ': 'R',
                'Ṙ': 'R',
                'Ṛ': 'R',
                'Ṝ': 'R',
                'Ȑ': 'R',
                'Ȓ': 'R',
                'Ṟ': 'R',
                'Ɍ': 'R',
                'Ɽ': 'R',
                'Ꜿ': 'C',
                'Ǝ': 'E',
                'Ś': 'S',
                'Ṥ': 'S',
                'Š': 'S',
                'Ṧ': 'S',
                'Ş': 'S',
                'Ŝ': 'S',
                'Ș': 'S',
                'Ṡ': 'S',
                'Ṣ': 'S',
                'Ṩ': 'S',
                'ẞ': 'SS',
                'Ť': 'T',
                'Ţ': 'T',
                'Ṱ': 'T',
                'Ț': 'T',
                'Ⱦ': 'T',
                'Ṫ': 'T',
                'Ṭ': 'T',
                'Ƭ': 'T',
                'Ṯ': 'T',
                'Ʈ': 'T',
                'Ŧ': 'T',
                'Ɐ': 'A',
                'Ꞁ': 'L',
                'Ɯ': 'M',
                'Ʌ': 'V',
                'Ꜩ': 'TZ',
                'Ú': 'U',
                'Ŭ': 'U',
                'Ǔ': 'U',
                'Û': 'U',
                'Ṷ': 'U',
                'Ü': 'U',
                'Ǘ': 'U',
                'Ǚ': 'U',
                'Ǜ': 'U',
                'Ǖ': 'U',
                'Ṳ': 'U',
                'Ụ': 'U',
                'Ű': 'U',
                'Ȕ': 'U',
                'Ù': 'U',
                'Ủ': 'U',
                'Ư': 'U',
                'Ứ': 'U',
                'Ự': 'U',
                'Ừ': 'U',
                'Ử': 'U',
                'Ữ': 'U',
                'Ȗ': 'U',
                'Ū': 'U',
                'Ṻ': 'U',
                'Ų': 'U',
                'Ů': 'U',
                'Ũ': 'U',
                'Ṹ': 'U',
                'Ṵ': 'U',
                'Ꝟ': 'V',
                'Ṿ': 'V',
                'Ʋ': 'V',
                'Ṽ': 'V',
                'Ꝡ': 'VY',
                'Ẃ': 'W',
                'Ŵ': 'W',
                'Ẅ': 'W',
                'Ẇ': 'W',
                'Ẉ': 'W',
                'Ẁ': 'W',
                'Ⱳ': 'W',
                'Ẍ': 'X',
                'Ẋ': 'X',
                'Ý': 'Y',
                'Ŷ': 'Y',
                'Ÿ': 'Y',
                'Ẏ': 'Y',
                'Ỵ': 'Y',
                'Ỳ': 'Y',
                'Ƴ': 'Y',
                'Ỷ': 'Y',
                'Ỿ': 'Y',
                'Ȳ': 'Y',
                'Ɏ': 'Y',
                'Ỹ': 'Y',
                'Ź': 'Z',
                'Ž': 'Z',
                'Ẑ': 'Z',
                'Ⱬ': 'Z',
                'Ż': 'Z',
                'Ẓ': 'Z',
                'Ȥ': 'Z',
                'Ẕ': 'Z',
                'Ƶ': 'Z',
                'Ĳ': 'IJ',
                'Œ': 'OE',
                'ᴀ': 'A',
                'ᴁ': 'AE',
                'ʙ': 'B',
                'ᴃ': 'B',
                'ᴄ': 'C',
                'ᴅ': 'D',
                'ᴇ': 'E',
                'ꜰ': 'F',
                'ɢ': 'G',
                'ʛ': 'G',
                'ʜ': 'H',
                'ɪ': 'I',
                'ʁ': 'R',
                'ᴊ': 'J',
                'ᴋ': 'K',
                'ʟ': 'L',
                'ᴌ': 'L',
                'ᴍ': 'M',
                'ɴ': 'N',
                'ᴏ': 'O',
                'ɶ': 'OE',
                'ᴐ': 'O',
                'ᴕ': 'OU',
                'ᴘ': 'P',
                'ʀ': 'R',
                'ᴎ': 'N',
                'ᴙ': 'R',
                'ꜱ': 'S',
                'ᴛ': 'T',
                'ⱻ': 'E',
                'ᴚ': 'R',
                'ᴜ': 'U',
                'ᴠ': 'V',
                'ᴡ': 'W',
                'ʏ': 'Y',
                'ᴢ': 'Z',
                'á': 'a',
                'ă': 'a',
                'ắ': 'a',
                'ặ': 'a',
                'ằ': 'a',
                'ẳ': 'a',
                'ẵ': 'a',
                'ǎ': 'a',
                'â': 'a',
                'ấ': 'a',
                'ậ': 'a',
                'ầ': 'a',
                'ẩ': 'a',
                'ẫ': 'a',
                'ä': 'a',
                'ǟ': 'a',
                'ȧ': 'a',
                'ǡ': 'a',
                'ạ': 'a',
                'ȁ': 'a',
                'à': 'a',
                'ả': 'a',
                'ȃ': 'a',
                'ā': 'a',
                'ą': 'a',
                'ᶏ': 'a',
                'ẚ': 'a',
                'å': 'a',
                'ǻ': 'a',
                'ḁ': 'a',
                'ⱥ': 'a',
                'ã': 'a',
                'ꜳ': 'aa',
                'æ': 'ae',
                'ǽ': 'ae',
                'ǣ': 'ae',
                'ꜵ': 'ao',
                'ꜷ': 'au',
                'ꜹ': 'av',
                'ꜻ': 'av',
                'ꜽ': 'ay',
                'ḃ': 'b',
                'ḅ': 'b',
                'ɓ': 'b',
                'ḇ': 'b',
                'ᵬ': 'b',
                'ᶀ': 'b',
                'ƀ': 'b',
                'ƃ': 'b',
                'ɵ': 'o',
                'ć': 'c',
                'č': 'c',
                'ç': 'c',
                'ḉ': 'c',
                'ĉ': 'c',
                'ɕ': 'c',
                'ċ': 'c',
                'ƈ': 'c',
                'ȼ': 'c',
                'ď': 'd',
                'ḑ': 'd',
                'ḓ': 'd',
                'ȡ': 'd',
                'ḋ': 'd',
                'ḍ': 'd',
                'ɗ': 'd',
                'ᶑ': 'd',
                'ḏ': 'd',
                'ᵭ': 'd',
                'ᶁ': 'd',
                'đ': 'd',
                'ɖ': 'd',
                'ƌ': 'd',
                'ı': 'i',
                'ȷ': 'j',
                'ɟ': 'j',
                'ʄ': 'j',
                'ǳ': 'dz',
                'ǆ': 'dz',
                'é': 'e',
                'ĕ': 'e',
                'ě': 'e',
                'ȩ': 'e',
                'ḝ': 'e',
                'ê': 'e',
                'ế': 'e',
                'ệ': 'e',
                'ề': 'e',
                'ể': 'e',
                'ễ': 'e',
                'ḙ': 'e',
                'ë': 'e',
                'ė': 'e',
                'ẹ': 'e',
                'ȅ': 'e',
                'è': 'e',
                'ẻ': 'e',
                'ȇ': 'e',
                'ē': 'e',
                'ḗ': 'e',
                'ḕ': 'e',
                'ⱸ': 'e',
                'ę': 'e',
                'ᶒ': 'e',
                'ɇ': 'e',
                'ẽ': 'e',
                'ḛ': 'e',
                'ꝫ': 'et',
                'ḟ': 'f',
                'ƒ': 'f',
                'ᵮ': 'f',
                'ᶂ': 'f',
                'ǵ': 'g',
                'ğ': 'g',
                'ǧ': 'g',
                'ģ': 'g',
                'ĝ': 'g',
                'ġ': 'g',
                'ɠ': 'g',
                'ḡ': 'g',
                'ᶃ': 'g',
                'ǥ': 'g',
                'ḫ': 'h',
                'ȟ': 'h',
                'ḩ': 'h',
                'ĥ': 'h',
                'ⱨ': 'h',
                'ḧ': 'h',
                'ḣ': 'h',
                'ḥ': 'h',
                'ɦ': 'h',
                'ẖ': 'h',
                'ħ': 'h',
                'ƕ': 'hv',
                'í': 'i',
                'ĭ': 'i',
                'ǐ': 'i',
                'î': 'i',
                'ï': 'i',
                'ḯ': 'i',
                'ị': 'i',
                'ȉ': 'i',
                'ì': 'i',
                'ỉ': 'i',
                'ȋ': 'i',
                'ī': 'i',
                'į': 'i',
                'ᶖ': 'i',
                'ɨ': 'i',
                'ĩ': 'i',
                'ḭ': 'i',
                'ꝺ': 'd',
                'ꝼ': 'f',
                'ᵹ': 'g',
                'ꞃ': 'r',
                'ꞅ': 's',
                'ꞇ': 't',
                'ꝭ': 'is',
                'ǰ': 'j',
                'ĵ': 'j',
                'ʝ': 'j',
                'ɉ': 'j',
                'ḱ': 'k',
                'ǩ': 'k',
                'ķ': 'k',
                'ⱪ': 'k',
                'ꝃ': 'k',
                'ḳ': 'k',
                'ƙ': 'k',
                'ḵ': 'k',
                'ᶄ': 'k',
                'ꝁ': 'k',
                'ꝅ': 'k',
                'ĺ': 'l',
                'ƚ': 'l',
                'ɬ': 'l',
                'ľ': 'l',
                'ļ': 'l',
                'ḽ': 'l',
                'ȴ': 'l',
                'ḷ': 'l',
                'ḹ': 'l',
                'ⱡ': 'l',
                'ꝉ': 'l',
                'ḻ': 'l',
                'ŀ': 'l',
                'ɫ': 'l',
                'ᶅ': 'l',
                'ɭ': 'l',
                'ł': 'l',
                'ǉ': 'lj',
                'ſ': 's',
                'ẜ': 's',
                'ẛ': 's',
                'ẝ': 's',
                'ḿ': 'm',
                'ṁ': 'm',
                'ṃ': 'm',
                'ɱ': 'm',
                'ᵯ': 'm',
                'ᶆ': 'm',
                'ń': 'n',
                'ň': 'n',
                'ņ': 'n',
                'ṋ': 'n',
                'ȵ': 'n',
                'ṅ': 'n',
                'ṇ': 'n',
                'ǹ': 'n',
                'ɲ': 'n',
                'ṉ': 'n',
                'ƞ': 'n',
                'ᵰ': 'n',
                'ᶇ': 'n',
                'ɳ': 'n',
                'ñ': 'n',
                'ǌ': 'nj',
                'ó': 'o',
                'ŏ': 'o',
                'ǒ': 'o',
                'ô': 'o',
                'ố': 'o',
                'ộ': 'o',
                'ồ': 'o',
                'ổ': 'o',
                'ỗ': 'o',
                'ö': 'o',
                'ȫ': 'o',
                'ȯ': 'o',
                'ȱ': 'o',
                'ọ': 'o',
                'ő': 'o',
                'ȍ': 'o',
                'ò': 'o',
                'ỏ': 'o',
                'ơ': 'o',
                'ớ': 'o',
                'ợ': 'o',
                'ờ': 'o',
                'ở': 'o',
                'ỡ': 'o',
                'ȏ': 'o',
                'ꝋ': 'o',
                'ꝍ': 'o',
                'ⱺ': 'o',
                'ō': 'o',
                'ṓ': 'o',
                'ṑ': 'o',
                'ǫ': 'o',
                'ǭ': 'o',
                'ø': 'o',
                'ǿ': 'o',
                'õ': 'o',
                'ṍ': 'o',
                'ṏ': 'o',
                'ȭ': 'o',
                'ƣ': 'oi',
                'ꝏ': 'oo',
                'ɛ': 'e',
                'ᶓ': 'e',
                'ɔ': 'o',
                'ᶗ': 'o',
                'ȣ': 'ou',
                'ṕ': 'p',
                'ṗ': 'p',
                'ꝓ': 'p',
                'ƥ': 'p',
                'ᵱ': 'p',
                'ᶈ': 'p',
                'ꝕ': 'p',
                'ᵽ': 'p',
                'ꝑ': 'p',
                'ꝙ': 'q',
                'ʠ': 'q',
                'ɋ': 'q',
                'ꝗ': 'q',
                'ŕ': 'r',
                'ř': 'r',
                'ŗ': 'r',
                'ṙ': 'r',
                'ṛ': 'r',
                'ṝ': 'r',
                'ȑ': 'r',
                'ɾ': 'r',
                'ᵳ': 'r',
                'ȓ': 'r',
                'ṟ': 'r',
                'ɼ': 'r',
                'ᵲ': 'r',
                'ᶉ': 'r',
                'ɍ': 'r',
                'ɽ': 'r',
                'ↄ': 'c',
                'ꜿ': 'c',
                'ɘ': 'e',
                'ɿ': 'r',
                'ś': 's',
                'ṥ': 's',
                'š': 's',
                'ṧ': 's',
                'ş': 's',
                'ŝ': 's',
                'ș': 's',
                'ṡ': 's',
                'ṣ': 's',
                'ṩ': 's',
                'ʂ': 's',
                'ᵴ': 's',
                'ᶊ': 's',
                'ȿ': 's',
                'ɡ': 'g',
                'ß': 'ss',
                'ᴑ': 'o',
                'ᴓ': 'o',
                'ᴝ': 'u',
                'ť': 't',
                'ţ': 't',
                'ṱ': 't',
                'ț': 't',
                'ȶ': 't',
                'ẗ': 't',
                'ⱦ': 't',
                'ṫ': 't',
                'ṭ': 't',
                'ƭ': 't',
                'ṯ': 't',
                'ᵵ': 't',
                'ƫ': 't',
                'ʈ': 't',
                'ŧ': 't',
                'ᵺ': 'th',
                'ɐ': 'a',
                'ᴂ': 'ae',
                'ǝ': 'e',
                'ᵷ': 'g',
                'ɥ': 'h',
                'ʮ': 'h',
                'ʯ': 'h',
                'ᴉ': 'i',
                'ʞ': 'k',
                'ꞁ': 'l',
                'ɯ': 'm',
                'ɰ': 'm',
                'ᴔ': 'oe',
                'ɹ': 'r',
                'ɻ': 'r',
                'ɺ': 'r',
                'ⱹ': 'r',
                'ʇ': 't',
                'ʌ': 'v',
                'ʍ': 'w',
                'ʎ': 'y',
                'ꜩ': 'tz',
                'ú': 'u',
                'ŭ': 'u',
                'ǔ': 'u',
                'û': 'u',
                'ṷ': 'u',
                'ü': 'u',
                'ǘ': 'u',
                'ǚ': 'u',
                'ǜ': 'u',
                'ǖ': 'u',
                'ṳ': 'u',
                'ụ': 'u',
                'ű': 'u',
                'ȕ': 'u',
                'ù': 'u',
                'ủ': 'u',
                'ư': 'u',
                'ứ': 'u',
                'ự': 'u',
                'ừ': 'u',
                'ử': 'u',
                'ữ': 'u',
                'ȗ': 'u',
                'ū': 'u',
                'ṻ': 'u',
                'ų': 'u',
                'ᶙ': 'u',
                'ů': 'u',
                'ũ': 'u',
                'ṹ': 'u',
                'ṵ': 'u',
                'ᵫ': 'ue',
                'ꝸ': 'um',
                'ⱴ': 'v',
                'ꝟ': 'v',
                'ṿ': 'v',
                'ʋ': 'v',
                'ᶌ': 'v',
                'ⱱ': 'v',
                'ṽ': 'v',
                'ꝡ': 'vy',
                'ẃ': 'w',
                'ŵ': 'w',
                'ẅ': 'w',
                'ẇ': 'w',
                'ẉ': 'w',
                'ẁ': 'w',
                'ⱳ': 'w',
                'ẘ': 'w',
                'ẍ': 'x',
                'ẋ': 'x',
                'ᶍ': 'x',
                'ý': 'y',
                'ŷ': 'y',
                'ÿ': 'y',
                'ẏ': 'y',
                'ỵ': 'y',
                'ỳ': 'y',
                'ƴ': 'y',
                'ỷ': 'y',
                'ỿ': 'y',
                'ȳ': 'y',
                'ẙ': 'y',
                'ɏ': 'y',
                'ỹ': 'y',
                'ź': 'z',
                'ž': 'z',
                'ẑ': 'z',
                'ʑ': 'z',
                'ⱬ': 'z',
                'ż': 'z',
                'ẓ': 'z',
                'ȥ': 'z',
                'ẕ': 'z',
                'ᵶ': 'z',
                'ᶎ': 'z',
                'ʐ': 'z',
                'ƶ': 'z',
                'ɀ': 'z',
                'ﬀ': 'ff',
                'ﬃ': 'ffi',
                'ﬄ': 'ffl',
                'ﬁ': 'fi',
                'ﬂ': 'fl',
                'ĳ': 'ij',
                'œ': 'oe',
                'ﬆ': 'st',
                'ₐ': 'a',
                'ₑ': 'e',
                'ᵢ': 'i',
                'ⱼ': 'j',
                'ₒ': 'o',
                'ᵣ': 'r',
                'ᵤ': 'u',
                'ᵥ': 'v',
                'ₓ': 'x',
            };
        }
        LatinisePipe.prototype.transform = function (text, chars) {
            var _this = this;
            if (chars === void 0) { chars = '\\s'; }
            return isString(text)
                ? text.replace(/[^A-Za-z0-9]/g, function (key) {
                    return _this.latinMap[key] || key;
                })
                : text;
        };
        return LatinisePipe;
    }());
    LatinisePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'latinise' },] }
    ];

    var LinesPipe = /** @class */ (function () {
        function LinesPipe() {
        }
        LinesPipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
        };
        return LinesPipe;
    }());
    LinesPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'lines' },] }
    ];

    var UnderscorePipe = /** @class */ (function () {
        function UnderscorePipe() {
        }
        UnderscorePipe.prototype.transform = function (text, chars) {
            if (chars === void 0) { chars = '\\s'; }
            return isString(text)
                ? text
                    .trim()
                    .replace(/\s+/g, '')
                    .replace(/[A-Z]/g, function (c, k) {
                    return k ? "_" + c.toLowerCase() : c.toLowerCase();
                })
                : text;
        };
        return UnderscorePipe;
    }());
    UnderscorePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'underscore' },] }
    ];

    var MatchPipe = /** @class */ (function () {
        function MatchPipe() {
        }
        MatchPipe.prototype.transform = function (text, pattern, flags) {
            if (!isString(text)) {
                return text;
            }
            return text.match(new RegExp(pattern, flags));
        };
        return MatchPipe;
    }());
    MatchPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'match' },] }
    ];

    var TestPipe = /** @class */ (function () {
        function TestPipe() {
        }
        TestPipe.prototype.transform = function (text, pattern, flags) {
            if (!isString(text)) {
                return text;
            }
            return new RegExp(pattern, flags).test(text);
        };
        return TestPipe;
    }());
    TestPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'test' },] }
    ];

    var LeftPadPipe = /** @class */ (function () {
        function LeftPadPipe() {
        }
        LeftPadPipe.prototype.transform = function (str, length, padCharacter) {
            if (padCharacter === void 0) { padCharacter = ' '; }
            if (!isString(str) || str.length >= length) {
                return str;
            }
            while (str.length < length) {
                str = padCharacter + str;
            }
            return str;
        };
        return LeftPadPipe;
    }());
    LeftPadPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'lpad' },] }
    ];

    var RightPadPipe = /** @class */ (function () {
        function RightPadPipe() {
        }
        RightPadPipe.prototype.transform = function (str, length, padCharacter) {
            if (length === void 0) { length = 1; }
            if (padCharacter === void 0) { padCharacter = ' '; }
            if (!isString(str) || str.length >= length) {
                return str;
            }
            while (str.length < length) {
                str = str + padCharacter;
            }
            return str;
        };
        return RightPadPipe;
    }());
    RightPadPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'rpad' },] }
    ];

    /**
     * Takes a singular entity string and pluralizes it.
     * Uses both naive and holdout-list approaches.
     * If several words appear in the string, only the last word is pluralized -- this
     * means that if "your story" was passed in, "your stories" would be passed out.
     *
     * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
     *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
     * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
     *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
     *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
     */
    var MakePluralStringPipe = /** @class */ (function () {
        function MakePluralStringPipe() {
            this.irregularMap = {
                addendum: 'addenda',
                alga: 'algae',
                alumna: 'alumnae',
                alumnus: 'alumni',
                analysis: 'analyses',
                antenna: 'antennae',
                appendix: 'appendices',
                aquarium: 'aquaria',
                arch: 'arches',
                axe: 'axes',
                axis: 'axes',
                bacillus: 'bacilli',
                bacterium: 'bacteria',
                basis: 'bases',
                batch: 'batches',
                beach: 'beaches',
                beau: 'beaux',
                bison: 'bison',
                brush: 'brushes',
                buffalo: 'buffaloes',
                bureau: 'bureaus',
                bus: 'busses',
                cactus: 'cacti',
                calf: 'calves',
                chateau: 'chateaux',
                cherry: 'cherries',
                child: 'children',
                church: 'churches',
                circus: 'circuses',
                cod: 'cod',
                corps: 'corps',
                corpus: 'corpora',
                crisis: 'crises',
                criterion: 'criteria',
                curriculum: 'curricula',
                datum: 'data',
                deer: 'deer',
                diagnosis: 'diagnoses',
                die: 'dice',
                domino: 'dominoes',
                dwarf: 'dwarves',
                echo: 'echoes',
                elf: 'elves',
                ellipsis: 'ellipses',
                embargo: 'embargoes',
                emphasis: 'emphases',
                erratum: 'errata',
                fax: 'faxes',
                fireman: 'firemen',
                fish: 'fish',
                flush: 'flushes',
                focus: 'foci',
                foot: 'feet',
                formula: 'formulas',
                fungus: 'fungi',
                genus: 'genera',
                goose: 'geese',
                grafito: 'grafiti',
                half: 'halves',
                hero: 'heroes',
                hoax: 'hoaxes',
                hoof: 'hooves',
                hypothesis: 'hypotheses',
                index: 'indices',
                kiss: 'kisses',
                knife: 'knives',
                leaf: 'leaves',
                life: 'lives',
                loaf: 'loaves',
                louse: 'lice',
                man: 'men',
                mango: 'mangoes',
                matrix: 'matrices',
                means: 'means',
                medium: 'media',
                memorandum: 'memoranda',
                millennium: 'milennia',
                moose: 'moose',
                mosquito: 'mosquitoes',
                motto: 'mottoes',
                mouse: 'mice',
                nebula: 'nebulae',
                neurosis: 'neuroses',
                nucleus: 'nuclei',
                oasis: 'oases',
                octopus: 'octopodes',
                ovum: 'ova',
                ox: 'oxen',
                paralysis: 'paralyses',
                parenthesis: 'parentheses',
                person: 'people',
                phenomenon: 'phenomena',
                plateau: 'plateaux',
                potato: 'potatoes',
                quiz: 'quizzes',
                radius: 'radii',
                reflex: 'reflexes',
                'runner-up': 'runners-up',
                scampo: 'scampi',
                scarf: 'scarves',
                scissors: 'scissors',
                scratch: 'scratches',
                self: 'selves',
                series: 'series',
                sheaf: 'sheaves',
                sheep: 'sheep',
                shelf: 'shelves',
                'son-in-law': 'sons-in-law',
                species: 'species',
                splash: 'splashes',
                stimulus: 'stimuli',
                stitch: 'stitches',
                stratum: 'strata',
                syllabus: 'syllabi',
                symposium: 'symposia',
                synopsis: 'synopses',
                synthesis: 'syntheses',
                tableau: 'tableaux',
                tax: 'taxes',
                that: 'those',
                thesis: 'theses',
                thief: 'thieves',
                this: 'these',
                tomato: 'tomatoes',
                tooth: 'teeth',
                tornado: 'tornadoes',
                torpedo: 'torpedoes',
                vertebra: 'vertebrae',
                veto: 'vetoes',
                vita: 'vitae',
                volcano: 'volcanoes',
                waltz: 'waltzes',
                wash: 'washes',
                watch: 'watches',
                wharf: 'wharves',
                wife: 'wives',
                wolf: 'wolves',
                woman: 'women',
                zero: 'zeroes',
            };
        }
        MakePluralStringPipe.prototype.transform = function (singularEntity, quantity) {
            if (quantity === void 0) { quantity = 0; }
            if (!singularEntity || singularEntity === '') {
                return '';
            }
            if (quantity === 1) {
                return singularEntity;
            }
            else {
                var lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
                if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                    if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                        return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                    }
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
                }
                else if (lastWord[lastWord.length - 1] === 'y') {
                    // Naive approach:
                    // consonant+y = word - 'y' +'ies'
                    // vowel+y = word + 's'
                    return isVowel(lastWord[lastWord.length - 2])
                        ? singularEntity + 's'
                        : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
                }
                else if (lastWord[lastWord.length - 1] === 's') {
                    return singularEntity + 'es';
                }
                else {
                    return singularEntity + 's';
                }
            }
        };
        return MakePluralStringPipe;
    }());
    MakePluralStringPipe.decorators = [
        { type: core.Pipe, args: [{
                    name: 'makePluralString',
                },] }
    ];

    var WrapPipe = /** @class */ (function () {
        function WrapPipe() {
        }
        WrapPipe.prototype.transform = function (str, prefix, suffix) {
            if (prefix === void 0) { prefix = ''; }
            if (suffix === void 0) { suffix = ''; }
            if (!isString(str)) {
                return str;
            }
            return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
        };
        return WrapPipe;
    }());
    WrapPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'wrap' },] }
    ];

    var STRING_PIPES = [
        AorAnPipe,
        LeftTrimPipe,
        RepeatPipe,
        RightTrimPipe,
        ScanPipe,
        ShortenPipe,
        StripTagsPipe,
        TrimPipe,
        UcFirstPipe,
        UcWordsPipe,
        SlugifyPipe,
        CamelizePipe,
        LatinisePipe,
        LinesPipe,
        UnderscorePipe,
        MatchPipe,
        TestPipe,
        LeftPadPipe,
        RightPadPipe,
        MakePluralStringPipe,
        WrapPipe,
    ];
    var NgStringPipesModule = /** @class */ (function () {
        function NgStringPipesModule() {
        }
        return NgStringPipesModule;
    }());
    NgStringPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: STRING_PIPES,
                    imports: [],
                    exports: STRING_PIPES,
                },] }
    ];

    var MaxPipe = /** @class */ (function () {
        function MaxPipe() {
        }
        MaxPipe.prototype.transform = function (arr) {
            return Array.isArray(arr) ? Math.max.apply(Math, __spreadArray([], __read(arr))) : arr;
        };
        return MaxPipe;
    }());
    MaxPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'max' },] }
    ];

    var MinPipe = /** @class */ (function () {
        function MinPipe() {
        }
        MinPipe.prototype.transform = function (arr) {
            return Array.isArray(arr) ? Math.min.apply(Math, __spreadArray([], __read(arr))) : arr;
        };
        return MinPipe;
    }());
    MinPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'min' },] }
    ];

    var PercentagePipe = /** @class */ (function () {
        function PercentagePipe() {
        }
        PercentagePipe.prototype.transform = function (num, total, floor) {
            if (total === void 0) { total = 100; }
            if (floor === void 0) { floor = false; }
            if (isNaN(num)) {
                return num;
            }
            var percent = (num * 100) / total;
            return floor ? Math.floor(percent) : percent;
        };
        return PercentagePipe;
    }());
    PercentagePipe.decorators = [
        { type: core.Pipe, args: [{ name: 'percentage' },] }
    ];

    var SumPipe = /** @class */ (function () {
        function SumPipe() {
        }
        SumPipe.prototype.transform = function (arr) {
            return Array.isArray(arr) ? arr.reduce(function (sum, curr) { return sum + curr; }, 0) : arr;
        };
        return SumPipe;
    }());
    SumPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sum' },] }
    ];

    var FloorPipe = /** @class */ (function () {
        function FloorPipe() {
        }
        FloorPipe.prototype.transform = function (num, precision) {
            if (precision === void 0) { precision = 0; }
            if (precision <= 0) {
                return Math.floor(num);
            }
            var tho = Math.pow(10, precision);
            return Math.floor(num * tho) / tho;
        };
        return FloorPipe;
    }());
    FloorPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'floor' },] }
    ];

    var RoundPipe = /** @class */ (function () {
        function RoundPipe() {
        }
        RoundPipe.prototype.transform = function (num, precision) {
            if (precision === void 0) { precision = 0; }
            return applyPrecision(num, precision);
        };
        return RoundPipe;
    }());
    RoundPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'round' },] }
    ];

    var SqrtPipe = /** @class */ (function () {
        function SqrtPipe() {
        }
        SqrtPipe.prototype.transform = function (num) {
            return !isNaN(num) ? Math.sqrt(num) : num;
        };
        return SqrtPipe;
    }());
    SqrtPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'sqrt' },] }
    ];

    var PowerPipe = /** @class */ (function () {
        function PowerPipe() {
        }
        PowerPipe.prototype.transform = function (num, power) {
            if (power === void 0) { power = 2; }
            return !isNaN(num) ? Math.pow(num, power) : num;
        };
        return PowerPipe;
    }());
    PowerPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'pow' },] }
    ];

    var CeilPipe = /** @class */ (function () {
        function CeilPipe() {
        }
        CeilPipe.prototype.transform = function (num, precision) {
            if (precision === void 0) { precision = 0; }
            if (precision <= 0) {
                return Math.ceil(num);
            }
            var tho = Math.pow(10, precision);
            return Math.ceil(num * tho) / tho;
        };
        return CeilPipe;
    }());
    CeilPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'ceil' },] }
    ];

    var DegreesPipe = /** @class */ (function () {
        function DegreesPipe() {
        }
        DegreesPipe.prototype.transform = function (radians) {
            if (!isNumberFinite(radians)) {
                return NaN;
            }
            return (radians * 180) / Math.PI;
        };
        return DegreesPipe;
    }());
    DegreesPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'degrees' },] }
    ];

    var BytesPipe = /** @class */ (function () {
        function BytesPipe() {
            this.dictionary = [
                { max: 1024, type: 'B' },
                { max: 1048576, type: 'KB' },
                { max: 1073741824, type: 'MB' },
                { max: 1.0995116e12, type: 'GB' },
            ];
        }
        BytesPipe.prototype.transform = function (value, precision) {
            if (!isNumberFinite(value)) {
                return NaN;
            }
            var format = this.dictionary.find(function (d) { return value < d.max; }) || this.dictionary[this.dictionary.length - 1];
            var calc = value / (format.max / 1024);
            var num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
            return num + " " + format.type;
        };
        return BytesPipe;
    }());
    BytesPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'bytes' },] }
    ];

    var RadiansPipe = /** @class */ (function () {
        function RadiansPipe() {
        }
        RadiansPipe.prototype.transform = function (degrees) {
            if (!isNumberFinite(degrees)) {
                return NaN;
            }
            return (degrees * Math.PI) / 180;
        };
        return RadiansPipe;
    }());
    RadiansPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'radians' },] }
    ];

    var MATH_PIPES = [
        MaxPipe,
        MinPipe,
        PercentagePipe,
        SumPipe,
        FloorPipe,
        RoundPipe,
        SqrtPipe,
        PowerPipe,
        CeilPipe,
        DegreesPipe,
        BytesPipe,
        RadiansPipe,
    ];
    var NgMathPipesModule = /** @class */ (function () {
        function NgMathPipesModule() {
        }
        return NgMathPipesModule;
    }());
    NgMathPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: MATH_PIPES,
                    imports: [],
                    exports: MATH_PIPES,
                },] }
    ];

    var IsDefinedPipe = /** @class */ (function () {
        function IsDefinedPipe() {
        }
        IsDefinedPipe.prototype.transform = function (input) {
            return !isUndefined(input);
        };
        return IsDefinedPipe;
    }());
    IsDefinedPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isDefined' },] }
    ];

    var IsNullPipe = /** @class */ (function () {
        function IsNullPipe() {
        }
        IsNullPipe.prototype.transform = function (input) {
            return input === null;
        };
        return IsNullPipe;
    }());
    IsNullPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isNull' },] }
    ];

    var IsUndefinedPipe = /** @class */ (function () {
        function IsUndefinedPipe() {
        }
        IsUndefinedPipe.prototype.transform = function (input) {
            return isUndefined(input);
        };
        return IsUndefinedPipe;
    }());
    IsUndefinedPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isUndefined' },] }
    ];

    var IsStringPipe = /** @class */ (function () {
        function IsStringPipe() {
        }
        IsStringPipe.prototype.transform = function (input) {
            return isString(input);
        };
        return IsStringPipe;
    }());
    IsStringPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isString' },] }
    ];

    var IsFunctionPipe = /** @class */ (function () {
        function IsFunctionPipe() {
        }
        IsFunctionPipe.prototype.transform = function (input) {
            return isFunction(input);
        };
        return IsFunctionPipe;
    }());
    IsFunctionPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isFunction' },] }
    ];

    var IsNumberPipe = /** @class */ (function () {
        function IsNumberPipe() {
        }
        IsNumberPipe.prototype.transform = function (input) {
            return isNumber(input);
        };
        return IsNumberPipe;
    }());
    IsNumberPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isNumber' },] }
    ];

    var IsArrayPipe = /** @class */ (function () {
        function IsArrayPipe() {
        }
        IsArrayPipe.prototype.transform = function (input) {
            return Array.isArray(input);
        };
        return IsArrayPipe;
    }());
    IsArrayPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isArray' },] }
    ];

    var IsObjectPipe = /** @class */ (function () {
        function IsObjectPipe() {
        }
        IsObjectPipe.prototype.transform = function (input) {
            return isObject(input);
        };
        return IsObjectPipe;
    }());
    IsObjectPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isObject' },] }
    ];

    var IsGreaterEqualThanPipe = /** @class */ (function () {
        function IsGreaterEqualThanPipe() {
        }
        IsGreaterEqualThanPipe.prototype.transform = function (input, other) {
            return input >= other;
        };
        return IsGreaterEqualThanPipe;
    }());
    IsGreaterEqualThanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isGreaterEqualThan' },] }
    ];

    var IsGreaterThanPipe = /** @class */ (function () {
        function IsGreaterThanPipe() {
        }
        IsGreaterThanPipe.prototype.transform = function (input, other) {
            return input > other;
        };
        return IsGreaterThanPipe;
    }());
    IsGreaterThanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isGreaterThan' },] }
    ];

    var IsLessEqualThanPipe = /** @class */ (function () {
        function IsLessEqualThanPipe() {
        }
        IsLessEqualThanPipe.prototype.transform = function (input, other) {
            return input <= other;
        };
        return IsLessEqualThanPipe;
    }());
    IsLessEqualThanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isLessEqualThan' },] }
    ];

    var IsEqualToPipe = /** @class */ (function () {
        function IsEqualToPipe() {
        }
        IsEqualToPipe.prototype.transform = function (input, other) {
            // tslint:disable-next-line:triple-equals
            return input == other;
        };
        return IsEqualToPipe;
    }());
    IsEqualToPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isEqualTo' },] }
    ];

    var IsNotEqualToPipe = /** @class */ (function () {
        function IsNotEqualToPipe() {
        }
        IsNotEqualToPipe.prototype.transform = function (input, other) {
            // tslint:disable-next-line:triple-equals
            return input != other;
        };
        return IsNotEqualToPipe;
    }());
    IsNotEqualToPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isNotEqualTo' },] }
    ];

    var IsIdenticalToPipe = /** @class */ (function () {
        function IsIdenticalToPipe() {
        }
        IsIdenticalToPipe.prototype.transform = function (input, other) {
            return input === other;
        };
        return IsIdenticalToPipe;
    }());
    IsIdenticalToPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isIdenticalTo' },] }
    ];

    var IsNotIdenticalToPipe = /** @class */ (function () {
        function IsNotIdenticalToPipe() {
        }
        IsNotIdenticalToPipe.prototype.transform = function (input, other) {
            return input !== other;
        };
        return IsNotIdenticalToPipe;
    }());
    IsNotIdenticalToPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isNotIdenticalTo' },] }
    ];

    var IsLessThanPipe = /** @class */ (function () {
        function IsLessThanPipe() {
        }
        IsLessThanPipe.prototype.transform = function (input, other) {
            return input < other;
        };
        return IsLessThanPipe;
    }());
    IsLessThanPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'isLessThan' },] }
    ];

    var BOOLEAN_PIPES = [
        IsDefinedPipe,
        IsNullPipe,
        IsUndefinedPipe,
        IsStringPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsArrayPipe,
        IsObjectPipe,
        IsGreaterEqualThanPipe,
        IsGreaterThanPipe,
        IsLessEqualThanPipe,
        IsLessEqualThanPipe,
        IsEqualToPipe,
        IsNotEqualToPipe,
        IsIdenticalToPipe,
        IsNotIdenticalToPipe,
        IsLessThanPipe,
    ];
    var NgBooleanPipesModule = /** @class */ (function () {
        function NgBooleanPipesModule() {
        }
        return NgBooleanPipesModule;
    }());
    NgBooleanPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: BOOLEAN_PIPES,
                    imports: [],
                    exports: BOOLEAN_PIPES,
                },] }
    ];

    var TimeAgoPipe = /** @class */ (function () {
        function TimeAgoPipe() {
        }
        /**
         * @param inputDate: Date | Moment - not included as TypeScript interface,
         * in order to keep `ngx-pipes` "pure" from dependencies!
         */
        TimeAgoPipe.prototype.transform = function (inputDate) {
            if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
                return 'Invalid date';
            }
            var past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
            var now = +new Date();
            if (past > now) {
                return 'in the future';
            }
            for (var i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
                var elm = TimeAgoPipe.MAPPER[i];
                var unit = Math.floor(ms / (div /= elm.div));
                if (unit >= 1) {
                    return unit === 1 ? elm.single : unit + " " + elm.many + " ago";
                }
            }
            return 'just now';
        };
        return TimeAgoPipe;
    }());
    TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
    TimeAgoPipe.MAPPER = [
        { single: 'last year', many: 'years', div: 1 },
        { single: 'last month', many: 'months', div: 12 },
        { single: 'last week', many: 'weeks', div: 4 },
        { single: 'yesterday', many: 'days', div: 7 },
        { single: 'an hour ago', many: 'hours', div: 24 },
        { single: 'just now', many: 'minutes', div: 60 },
    ];
    TimeAgoPipe.decorators = [
        { type: core.Pipe, args: [{ name: 'timeAgo' },] }
    ];

    var DATE_PIPES = [TimeAgoPipe];
    var NgDatePipesModule = /** @class */ (function () {
        function NgDatePipesModule() {
        }
        return NgDatePipesModule;
    }());
    NgDatePipesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: DATE_PIPES,
                    imports: [],
                    exports: DATE_PIPES,
                },] }
    ];

    var NgPipesModule = /** @class */ (function () {
        function NgPipesModule() {
        }
        return NgPipesModule;
    }());
    NgPipesModule.decorators = [
        { type: core.NgModule, args: [{
                    exports: [
                        NgArrayPipesModule,
                        NgStringPipesModule,
                        NgMathPipesModule,
                        NgBooleanPipesModule,
                        NgObjectPipesModule,
                        NgDatePipesModule,
                    ],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AorAnPipe = AorAnPipe;
    exports.BOOLEAN_PIPES = BOOLEAN_PIPES;
    exports.BytesPipe = BytesPipe;
    exports.CamelizePipe = CamelizePipe;
    exports.CeilPipe = CeilPipe;
    exports.ChunkPipe = ChunkPipe;
    exports.DATE_PIPES = DATE_PIPES;
    exports.DegreesPipe = DegreesPipe;
    exports.DiffObjPipe = DiffObjPipe;
    exports.DiffPipe = DiffPipe;
    exports.EveryPipe = EveryPipe;
    exports.FilterByImpurePipe = FilterByImpurePipe;
    exports.FilterByPipe = FilterByPipe;
    exports.FlattenPipe = FlattenPipe;
    exports.FloorPipe = FloorPipe;
    exports.FromPairsPipe = FromPairsPipe;
    exports.GroupByImpurePipe = GroupByImpurePipe;
    exports.GroupByPipe = GroupByPipe;
    exports.InitialPipe = InitialPipe;
    exports.IntersectionPipe = IntersectionPipe;
    exports.InvertByPipe = InvertByPipe;
    exports.InvertPipe = InvertPipe;
    exports.IsArrayPipe = IsArrayPipe;
    exports.IsDefinedPipe = IsDefinedPipe;
    exports.IsEqualToPipe = IsEqualToPipe;
    exports.IsFunctionPipe = IsFunctionPipe;
    exports.IsGreaterEqualThanPipe = IsGreaterEqualThanPipe;
    exports.IsGreaterThanPipe = IsGreaterThanPipe;
    exports.IsIdenticalToPipe = IsIdenticalToPipe;
    exports.IsLessEqualThanPipe = IsLessEqualThanPipe;
    exports.IsLessThanPipe = IsLessThanPipe;
    exports.IsNotEqualToPipe = IsNotEqualToPipe;
    exports.IsNotIdenticalToPipe = IsNotIdenticalToPipe;
    exports.IsNullPipe = IsNullPipe;
    exports.IsNumberPipe = IsNumberPipe;
    exports.IsObjectPipe = IsObjectPipe;
    exports.IsStringPipe = IsStringPipe;
    exports.IsUndefinedPipe = IsUndefinedPipe;
    exports.KeysPipe = KeysPipe;
    exports.LatinisePipe = LatinisePipe;
    exports.LeftPadPipe = LeftPadPipe;
    exports.LeftTrimPipe = LeftTrimPipe;
    exports.LinesPipe = LinesPipe;
    exports.MATH_PIPES = MATH_PIPES;
    exports.MakePluralStringPipe = MakePluralStringPipe;
    exports.MatchPipe = MatchPipe;
    exports.MaxPipe = MaxPipe;
    exports.MinPipe = MinPipe;
    exports.NgArrayPipesModule = NgArrayPipesModule;
    exports.NgBooleanPipesModule = NgBooleanPipesModule;
    exports.NgDatePipesModule = NgDatePipesModule;
    exports.NgMathPipesModule = NgMathPipesModule;
    exports.NgObjectPipesModule = NgObjectPipesModule;
    exports.NgPipesModule = NgPipesModule;
    exports.NgStringPipesModule = NgStringPipesModule;
    exports.OmitPipe = OmitPipe;
    exports.OrderByImpurePipe = OrderByImpurePipe;
    exports.OrderByPipe = OrderByPipe;
    exports.PairsPipe = PairsPipe;
    exports.PercentagePipe = PercentagePipe;
    exports.PickPipe = PickPipe;
    exports.PluckPipe = PluckPipe;
    exports.PowerPipe = PowerPipe;
    exports.RadiansPipe = RadiansPipe;
    exports.RangePipe = RangePipe;
    exports.RepeatPipe = RepeatPipe;
    exports.ReversePipe = ReversePipe;
    exports.RightPadPipe = RightPadPipe;
    exports.RightTrimPipe = RightTrimPipe;
    exports.RoundPipe = RoundPipe;
    exports.STRING_PIPES = STRING_PIPES;
    exports.SamplePipe = SamplePipe;
    exports.ScanPipe = ScanPipe;
    exports.ShortenPipe = ShortenPipe;
    exports.ShufflePipe = ShufflePipe;
    exports.SlugifyPipe = SlugifyPipe;
    exports.SomePipe = SomePipe;
    exports.SqrtPipe = SqrtPipe;
    exports.StripTagsPipe = StripTagsPipe;
    exports.SumPipe = SumPipe;
    exports.TailPipe = TailPipe;
    exports.TestPipe = TestPipe;
    exports.TimeAgoPipe = TimeAgoPipe;
    exports.TrimPipe = TrimPipe;
    exports.TrurthifyPipe = TrurthifyPipe;
    exports.UcFirstPipe = UcFirstPipe;
    exports.UcWordsPipe = UcWordsPipe;
    exports.UnderscorePipe = UnderscorePipe;
    exports.UnionPipe = UnionPipe;
    exports.UniquePipe = UniquePipe;
    exports.ValuesPipe = ValuesPipe;
    exports.WithoutPipe = WithoutPipe;
    exports.WrapPipe = WrapPipe;
    exports.ɵa = isString;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-pipes.umd.js.map
