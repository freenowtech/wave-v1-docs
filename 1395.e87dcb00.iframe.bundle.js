"use strict";(self.webpackChunk_freenow_wave=self.webpackChunk_freenow_wave||[]).push([[1395],{"./node_modules/date-fns/locale/lb/_lib/formatRelative/index.js":(module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var formatRelativeLocale={lastWeek:function lastWeek(date){var day=date.getUTCDay(),result="'läschte";return 2!==day&&4!==day||(result+="n"),result+="' eeee 'um' p"},yesterday:"'gëschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"},_default=function formatRelative(token,date,_baseDate,_options){var format=formatRelativeLocale[token];return"function"==typeof format?format(date):format};exports.default=_default,module.exports=exports.default}}]);