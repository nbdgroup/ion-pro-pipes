import { Pipe, NgModule } from '@angular/core';

class DiffPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((d, c) => d.filter((e) => !~c.indexOf(e)), input);
    }
}
DiffPipe.decorators = [
    { type: Pipe, args: [{ name: 'diff' },] }
];

class InitialPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    }
}
InitialPipe.decorators = [
    { type: Pipe, args: [{ name: 'initial' },] }
];

class FlattenPipe {
    transform(input, shallow = false) {
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    }
    flatten(array) {
        return array.reduce((arr, elm) => {
            if (Array.isArray(elm)) {
                return arr.concat(this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    }
}
FlattenPipe.decorators = [
    { type: Pipe, args: [{ name: 'flatten' },] }
];

class IntersectionPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((n, c) => n.filter((e) => !!~c.indexOf(e)), input);
    }
}
IntersectionPipe.decorators = [
    { type: Pipe, args: [{ name: 'intersection' },] }
];

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
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
function ucFirst(text) {
    const [part, ...split] = text.split(/\s/g);
    const ucd = part
        .toLowerCase()
        .split(/(?=['|-])/g)
        .map((word) => word.indexOf('-') + word.indexOf("'") > -2
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');
    return [ucd, ...split].join(' ');
}
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    const tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
function extractDeepPropertyByMapKey(obj, map) {
    const keys = map.split('.');
    const head = keys.shift();
    return keys.reduce((prop, key) => {
        return !isUndefined(prop) && !isNull(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
}
function extractDeepPropertyByParentMapKey(obj, map) {
    const keys = map.split('.');
    const tail = keys.pop();
    const props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props, tail };
}
function getKeysTwoObjects(obj, other) {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
}
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every((key) => {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
}
ReversePipe.decorators = [
    { type: Pipe, args: [{ name: 'reverse' },] }
];

class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
}
TailPipe.decorators = [
    { type: Pipe, args: [{ name: 'tail' },] }
];

class TrurthifyPipe {
    transform(input) {
        return Array.isArray(input) ? input.filter(e => !!e) : input;
    }
}
TrurthifyPipe.decorators = [
    { type: Pipe, args: [{ name: 'truthify' },] }
];

class UnionPipe {
    transform(input, args = []) {
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce((newArr, currArr) => {
            return newArr.concat(currArr.reduce((noDupArr, curr) => {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    }
}
UnionPipe.decorators = [
    { type: Pipe, args: [{ name: 'union' },] }
];

class UniquePipe {
    transform(input, propertyName) {
        const uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter((e, i) => input.indexOf(e) === i)
                : input.filter((e, i) => {
                    let value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    }
}
UniquePipe.decorators = [
    { type: Pipe, args: [{ name: 'unique' },] }
];

class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
}
WithoutPipe.decorators = [
    { type: Pipe, args: [{ name: 'without' },] }
];

class PluckPipe {
    transform(input, map) {
        if (Array.isArray(input)) {
            return input.map(e => extractDeepPropertyByMapKey(e, map));
        }
        return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
    }
}
PluckPipe.decorators = [
    { type: Pipe, args: [{ name: 'pluck', pure: false },] }
];

class ShufflePipe {
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        const shuffled = [...input];
        const n = input.length - 1;
        for (let i = 0; i < n; ++i) {
            const j = Math.floor(Math.random() * (n - i + 1)) + i;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
}
ShufflePipe.decorators = [
    { type: Pipe, args: [{ name: 'shuffle' },] }
];

class EveryPipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    }
}
EveryPipe.decorators = [
    { type: Pipe, args: [{ name: 'every' },] }
];

class SomePipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    }
}
SomePipe.decorators = [
    { type: Pipe, args: [{ name: 'some' },] }
];

class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
}
SamplePipe.decorators = [
    { type: Pipe, args: [{ name: 'sample' },] }
];

class GroupByPipe {
    transform(input, discriminator = [], delimiter = '|') {
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    }
    groupBy(list, discriminator, delimiter) {
        return list.reduce((acc, payload) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    }
    extractKeyByDiscriminator(discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return discriminator(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, discriminator);
    }
}
GroupByPipe.decorators = [
    { type: Pipe, args: [{ name: 'groupBy' },] }
];

// tslint:disable no-bitwise
class FilterByPipe {
    transform(input, props, search = '', strict = false, reverse = false) {
        if (!Array.isArray(input) ||
            (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        const terms = String(search)
            .toLowerCase()
            .split(',');
        return input.filter(obj => {
            return props.some(prop => {
                return terms.some(term => {
                    const value = extractDeepPropertyByMapKey(obj, prop);
                    /* tslint:disable */
                    const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);
                    if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                        return props.some(parent => {
                            const str = String(parent[tail]).toLowerCase();
                            return reverse ? (strict ? str !== term : ~str.indexOf(term)) : (strict ? str === term : !!~str.indexOf(term));
                        });
                    }
                    if (isUndefined(value)) {
                        return false;
                    }
                    const strValue = String(value).toLowerCase();
                    return reverse ? (strict ? term !== strValue : ~strValue.indexOf(term)) : (strict ? term === strValue : !!~strValue.indexOf(term));
                });
            });
        });
    }
}
FilterByPipe.decorators = [
    { type: Pipe, args: [{ name: 'filterBy' },] }
];

class OrderByPipe {
    transform(input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        const out = [...input];
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort((a, b) => {
                const l = config.length;
                for (let i = 0; i < l; ++i) {
                    const [prop, asc] = OrderByPipe.extractFromConfig(config[i]);
                    const pos = OrderByPipe.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            const [prop, asc, sign] = OrderByPipe.extractFromConfig(config);
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
    }
    static simpleSort(a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    }
    static orderCompare(prop, asc, a, b) {
        const first = extractDeepPropertyByMapKey(a, prop);
        const second = extractDeepPropertyByMapKey(b, prop);
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
            const pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    }
    static extractFromConfig(config) {
        const sign = config.substr(0, 1);
        const prop = config.replace(/^[-+]/, '');
        const asc = sign !== '-';
        return [prop, asc, sign];
    }
}
OrderByPipe.decorators = [
    { type: Pipe, args: [{ name: 'orderBy' },] }
];

// tslint:disable use-pipe-transform-interface
class GroupByImpurePipe extends GroupByPipe {
}
GroupByImpurePipe.decorators = [
    { type: Pipe, args: [{ name: 'groupByImpure', pure: false },] }
];

// tslint:disable use-pipe-transform-interface
class FilterByImpurePipe extends FilterByPipe {
}
FilterByImpurePipe.decorators = [
    { type: Pipe, args: [{ name: 'filterByImpure', pure: false },] }
];

// tslint:disable use-pipe-transform-interface
class OrderByImpurePipe extends OrderByPipe {
}
OrderByImpurePipe.decorators = [
    { type: Pipe, args: [{ name: 'orderByImpure', pure: false },] }
];

class RangePipe {
    transform(start = 1, count = 0, step = 1) {
        return Array(count)
            .fill('')
            .map((v, i) => step * i + start);
    }
}
RangePipe.decorators = [
    { type: Pipe, args: [{ name: 'range' },] }
];

class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
}
ChunkPipe.decorators = [
    { type: Pipe, args: [{ name: 'chunk' },] }
];

class FromPairsPipe {
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        return input.reduce((obj, arr) => {
            if (!Array.isArray(arr)) {
                return obj;
            }
            const [prop, val] = arr;
            obj[prop] = val;
            return obj;
        }, {});
    }
}
FromPairsPipe.decorators = [
    { type: Pipe, args: [{ name: 'fromPairs' },] }
];

const ARRAY_PIPES = [
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
class NgArrayPipesModule {
}
NgArrayPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: ARRAY_PIPES,
                imports: [],
                exports: ARRAY_PIPES,
            },] }
];

class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
}
KeysPipe.decorators = [
    { type: Pipe, args: [{ name: 'keys' },] }
];

class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
}
ValuesPipe.decorators = [
    { type: Pipe, args: [{ name: 'values' },] }
];

class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
}
PairsPipe.decorators = [
    { type: Pipe, args: [{ name: 'pairs' },] }
];

class PickPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {});
    }
}
PickPipe.decorators = [
    { type: Pipe, args: [{ name: 'pick' },] }
];

class OmitPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            // tslint:disable-next-line:no-bitwise
            .filter(k => !~args.indexOf(k))
            .reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {}));
    }
}
OmitPipe.decorators = [
    { type: Pipe, args: [{ name: 'omit' },] }
];

class InvertPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            return Object.assign(o, { [obj[k]]: k });
        }, {});
    }
}
InvertPipe.decorators = [
    { type: Pipe, args: [{ name: 'invert' },] }
];

class InvertByPipe {
    transform(obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            const key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
        }, {});
    }
}
InvertByPipe.decorators = [
    { type: Pipe, args: [{ name: 'invertBy' },] }
];

class DiffObjPipe {
    transform(obj, original = {}) {
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce((diff, key) => {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    }
}
DiffObjPipe.decorators = [
    { type: Pipe, args: [{ name: 'diffObj' },] }
];

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
class NgObjectPipesModule {
}
NgObjectPipesModule.decorators = [
    { type: NgModule, args: [{
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
class AorAnPipe {
    constructor() {
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
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
}
AorAnPipe.decorators = [
    { type: Pipe, args: [{
                name: 'aOrAn',
            },] }
];

class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
}
UcWordsPipe.decorators = [
    { type: Pipe, args: [{ name: 'ucwords' },] }
];

class LeftTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
    }
}
LeftTrimPipe.decorators = [
    { type: Pipe, args: [{ name: 'ltrim' },] }
];

class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
}
RepeatPipe.decorators = [
    { type: Pipe, args: [{ name: 'repeat' },] }
];

class RightTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), '') : text;
    }
}
RightTrimPipe.decorators = [
    { type: Pipe, args: [{ name: 'rtrim' },] }
];

