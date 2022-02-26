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
const sidebar = document.querySelector('.sidebar');
sidebar && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(sidebar, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer2);
const body = document.querySelector('body');
body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer3);
const updateStyleButton = document.getElementById('update-style');
updateStyleButton === null || updateStyleButton === void 0 ? void 0 : updateStyleButton.addEventListener('click', () => {
    const accentPicker = document.getElementById('accent-color');
    const accentColor = accentPicker.value;
    const basePicker = document.getElementById('base-color');
    const baseColor = basePicker.value;
    if (body) {
        _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(accentColor)));
        _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(baseColor)));
    }
});
const modeSwitch = document.querySelector('fluent-switch');
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
/******/ 	__webpack_require__.h = () => ("c1d4d6c3b2e2512c877d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmVjMDI3Njc0ODQ3OTc0MzczZTBlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmtDO0FBQ3dCO0FBRTFELG1GQUF5QixFQUFFLENBQUMsUUFBUSxDQUNsQyxzRUFBWSxFQUFFLEVBQ2Qsb0VBQVUsRUFBRSxFQUNaLHFFQUFXLEVBQUUsRUFDYix5RUFBZSxFQUFFLEVBQ2pCLHFFQUFXLEVBQUUsRUFDYiwwRUFBZ0IsRUFBRSxFQUNsQix3RUFBYyxFQUFFLEVBQ2hCLHNFQUFZLEVBQUUsQ0FDZixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsT0FBTyxJQUFJLDJFQUFxQixDQUFDLE9BQU8sRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFekQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsSUFBSSxJQUFJLDJFQUFxQixDQUFDLElBQUksRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2xFLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDdEQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDMUMsY0FBYyxDQUNJLENBQUM7SUFDckIsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUV2QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztJQUM1RSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBRW5DLElBQUksSUFBSSxFQUFFO1FBQ1IsaUZBQTJCLENBQ3pCLElBQUksRUFDSixxRUFBYyxDQUFDLHlFQUFnQixDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQy9DLENBQUM7UUFDRixrRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FDN0MsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUU5RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUN2QixJQUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLGtGQUEyQixDQUFDLENBQUM7S0FDM0U7U0FBTTtRQUNMLElBQUksSUFBSSxvRkFBOEIsQ0FBQyxJQUFJLEVBQUUsaUZBQTBCLENBQUMsQ0FBQztLQUMxRTtBQUNILENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUNwRUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0sXG4gIGZsdWVudEJ1dHRvbixcbiAgZmx1ZW50Q2FyZCxcbiAgZmlsbENvbG9yLFxuICBuZXV0cmFsTGF5ZXIzLFxuICBuZXV0cmFsTGF5ZXIyLFxuICBiYXNlTGF5ZXJMdW1pbmFuY2UsXG4gIFN0YW5kYXJkTHVtaW5hbmNlLFxuICBuZXV0cmFsQmFzZUNvbG9yLFxuICBTd2F0Y2hSR0IsXG4gIGFjY2VudEJhc2VDb2xvcixcbiAgZmx1ZW50QmFkZ2UsXG4gIGZsdWVudFRleHRGaWVsZCxcbiAgZmx1ZW50UmFkaW8sXG4gIGZsdWVudFJhZGlvR3JvdXAsXG4gIGZsdWVudENoZWNrYm94LFxuICBmbHVlbnRTd2l0Y2gsXG59IGZyb20gJ0BmbHVlbnR1aS93ZWItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYXJzZUNvbG9ySGV4UkdCIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWNvbG9ycyc7XG5cbnByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcbiAgZmx1ZW50QnV0dG9uKCksXG4gIGZsdWVudENhcmQoKSxcbiAgZmx1ZW50QmFkZ2UoKSxcbiAgZmx1ZW50VGV4dEZpZWxkKCksXG4gIGZsdWVudFJhZGlvKCksXG4gIGZsdWVudFJhZGlvR3JvdXAoKSxcbiAgZmx1ZW50Q2hlY2tib3goKSxcbiAgZmx1ZW50U3dpdGNoKClcbik7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpIGFzIEhUTUxFbGVtZW50O1xuc2lkZWJhciAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3Ioc2lkZWJhciwgbmV1dHJhbExheWVyMik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5ib2R5ICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihib2R5LCBuZXV0cmFsTGF5ZXIzKTtcblxuY29uc3QgdXBkYXRlU3R5bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXN0eWxlJyk7XG51cGRhdGVTdHlsZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGFjY2VudFBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdhY2NlbnQtY29sb3InXG4gICkgYXMgSFRNTEZvcm1FbGVtZW50O1xuICBjb25zdCBhY2NlbnRDb2xvciA9IGFjY2VudFBpY2tlci52YWx1ZTtcblxuICBjb25zdCBiYXNlUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2UtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4gIGNvbnN0IGJhc2VDb2xvciA9IGJhc2VQaWNrZXIudmFsdWU7XG5cbiAgaWYgKGJvZHkpIHtcbiAgICBhY2NlbnRCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICBib2R5LFxuICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihhY2NlbnRDb2xvcikhKVxuICAgICk7XG4gICAgbmV1dHJhbEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgIGJvZHksXG4gICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGJhc2VDb2xvcikhKVxuICAgICk7XG4gIH1cbn0pO1xuXG5jb25zdCBtb2RlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXN3aXRjaCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxubW9kZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgaWYgKCFtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5MaWdodE1vZGUpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkRhcmtNb2RlKTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMWQ0ZDZjM2IyZTI1MTJjODc3ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==