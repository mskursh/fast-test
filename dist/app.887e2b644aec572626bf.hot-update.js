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
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/slider/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/slider-label/index.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/design-tokens.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/swatch.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");


(0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__.provideFluentDesignSystem)().register((0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.fluentButton)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.fluentCard)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__.fluentBadge)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__.fluentTextField)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__.fluentRadio)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__.fluentRadioGroup)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__.fluentCheckbox)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__.fluentSwitch)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fluentSlider)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.fluentSliderLabel)());
const defaultColors = {
    accent: '#0360b9',
    base: '#ebebeb',
};
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const resetStyleButton = document.getElementById('reset-style');
const accentPicker = document.getElementById('accent-color');
const basePicker = document.getElementById('base-color');
const modeSwitch = document.querySelector('fluent-switch');
const slider = document.querySelector('fluent-slider');
sidebar && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.fillColor.setValueFor(sidebar, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.neutralLayer2);
body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.fillColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.neutralLayer3);
const setColor = (color, type) => {
    if (type === 'accent') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_13__.parseColorHexRGB)(color)));
    }
    else if (type === 'base') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.neutralBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_12__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_13__.parseColorHexRGB)(color)));
    }
};
accentPicker.addEventListener('change', () => {
    setColor(accentPicker.value, 'accent');
});
basePicker.addEventListener('change', () => {
    setColor(basePicker.value, 'base');
});
modeSwitch.addEventListener('click', () => {
    if (modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, 100);
        slider.value = 100;
    }
    else if (!modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, 0);
        slider.value = 0;
    }
});
slider.addEventListener('change', () => {
    body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, (100 - slider.value) / 100);
    console.log(slider.value);
    if (slider.value <= 45) {
        modeSwitch.checked = false;
    }
    else if (slider.value >= 46) {
        modeSwitch.checked = true;
    }
});
resetStyleButton.addEventListener('click', () => {
    accentPicker.value = defaultColors.accent;
    basePicker.value = defaultColors.base;
    setColor(defaultColors.accent, 'accent');
    setColor(defaultColors.base, 'base');
    modeSwitch.checked = false;
    slider.value = 0;
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e75099fe598858f11baf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjg4N2UyYjY0NGFlYzU3MjYyNmJmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JrQztBQUN3QjtBQUUxRCxtRkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FDbEMsc0VBQVksRUFBRSxFQUNkLG9FQUFVLEVBQUUsRUFDWixxRUFBVyxFQUFFLEVBQ2IseUVBQWUsRUFBRSxFQUNqQixxRUFBVyxFQUFFLEVBQ2IsMEVBQWdCLEVBQUUsRUFDbEIsd0VBQWMsRUFBRSxFQUNoQixzRUFBWSxFQUFFLEVBQ2Qsc0VBQVksRUFBRSxFQUNkLDRFQUFpQixFQUFFLENBQ3BCLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRztJQUNwQixNQUFNLEVBQUUsU0FBUztJQUNqQixJQUFJLEVBQUUsU0FBUztDQUNoQixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBZ0IsQ0FBQztBQUMvRSxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBb0IsQ0FBQztBQUNoRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUM1RSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUM5RSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUUxRSxPQUFPLElBQUksNEVBQXFCLENBQUMsT0FBTyxFQUFFLG9FQUFhLENBQUMsQ0FBQztBQUN6RCxJQUFJLElBQUksNEVBQXFCLENBQUMsSUFBSSxFQUFFLG9FQUFhLENBQUMsQ0FBQztBQUVuRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQVEsRUFBRTtJQUNyRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckIsSUFBSTtZQUNGLGtGQUEyQixDQUN6QixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUN6QyxDQUFDO0tBQ0w7U0FBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDMUIsSUFBSTtZQUNGLG1GQUE0QixDQUMxQixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUN6QyxDQUFDO0tBQ0w7QUFDSCxDQUFDLENBQUM7QUFFRixZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUNqRCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBUyxFQUFFO0lBQy9DLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDOUMsSUFBSSxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3RCLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7S0FDcEI7U0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUM5QixJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ2xCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQzVCO1NBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUM3QixVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUMzQjtBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNwRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUN2R0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0sXG4gIGZsdWVudEJ1dHRvbixcbiAgZmx1ZW50Q2FyZCxcbiAgZmlsbENvbG9yLFxuICBuZXV0cmFsTGF5ZXIzLFxuICBuZXV0cmFsTGF5ZXIyLFxuICBiYXNlTGF5ZXJMdW1pbmFuY2UsXG4gIFN0YW5kYXJkTHVtaW5hbmNlLFxuICBuZXV0cmFsQmFzZUNvbG9yLFxuICBTd2F0Y2hSR0IsXG4gIGFjY2VudEJhc2VDb2xvcixcbiAgZmx1ZW50QmFkZ2UsXG4gIGZsdWVudFRleHRGaWVsZCxcbiAgZmx1ZW50UmFkaW8sXG4gIGZsdWVudFJhZGlvR3JvdXAsXG4gIGZsdWVudENoZWNrYm94LFxuICBmbHVlbnRTd2l0Y2gsXG4gIGZsdWVudFNsaWRlcixcbiAgZmx1ZW50U2xpZGVyTGFiZWwsXG59IGZyb20gJ0BmbHVlbnR1aS93ZWItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYXJzZUNvbG9ySGV4UkdCIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWNvbG9ycyc7XG5cbnByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcbiAgZmx1ZW50QnV0dG9uKCksXG4gIGZsdWVudENhcmQoKSxcbiAgZmx1ZW50QmFkZ2UoKSxcbiAgZmx1ZW50VGV4dEZpZWxkKCksXG4gIGZsdWVudFJhZGlvKCksXG4gIGZsdWVudFJhZGlvR3JvdXAoKSxcbiAgZmx1ZW50Q2hlY2tib3goKSxcbiAgZmx1ZW50U3dpdGNoKCksXG4gIGZsdWVudFNsaWRlcigpLFxuICBmbHVlbnRTbGlkZXJMYWJlbCgpXG4pO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xuICBhY2NlbnQ6ICcjMDM2MGI5JyxcbiAgYmFzZTogJyNlYmViZWInLFxufTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgcmVzZXRTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1zdHlsZScpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgYWNjZW50UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VudC1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGJhc2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IG1vZGVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3dpdGNoJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXNsaWRlcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuc2lkZWJhciAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3Ioc2lkZWJhciwgbmV1dHJhbExheWVyMik7XG5ib2R5ICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihib2R5LCBuZXV0cmFsTGF5ZXIzKTtcblxuY29uc3Qgc2V0Q29sb3IgPSAoY29sb3I6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlID09PSAnYWNjZW50Jykge1xuICAgIGJvZHkgJiZcbiAgICAgIGFjY2VudEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgICAgYm9keSxcbiAgICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihjb2xvcikhKVxuICAgICAgKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFzZScpIHtcbiAgICBib2R5ICYmXG4gICAgICBuZXV0cmFsQmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9XG59O1xuXG5hY2NlbnRQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihhY2NlbnRQaWNrZXIudmFsdWUsICdhY2NlbnQnKTtcbn0pO1xuXG5iYXNlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgc2V0Q29sb3IoYmFzZVBpY2tlci52YWx1ZSwgJ2Jhc2UnKTtcbn0pO1xuXG5tb2RlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBpZiAobW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgMTAwKTtcbiAgICBzbGlkZXIudmFsdWUgPSAxMDA7XG4gIH0gZWxzZSBpZiAoIW1vZGVTd2l0Y2guY2hlY2tlZCkge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIDApO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gIH1cbn0pO1xuXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCAoMTAwIC0gc2xpZGVyLnZhbHVlKSAvIDEwMCk7XG4gIGNvbnNvbGUubG9nKHNsaWRlci52YWx1ZSk7XG4gIGlmIChzbGlkZXIudmFsdWUgPD0gNDUpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChzbGlkZXIudmFsdWUgPj0gNDYpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59KTtcblxucmVzZXRTdHlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgYWNjZW50UGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5hY2NlbnQ7XG4gIGJhc2VQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmJhc2U7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYWNjZW50LCAnYWNjZW50Jyk7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYmFzZSwgJ2Jhc2UnKTtcbiAgbW9kZVN3aXRjaC5jaGVja2VkID0gZmFsc2U7XG4gIHNsaWRlci52YWx1ZSA9IDA7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImU3NTA5OWZlNTk4ODU4ZjExYmFmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9