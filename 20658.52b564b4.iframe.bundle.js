"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[20658,20289],{"./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function buildFormatLongFn(args){return function(){var options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},width=options.width?String(options.width):args.defaultWidth;return args.formats[width]||args.formats[args.defaultWidth]}},module.exports=exports.default},"./node_modules/date-fns/locale/da/_lib/formatLong/index.js":(module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _index=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"));var _default={date:(0,_index.default)({formats:{full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,_index.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,_index.default)({formats:{full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};exports.default=_default,module.exports=exports.default}}]);