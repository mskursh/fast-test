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
// const updateStyleButton = document.getElementById('update-style');
// updateStyleButton?.addEventListener('click', (): void => {
//   const accentPicker = document.getElementById(
//     'accent-color'
//   ) as HTMLFormElement;
//   const accentColor = accentPicker.value;
//   const basePicker = document.getElementById('base-color') as HTMLFormElement;
//   const baseColor = basePicker.value;
//   if (body) {
//     accentBaseColor.setValueFor(
//       body,
//       SwatchRGB.from(parseColorHexRGB(accentColor)!)
//     );
//     neutralBaseColor.setValueFor(
//       body,
//       SwatchRGB.from(parseColorHexRGB(baseColor)!)
//     );
//   }
// });
const accentPicker = document.getElementById('accent-color');
accentPicker.addEventListener('change', () => {
    const accentColor = accentPicker.value;
    body &&
        _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(accentColor)));
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
/******/ 	__webpack_require__.h = () => ("24e5ca0974ca90f145db")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmI3ODI3NTM1YTA2ZjZmZDAyODYyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmtDO0FBQ3dCO0FBRTFELG1GQUF5QixFQUFFLENBQUMsUUFBUSxDQUNsQyxzRUFBWSxFQUFFLEVBQ2Qsb0VBQVUsRUFBRSxFQUNaLHFFQUFXLEVBQUUsRUFDYix5RUFBZSxFQUFFLEVBQ2pCLHFFQUFXLEVBQUUsRUFDYiwwRUFBZ0IsRUFBRSxFQUNsQix3RUFBYyxFQUFFLEVBQ2hCLHNFQUFZLEVBQUUsQ0FDZixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsT0FBTyxJQUFJLDJFQUFxQixDQUFDLE9BQU8sRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFekQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsSUFBSSxJQUFJLDJFQUFxQixDQUFDLElBQUksRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFbkQscUVBQXFFO0FBQ3JFLDZEQUE2RDtBQUM3RCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw0Q0FBNEM7QUFFNUMsaUZBQWlGO0FBQ2pGLHdDQUF3QztBQUV4QyxnQkFBZ0I7QUFDaEIsbUNBQW1DO0FBQ25DLGNBQWM7QUFDZCx1REFBdUQ7QUFDdkQsU0FBUztBQUNULG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QscURBQXFEO0FBQ3JELFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTtBQUVOLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFvQixDQUFDO0FBQ2hGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBUyxFQUFFO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDdkMsSUFBSTtRQUNGLGlGQUEyQixDQUN6QixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUMvQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUU5RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUN2QixJQUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLGtGQUEyQixDQUFDLENBQUM7S0FDM0U7U0FBTTtRQUNMLElBQUksSUFBSSxvRkFBOEIsQ0FBQyxJQUFJLEVBQUUsaUZBQTBCLENBQUMsQ0FBQztLQUMxRTtBQUNILENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUM5RUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0sXG4gIGZsdWVudEJ1dHRvbixcbiAgZmx1ZW50Q2FyZCxcbiAgZmlsbENvbG9yLFxuICBuZXV0cmFsTGF5ZXIzLFxuICBuZXV0cmFsTGF5ZXIyLFxuICBiYXNlTGF5ZXJMdW1pbmFuY2UsXG4gIFN0YW5kYXJkTHVtaW5hbmNlLFxuICBuZXV0cmFsQmFzZUNvbG9yLFxuICBTd2F0Y2hSR0IsXG4gIGFjY2VudEJhc2VDb2xvcixcbiAgZmx1ZW50QmFkZ2UsXG4gIGZsdWVudFRleHRGaWVsZCxcbiAgZmx1ZW50UmFkaW8sXG4gIGZsdWVudFJhZGlvR3JvdXAsXG4gIGZsdWVudENoZWNrYm94LFxuICBmbHVlbnRTd2l0Y2gsXG59IGZyb20gJ0BmbHVlbnR1aS93ZWItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYXJzZUNvbG9ySGV4UkdCIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWNvbG9ycyc7XG5cbnByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcbiAgZmx1ZW50QnV0dG9uKCksXG4gIGZsdWVudENhcmQoKSxcbiAgZmx1ZW50QmFkZ2UoKSxcbiAgZmx1ZW50VGV4dEZpZWxkKCksXG4gIGZsdWVudFJhZGlvKCksXG4gIGZsdWVudFJhZGlvR3JvdXAoKSxcbiAgZmx1ZW50Q2hlY2tib3goKSxcbiAgZmx1ZW50U3dpdGNoKClcbik7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpIGFzIEhUTUxFbGVtZW50O1xuc2lkZWJhciAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3Ioc2lkZWJhciwgbmV1dHJhbExheWVyMik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5ib2R5ICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihib2R5LCBuZXV0cmFsTGF5ZXIzKTtcblxuLy8gY29uc3QgdXBkYXRlU3R5bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXN0eWxlJyk7XG4vLyB1cGRhdGVTdHlsZUJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4vLyAgIGNvbnN0IGFjY2VudFBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuLy8gICAgICdhY2NlbnQtY29sb3InXG4vLyAgICkgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gICBjb25zdCBhY2NlbnRDb2xvciA9IGFjY2VudFBpY2tlci52YWx1ZTtcblxuLy8gICBjb25zdCBiYXNlUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2UtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG4vLyAgIGNvbnN0IGJhc2VDb2xvciA9IGJhc2VQaWNrZXIudmFsdWU7XG5cbi8vICAgaWYgKGJvZHkpIHtcbi8vICAgICBhY2NlbnRCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4vLyAgICAgICBib2R5LFxuLy8gICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihhY2NlbnRDb2xvcikhKVxuLy8gICAgICk7XG4vLyAgICAgbmV1dHJhbEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbi8vICAgICAgIGJvZHksXG4vLyAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGJhc2VDb2xvcikhKVxuLy8gICAgICk7XG4vLyAgIH1cbi8vIH0pO1xuXG5jb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZW50LWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuYWNjZW50UGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgY29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRQaWNrZXIudmFsdWU7XG4gIGJvZHkgJiZcbiAgICBhY2NlbnRCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICBib2R5LFxuICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihhY2NlbnRDb2xvcikhKVxuICAgICk7XG59KTtcblxuY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zd2l0Y2gnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuTGlnaHRNb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjRlNWNhMDk3NGNhOTBmMTQ1ZGJcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=