class ScanPipe {
    transform(text, args = []) {
        return isString(text)
            ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
            : text;
    }
}
ScanPipe.decorators = [
    { type: Pipe, args: [{ name: 'scan' },] }
];

class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
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
    }
}
ShortenPipe.decorators = [
    { type: Pipe, args: [{ name: 'shorten' },] }
];

class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
}
StripTagsPipe.decorators = [
    { type: Pipe, args: [{ name: 'stripTags' },] }
];

class TrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
    }
}
TrimPipe.decorators = [
    { type: Pipe, args: [{ name: 'trim' },] }
];

class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
}
UcFirstPipe.decorators = [
    { type: Pipe, args: [{ name: 'ucfirst' },] }
];

class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
}
SlugifyPipe.decorators = [
    { type: Pipe, args: [{ name: 'slugify' },] }
];

class CamelizePipe {
    transform(text, chars = '\\s') {
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter((v) => !!v)
            .map((word, key) => {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join('');
    }
}
CamelizePipe.decorators = [
    { type: Pipe, args: [{ name: 'camelize' },] }
];

class LatinisePipe {
    constructor() {
        // Source: http://semplicewebsites.com/removing-accents-javascript
        // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
        this.latinMap = {
            '??': 'A',
            '??': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '??': 'A',
            '??': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '???': 'A',
            '??': 'A',
            '??': 'A',
            '??': 'A',
            '??': 'A',
            '???': 'A',
            '??': 'A',
            '??': 'A',
            '???': 'A',
            '??': 'A',
            '??': 'A',
            '??': 'A',
            '??': 'A',
            '??': 'A',
            '???': 'A',
            '??': 'A',
            '??': 'A',
            '???': 'AA',
            '??': 'AE',
            '??': 'AE',
            '??': 'AE',
            '???': 'AO',
            '???': 'AU',
            '???': 'AV',
            '???': 'AV',
            '???': 'AY',
            '???': 'B',
            '???': 'B',
            '??': 'B',
            '???': 'B',
            '??': 'B',
            '??': 'B',
            '??': 'C',
            '??': 'C',
            '??': 'C',
            '???': 'C',
            '??': 'C',
            '??': 'C',
            '??': 'C',
            '??': 'C',
            '??': 'D',
            '???': 'D',
            '???': 'D',
            '???': 'D',
            '???': 'D',
            '??': 'D',
            '???': 'D',
            '??': 'D',
            '??': 'D',
            '??': 'D',
            '??': 'D',
            '??': 'DZ',
            '??': 'DZ',
            '??': 'E',
            '??': 'E',
            '??': 'E',
            '??': 'E',
            '???': 'E',
            '??': 'E',
            '???': 'E',
            '???': 'E',
            '???': 'E',
            '???': 'E',
            '???': 'E',
            '???': 'E',
            '??': 'E',
            '??': 'E',
            '???': 'E',
            '??': 'E',
            '??': 'E',
            '???': 'E',
            '??': 'E',
            '??': 'E',
            '???': 'E',
            '???': 'E',
            '??': 'E',
            '??': 'E',
            '???': 'E',
            '???': 'E',
            '???': 'ET',
            '???': 'F',
            '??': 'F',
            '??': 'G',
            '??': 'G',
            '??': 'G',
            '??': 'G',
            '??': 'G',
            '??': 'G',
            '??': 'G',
            '???': 'G',
            '??': 'G',
            '???': 'H',
            '??': 'H',
            '???': 'H',
            '??': 'H',
            '???': 'H',
            '???': 'H',
            '???': 'H',
            '???': 'H',
            '??': 'H',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '???': 'I',
            '??': 'I',
            '???': 'I',
            '??': 'I',
            '??': 'I',
            '???': 'I',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '??': 'I',
            '???': 'I',
            '???': 'D',
            '???': 'F',
            '???': 'G',
            '???': 'R',
            '???': 'S',
            '???': 'T',
            '???': 'IS',
            '??': 'J',
            '??': 'J',
            '???': 'K',
            '??': 'K',
            '??': 'K',
            '???': 'K',
            '???': 'K',
            '???': 'K',
            '??': 'K',
            '???': 'K',
            '???': 'K',
            '???': 'K',
            '??': 'L',
            '??': 'L',
            '??': 'L',
            '??': 'L',
            '???': 'L',
            '???': 'L',
            '???': 'L',
            '???': 'L',
            '???': 'L',
            '???': 'L',
            '??': 'L',
            '???': 'L',
            '??': 'L',
            '??': 'L',
            '??': 'LJ',
            '???': 'M',
            '???': 'M',
            '???': 'M',
            '???': 'M',
            '??': 'N',
            '??': 'N',
            '??': 'N',
            '???': 'N',
            '???': 'N',
            '???': 'N',
            '??': 'N',
            '??': 'N',
            '???': 'N',
            '??': 'N',
            '??': 'N',
            '??': 'N',
            '??': 'NJ',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '???': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '???': 'O',
            '??': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '???': 'O',
            '??': 'O',
            '???': 'O',
            '???': 'O',
            '??': 'O',
            '???': 'O',
            '???': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '??': 'O',
            '???': 'O',
            '???': 'O',
            '??': 'O',
            '??': 'OI',
            '???': 'OO',
            '??': 'E',
            '??': 'O',
            '??': 'OU',
            '???': 'P',
            '???': 'P',
            '???': 'P',
            '??': 'P',
            '???': 'P',
            '???': 'P',
            '???': 'P',
            '???': 'Q',
            '???': 'Q',
            '??': 'R',
            '??': 'R',
            '??': 'R',
            '???': 'R',
            '???': 'R',
            '???': 'R',
            '??': 'R',
            '??': 'R',
            '???': 'R',
            '??': 'R',
            '???': 'R',
            '???': 'C',
            '??': 'E',
            '??': 'S',
            '???': 'S',
            '??': 'S',
            '???': 'S',
            '??': 'S',
            '??': 'S',
            '??': 'S',
            '???': 'S',
            '???': 'S',
            '???': 'S',
            '???': 'SS',
            '??': 'T',
            '??': 'T',
            '???': 'T',
            '??': 'T',
            '??': 'T',
            '???': 'T',
            '???': 'T',
            '??': 'T',
            '???': 'T',
            '??': 'T',
            '??': 'T',
            '???': 'A',
            '???': 'L',
            '??': 'M',
            '??': 'V',
            '???': 'TZ',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '???': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '???': 'U',
            '???': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '???': 'U',
            '??': 'U',
            '???': 'U',
            '???': 'U',
            '???': 'U',
            '???': 'U',
            '???': 'U',
            '??': 'U',
            '??': 'U',
            '???': 'U',
            '??': 'U',
            '??': 'U',
            '??': 'U',
            '???': 'U',
            '???': 'U',
            '???': 'V',
            '???': 'V',
            '??': 'V',
            '???': 'V',
            '???': 'VY',
            '???': 'W',
            '??': 'W',
            '???': 'W',
            '???': 'W',
            '???': 'W',
            '???': 'W',
            '???': 'W',
            '???': 'X',
            '???': 'X',
            '??': 'Y',
            '??': 'Y',
            '??': 'Y',
            '???': 'Y',
            '???': 'Y',
            '???': 'Y',
            '??': 'Y',
            '???': 'Y',
            '???': 'Y',
            '??': 'Y',
            '??': 'Y',
            '???': 'Y',
            '??': 'Z',
            '??': 'Z',
            '???': 'Z',
            '???': 'Z',
            '??': 'Z',
            '???': 'Z',
            '??': 'Z',
            '???': 'Z',
            '??': 'Z',
            '??': 'IJ',
            '??': 'OE',
            '???': 'A',
            '???': 'AE',
            '??': 'B',
            '???': 'B',
            '???': 'C',
            '???': 'D',
            '???': 'E',
            '???': 'F',
            '??': 'G',
            '??': 'G',
            '??': 'H',
            '??': 'I',
            '??': 'R',
            '???': 'J',
            '???': 'K',
            '??': 'L',
            '???': 'L',
            '???': 'M',
            '??': 'N',
            '???': 'O',
            '??': 'OE',
            '???': 'O',
            '???': 'OU',
            '???': 'P',
            '??': 'R',
            '???': 'N',
            '???': 'R',
            '???': 'S',
            '???': 'T',
            '???': 'E',
            '???': 'R',
            '???': 'U',
            '???': 'V',
            '???': 'W',
            '??': 'Y',
            '???': 'Z',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '???': 'a',
            '??': 'a',
            '??': 'a',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '??': 'a',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '???': 'a',
            '??': 'a',
            '??': 'a',
            '???': 'a',
            '???': 'a',
            '??': 'a',
            '???': 'aa',
            '??': 'ae',
            '??': 'ae',
            '??': 'ae',
            '???': 'ao',
            '???': 'au',
            '???': 'av',
            '???': 'av',
            '???': 'ay',
            '???': 'b',
            '???': 'b',
            '??': 'b',
            '???': 'b',
            '???': 'b',
            '???': 'b',
            '??': 'b',
            '??': 'b',
            '??': 'o',
            '??': 'c',
            '??': 'c',
            '??': 'c',
            '???': 'c',
            '??': 'c',
            '??': 'c',
            '??': 'c',
            '??': 'c',
            '??': 'c',
            '??': 'd',
            '???': 'd',
            '???': 'd',
            '??': 'd',
            '???': 'd',
            '???': 'd',
            '??': 'd',
            '???': 'd',
            '???': 'd',
            '???': 'd',
            '???': 'd',
            '??': 'd',
            '??': 'd',
            '??': 'd',
            '??': 'i',
            '??': 'j',
            '??': 'j',
            '??': 'j',
            '??': 'dz',
            '??': 'dz',
            '??': 'e',
            '??': 'e',
            '??': 'e',
            '??': 'e',
            '???': 'e',
            '??': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'e',
            '??': 'e',
            '??': 'e',
            '???': 'e',
            '??': 'e',
            '??': 'e',
            '???': 'e',
            '??': 'e',
            '??': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'e',
            '??': 'e',
            '???': 'e',
            '??': 'e',
            '???': 'e',
            '???': 'e',
            '???': 'et',
            '???': 'f',
            '??': 'f',
            '???': 'f',
            '???': 'f',
            '??': 'g',
            '??': 'g',
            '??': 'g',
            '??': 'g',
            '??': 'g',
            '??': 'g',
            '??': 'g',
            '???': 'g',
            '???': 'g',
            '??': 'g',
            '???': 'h',
            '??': 'h',
            '???': 'h',
            '??': 'h',
            '???': 'h',
            '???': 'h',
            '???': 'h',
            '???': 'h',
            '??': 'h',
            '???': 'h',
            '??': 'h',
            '??': 'hv',
            '??': 'i',
            '??': 'i',
            '??': 'i',
            '??': 'i',
            '??': 'i',
            '???': 'i',
            '???': 'i',
            '??': 'i',
            '??': 'i',
            '???': 'i',
            '??': 'i',
            '??': 'i',
            '??': 'i',
            '???': 'i',
            '??': 'i',
            '??': 'i',
            '???': 'i',
            '???': 'd',
            '???': 'f',
            '???': 'g',
            '???': 'r',
            '???': 's',
            '???': 't',
            '???': 'is',
            '??': 'j',
            '??': 'j',
            '??': 'j',
            '??': 'j',
            '???': 'k',
            '??': 'k',
            '??': 'k',
            '???': 'k',
            '???': 'k',
            '???': 'k',
            '??': 'k',
            '???': 'k',
            '???': 'k',
            '???': 'k',
            '???': 'k',
            '??': 'l',
            '??': 'l',
            '??': 'l',
            '??': 'l',
            '??': 'l',
            '???': 'l',
            '??': 'l',
            '???': 'l',
            '???': 'l',
            '???': 'l',
            '???': 'l',
            '???': 'l',
            '??': 'l',
            '??': 'l',
            '???': 'l',
            '??': 'l',
            '??': 'l',
            '??': 'lj',
            '??': 's',
            '???': 's',
            '???': 's',
            '???': 's',
            '???': 'm',
            '???': 'm',
            '???': 'm',
            '??': 'm',
            '???': 'm',
            '???': 'm',
            '??': 'n',
            '??': 'n',
            '??': 'n',
            '???': 'n',
            '??': 'n',
            '???': 'n',
            '???': 'n',
            '??': 'n',
            '??': 'n',
            '???': 'n',
            '??': 'n',
            '???': 'n',
            '???': 'n',
            '??': 'n',
            '??': 'n',
            '??': 'nj',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '???': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '???': 'o',
            '??': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '??': 'o',
            '???': 'o',
            '???': 'o',
            '???': 'o',
            '??': 'o',
            '???': 'o',
            '???': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '??': 'o',
            '???': 'o',
            '???': 'o',
            '??': 'o',
            '??': 'oi',
            '???': 'oo',
            '??': 'e',
            '???': 'e',
            '??': 'o',
            '???': 'o',
            '??': 'ou',
            '???': 'p',
            '???': 'p',
            '???': 'p',
            '??': 'p',
            '???': 'p',
            '???': 'p',
            '???': 'p',
            '???': 'p',
            '???': 'p',
            '???': 'q',
            '??': 'q',
            '??': 'q',
            '???': 'q',
            '??': 'r',
            '??': 'r',
            '??': 'r',
            '???': 'r',
            '???': 'r',
            '???': 'r',
            '??': 'r',
            '??': 'r',
            '???': 'r',
            '??': 'r',
            '???': 'r',
            '??': 'r',
            '???': 'r',
            '???': 'r',
            '??': 'r',
            '??': 'r',
            '???': 'c',
            '???': 'c',
            '??': 'e',
            '??': 'r',
            '??': 's',
            '???': 's',
            '??': 's',
            '???': 's',
            '??': 's',
            '??': 's',
            '??': 's',
            '???': 's',
            '???': 's',
            '???': 's',
            '??': 's',
            '???': 's',
            '???': 's',
            '??': 's',
            '??': 'g',
            '??': 'ss',
            '???': 'o',
            '???': 'o',
            '???': 'u',
            '??': 't',
            '??': 't',
            '???': 't',
            '??': 't',
            '??': 't',
            '???': 't',
            '???': 't',
            '???': 't',
            '???': 't',
            '??': 't',
            '???': 't',
            '???': 't',
            '??': 't',
            '??': 't',
            '??': 't',
            '???': 'th',
            '??': 'a',
            '???': 'ae',
            '??': 'e',
            '???': 'g',
            '??': 'h',
            '??': 'h',
            '??': 'h',
            '???': 'i',
            '??': 'k',
            '???': 'l',
            '??': 'm',
            '??': 'm',
            '???': 'oe',
            '??': 'r',
            '??': 'r',
            '??': 'r',
            '???': 'r',
            '??': 't',
            '??': 'v',
            '??': 'w',
            '??': 'y',
            '???': 'tz',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '???': 'u',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '???': 'u',
            '???': 'u',
            '??': 'u',
            '??': 'u',
            '??': 'u',
            '???': 'u',
            '??': 'u',
            '???': 'u',
            '???': 'u',
            '???': 'u',
            '???': 'u',
            '???': 'u',
            '??': 'u',
            '??': 'u',
            '???': 'u',
            '??': 'u',
            '???': 'u',
            '??': 'u',
            '??': 'u',
            '???': 'u',
            '???': 'u',
            '???': 'ue',
            '???': 'um',
            '???': 'v',
            '???': 'v',
            '???': 'v',
            '??': 'v',
            '???': 'v',
            '???': 'v',
            '???': 'v',
            '???': 'vy',
            '???': 'w',
            '??': 'w',
            '???': 'w',
            '???': 'w',
            '???': 'w',
            '???': 'w',
            '???': 'w',
            '???': 'w',
            '???': 'x',
            '???': 'x',
            '???': 'x',
            '??': 'y',
            '??': 'y',
            '??': 'y',
            '???': 'y',
            '???': 'y',
            '???': 'y',
            '??': 'y',
            '???': 'y',
            '???': 'y',
            '??': 'y',
            '???': 'y',
            '??': 'y',
            '???': 'y',
            '??': 'z',
            '??': 'z',
            '???': 'z',
            '??': 'z',
            '???': 'z',
            '??': 'z',
            '???': 'z',
            '??': 'z',
            '???': 'z',
            '???': 'z',
            '???': 'z',
            '??': 'z',
            '??': 'z',
            '??': 'z',
            '???': 'ff',
            '???': 'ffi',
            '???': 'ffl',
            '???': 'fi',
            '???': 'fl',
            '??': 'ij',
            '??': 'oe',
            '???': 'st',
            '???': 'a',
            '???': 'e',
            '???': 'i',
            '???': 'j',
            '???': 'o',
            '???': 'r',
            '???': 'u',
            '???': 'v',
            '???': 'x',
        };
    }
    transform(text, chars = '\\s') {
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, (key) => {
                return this.latinMap[key] || key;
            })
            : text;
    }
}
LatinisePipe.decorators = [
    { type: Pipe, args: [{ name: 'latinise' },] }
];

class LinesPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
    }
}
LinesPipe.decorators = [
    { type: Pipe, args: [{ name: 'lines' },] }
];

