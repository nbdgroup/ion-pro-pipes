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

export { AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, FromPairsPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RadiansPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, isString as ɵa };
//# sourceMappingURL=ngx-pipes.js.map
