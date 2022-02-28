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
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.baseLayerLuminance.setValueFor(body, 0.3);
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
/******/ 	__webpack_require__.h = () => ("c19ea4b804f165e2c6a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmE4NGM3M2VhMDNkOWU3ZmE2MWMwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmtDO0FBQ3dCO0FBRTFELG1GQUF5QixFQUFFLENBQUMsUUFBUSxDQUNsQyxzRUFBWSxFQUFFLEVBQ2Qsb0VBQVUsRUFBRSxFQUNaLHFFQUFXLEVBQUUsRUFDYix5RUFBZSxFQUFFLEVBQ2pCLHFFQUFXLEVBQUUsRUFDYiwwRUFBZ0IsRUFBRSxFQUNsQix3RUFBYyxFQUFFLEVBQ2hCLHNFQUFZLEVBQUUsQ0FDZixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsT0FBTyxJQUFJLDJFQUFxQixDQUFDLE9BQU8sRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFekQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsSUFBSSxJQUFJLDJFQUFxQixDQUFDLElBQUksRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2xFLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDdEQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDMUMsY0FBYyxDQUNJLENBQUM7SUFDckIsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUV2QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztJQUM1RSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBRW5DLElBQUksSUFBSSxFQUFFO1FBQ1IsaUZBQTJCLENBQ3pCLElBQUksRUFDSixxRUFBYyxDQUFDLHlFQUFnQixDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQy9DLENBQUM7UUFDRixrRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FDN0MsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUU5RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUN2QixJQUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ25EO1NBQU07UUFDTCxJQUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDcEVIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxufSBmcm9tICdAZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFyc2VDb2xvckhleFJHQiB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1jb2xvcnMnO1xuXG5wcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtKCkucmVnaXN0ZXIoXG4gIGZsdWVudEJ1dHRvbigpLFxuICBmbHVlbnRDYXJkKCksXG4gIGZsdWVudEJhZGdlKCksXG4gIGZsdWVudFRleHRGaWVsZCgpLFxuICBmbHVlbnRSYWRpbygpLFxuICBmbHVlbnRSYWRpb0dyb3VwKCksXG4gIGZsdWVudENoZWNrYm94KCksXG4gIGZsdWVudFN3aXRjaCgpXG4pO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSBhcyBIVE1MRWxlbWVudDtcbnNpZGViYXIgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKHNpZGViYXIsIG5ldXRyYWxMYXllcjIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuYm9keSAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3IoYm9keSwgbmV1dHJhbExheWVyMyk7XG5cbmNvbnN0IHVwZGF0ZVN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1zdHlsZScpO1xudXBkYXRlU3R5bGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBjb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAnYWNjZW50LWNvbG9yJ1xuICApIGFzIEhUTUxGb3JtRWxlbWVudDtcbiAgY29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRQaWNrZXIudmFsdWU7XG5cbiAgY29uc3QgYmFzZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuICBjb25zdCBiYXNlQ29sb3IgPSBiYXNlUGlja2VyLnZhbHVlO1xuXG4gIGlmIChib2R5KSB7XG4gICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgYm9keSxcbiAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoYWNjZW50Q29sb3IpISlcbiAgICApO1xuICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICBib2R5LFxuICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihiYXNlQ29sb3IpISlcbiAgICApO1xuICB9XG59KTtcblxuY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zd2l0Y2gnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgMC4zKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzE5ZWE0YjgwNGYxNjVlMmM2YTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=