class UnderscorePipe {
    transform(text, chars = '\\s') {
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, '')
                .replace(/[A-Z]/g, (c, k) => {
                return k ? `_${c.toLowerCase()}` : c.toLowerCase();
            })
            : text;
    }
}
UnderscorePipe.decorators = [
    { type: Pipe, args: [{ name: 'underscore' },] }
];

class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
}
MatchPipe.decorators = [
    { type: Pipe, args: [{ name: 'match' },] }
];

class TestPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    }
}
TestPipe.decorators = [
    { type: Pipe, args: [{ name: 'test' },] }
];

class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
}
LeftPadPipe.decorators = [
    { type: Pipe, args: [{ name: 'lpad' },] }
];

class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
}
RightPadPipe.decorators = [
    { type: Pipe, args: [{ name: 'rpad' },] }
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
class MakePluralStringPipe {
    constructor() {
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
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
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
    }
}
MakePluralStringPipe.decorators = [
    { type: Pipe, args: [{
                name: 'makePluralString',
            },] }
];

class WrapPipe {
    transform(str, prefix = '', suffix = '') {
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
}
WrapPipe.decorators = [
    { type: Pipe, args: [{ name: 'wrap' },] }
];

const STRING_PIPES = [
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
class NgStringPipesModule {
}
NgStringPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: STRING_PIPES,
                imports: [],
                exports: STRING_PIPES,
            },] }
];

class MaxPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.max(...arr) : arr;
    }
}
MaxPipe.decorators = [
    { type: Pipe, args: [{ name: 'max' },] }
];

class MinPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.min(...arr) : arr;
    }
}
MinPipe.decorators = [
    { type: Pipe, args: [{ name: 'min' },] }
];

class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
}
PercentagePipe.decorators = [
    { type: Pipe, args: [{ name: 'percentage' },] }
];

class SumPipe {
    transform(arr) {
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
    }
}
SumPipe.decorators = [
    { type: Pipe, args: [{ name: 'sum' },] }
];

class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
}
FloorPipe.decorators = [
    { type: Pipe, args: [{ name: 'floor' },] }
];

class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
}
RoundPipe.decorators = [
    { type: Pipe, args: [{ name: 'round' },] }
];

class SqrtPipe {
    transform(num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    }
}
SqrtPipe.decorators = [
    { type: Pipe, args: [{ name: 'sqrt' },] }
];

class PowerPipe {
    transform(num, power = 2) {
        return !isNaN(num) ? Math.pow(num, power) : num;
    }
}
PowerPipe.decorators = [
    { type: Pipe, args: [{ name: 'pow' },] }
];

class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
}
CeilPipe.decorators = [
    { type: Pipe, args: [{ name: 'ceil' },] }
];

