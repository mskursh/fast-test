"use strict";
self["webpackHotUpdatefast_test"]("app",{

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/fluent-design-system.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/button/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/card/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/badge/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/text-field/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/radio/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/radio-group/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/checkbox/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/switch/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/design-tokens.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/swatch.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/utilities/base-layer-luminance.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");


(0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__.provideFluentDesignSystem)().register((0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.fluentButton)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.fluentCard)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__.fluentBadge)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__.fluentTextField)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__.fluentRadio)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__.fluentRadioGroup)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__.fluentCheckbox)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__.fluentSwitch)());
const defaultColors = {
    accent: '#0360b9',
    base: '#ebebeb',
};
const sidebar = document.querySelector('.sidebar');
sidebar && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(sidebar, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer2);
const body = document.querySelector('body');
body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer3);
const updateStyleButton = document.getElementById('update-style');
const accentPicker = document.getElementById('accent-color');
const basePicker = document.getElementById('base-color');
const modeSwitch = document.querySelector('fluent-switch');
const setColor = (color, type) => {
    if (type === 'accent') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(color)));
    }
    else if (type === 'base') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(color)));
    }
};
updateStyleButton === null || updateStyleButton === void 0 ? void 0 : updateStyleButton.addEventListener('click', () => {
    accentPicker.value = defaultColors.accent;
    basePicker.value = defaultColors.base;
    setColor(defaultColors.accent, 'accent');
    setColor(defaultColors.base, 'base');
});
accentPicker.addEventListener('change', () => {
    setColor(accentPicker.value, 'accent');
});
basePicker.addEventListener('change', () => {
    setColor(basePicker.value, 'base');
});
modeSwitch.addEventListener('click', () => {
    if (!modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.StandardLuminance.LightMode);
    }
    else {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.StandardLuminance.DarkMode);
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f78e644f05b8b53af11d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDckZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxufSBmcm9tICdAZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFyc2VDb2xvckhleFJHQiB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1jb2xvcnMnO1xuXG5wcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtKCkucmVnaXN0ZXIoXG4gIGZsdWVudEJ1dHRvbigpLFxuICBmbHVlbnRDYXJkKCksXG4gIGZsdWVudEJhZGdlKCksXG4gIGZsdWVudFRleHRGaWVsZCgpLFxuICBmbHVlbnRSYWRpbygpLFxuICBmbHVlbnRSYWRpb0dyb3VwKCksXG4gIGZsdWVudENoZWNrYm94KCksXG4gIGZsdWVudFN3aXRjaCgpXG4pO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xuICBhY2NlbnQ6ICcjMDM2MGI5JyxcbiAgYmFzZTogJyNlYmViZWInLFxufTtcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG5zaWRlYmFyICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihzaWRlYmFyLCBuZXV0cmFsTGF5ZXIyKTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcbmJvZHkgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKGJvZHksIG5ldXRyYWxMYXllcjMpO1xuXG5jb25zdCB1cGRhdGVTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtc3R5bGUnKTtcbmNvbnN0IGFjY2VudFBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlbnQtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBiYXNlUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2UtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBtb2RlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXN3aXRjaCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuY29uc3Qgc2V0Q29sb3IgPSAoY29sb3I6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlID09PSAnYWNjZW50Jykge1xuICAgIGJvZHkgJiZcbiAgICAgIGFjY2VudEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgICAgYm9keSxcbiAgICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihjb2xvcikhKVxuICAgICAgKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFzZScpIHtcbiAgICBib2R5ICYmXG4gICAgICBuZXV0cmFsQmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9XG59O1xuXG51cGRhdGVTdHlsZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGFjY2VudFBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYWNjZW50O1xuICBiYXNlUGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5iYXNlO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmFjY2VudCwgJ2FjY2VudCcpO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmJhc2UsICdiYXNlJyk7XG59KTtcblxuYWNjZW50UGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgc2V0Q29sb3IoYWNjZW50UGlja2VyLnZhbHVlLCAnYWNjZW50Jyk7XG59KTtcblxuYmFzZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGJhc2VQaWNrZXIudmFsdWUsICdiYXNlJyk7XG59KTtcblxubW9kZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgaWYgKCFtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5MaWdodE1vZGUpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkRhcmtNb2RlKTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNzhlNjQ0ZjA1YjhiNTNhZjExZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==