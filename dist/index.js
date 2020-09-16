"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const loader_utils_1 = __importDefault(require("loader-utils"));
const format = (date = new Date()) => {
    const padding = (d) => ('' + d).padStart(2, '0');
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ].reduce((acc, curr) => acc + padding(curr), '');
};
let inserted = false;
function versionLogLoader(source) {
    const defaultOptions = { version: format() };
    const options = loader_utils_1.default.getOptions(this) || defaultOptions;
    if (inserted)
        return source;
    const result = source.concat(`console.log('${options.version}')`);
    inserted = true;
    return result;
}
exports.default = versionLogLoader;
module.exports = versionLogLoader;