class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
}
DegreesPipe.decorators = [
    { type: Pipe, args: [{ name: 'degrees' },] }
];

class BytesPipe {
    constructor() {
        this.dictionary = [
            { max: 1024, type: 'B' },
            { max: 1048576, type: 'KB' },
            { max: 1073741824, type: 'MB' },
            { max: 1.0995116e12, type: 'GB' },
        ];
    }
    transform(value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
        const calc = value / (format.max / 1024);
        const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return `${num} ${format.type}`;
    }
}
BytesPipe.decorators = [
    { type: Pipe, args: [{ name: 'bytes' },] }
];

class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
}
RadiansPipe.decorators = [
    { type: Pipe, args: [{ name: 'radians' },] }
];

const MATH_PIPES = [
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
class NgMathPipesModule {
}
NgMathPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: MATH_PIPES,
                imports: [],
                exports: MATH_PIPES,
            },] }
];

class IsDefinedPipe {
    transform(input) {
        return !isUndefined(input);
    }
}
IsDefinedPipe.decorators = [
    { type: Pipe, args: [{ name: 'isDefined' },] }
];

class IsNullPipe {
    transform(input) {
        return input === null;
    }
}
IsNullPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNull' },] }
];

class IsUndefinedPipe {
    transform(input) {
        return isUndefined(input);
    }
}
IsUndefinedPipe.decorators = [
    { type: Pipe, args: [{ name: 'isUndefined' },] }
];

class IsStringPipe {
    transform(input) {
        return isString(input);
    }
}
IsStringPipe.decorators = [
    { type: Pipe, args: [{ name: 'isString' },] }
];

class IsFunctionPipe {
    transform(input) {
        return isFunction(input);
    }
}
IsFunctionPipe.decorators = [
    { type: Pipe, args: [{ name: 'isFunction' },] }
];

class IsNumberPipe {
    transform(input) {
        return isNumber(input);
    }
}
IsNumberPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNumber' },] }
];

class IsArrayPipe {
    transform(input) {
        return Array.isArray(input);
    }
}
IsArrayPipe.decorators = [
    { type: Pipe, args: [{ name: 'isArray' },] }
];

class IsObjectPipe {
    transform(input) {
        return isObject(input);
    }
}
IsObjectPipe.decorators = [
    { type: Pipe, args: [{ name: 'isObject' },] }
];

class IsGreaterEqualThanPipe {
    transform(input, other) {
        return input >= other;
    }
}
IsGreaterEqualThanPipe.decorators = [
    { type: Pipe, args: [{ name: 'isGreaterEqualThan' },] }
];

class IsGreaterThanPipe {
    transform(input, other) {
        return input > other;
    }
}
IsGreaterThanPipe.decorators = [
    { type: Pipe, args: [{ name: 'isGreaterThan' },] }
];

class IsLessEqualThanPipe {
    transform(input, other) {
        return input <= other;
    }
}
IsLessEqualThanPipe.decorators = [
    { type: Pipe, args: [{ name: 'isLessEqualThan' },] }
];

class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
}
IsEqualToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isEqualTo' },] }
];

class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
}
IsNotEqualToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNotEqualTo' },] }
];

class IsIdenticalToPipe {
    transform(input, other) {
        return input === other;
    }
}
IsIdenticalToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isIdenticalTo' },] }
];

class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
}
IsNotIdenticalToPipe.decorators = [
    { type: Pipe, args: [{ name: 'isNotIdenticalTo' },] }
];

class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
}
IsLessThanPipe.decorators = [
    { type: Pipe, args: [{ name: 'isLessThan' },] }
];

const BOOLEAN_PIPES = [
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
class NgBooleanPipesModule {
}
NgBooleanPipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: BOOLEAN_PIPES,
                imports: [],
                exports: BOOLEAN_PIPES,
            },] }
];

class TimeAgoPipe {
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate) {
        if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
            return 'Invalid date';
        }
        const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
        const now = +new Date();
        if (past > now) {
            return 'in the future';
        }
        for (let i = 0, l = TimeAgoPipe.MAPPER.length, ms = now - past, div = TimeAgoPipe.YEAR_MS; i < l; ++i) {
            const elm = TimeAgoPipe.MAPPER[i];
            const unit = Math.floor(ms / (div /= elm.div));
            if (unit >= 1) {
                return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
            }
        }
        return 'just now';
    }
}
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
    { type: Pipe, args: [{ name: 'timeAgo' },] }
];

const DATE_PIPES = [TimeAgoPipe];
class NgDatePipesModule {
}
NgDatePipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: DATE_PIPES,
                imports: [],
                exports: DATE_PIPES,
            },] }
];

class NgPipesModule {
}
NgPipesModule.decorators = [
    { type: NgModule, args: [{
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

export { AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, FromPairsPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RadiansPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, isString as ??a };
//# sourceMappingURL=ngx-pipes.js.map
