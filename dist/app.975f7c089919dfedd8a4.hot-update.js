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
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/utilities/base-layer-luminance.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");


(0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__.provideFluentDesignSystem)().register((0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.fluentButton)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.fluentCard)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__.fluentBadge)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__.fluentTextField)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__.fluentRadio)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__.fluentRadioGroup)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__.fluentCheckbox)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__.fluentSwitch)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fluentSlider)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.fluentSliderLabel)());
const defaultColors = {
    accent: '#0360b9',
    base: '#ebebeb',
};
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const updateStyleButton = document.getElementById('update-style');
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
updateStyleButton.addEventListener('click', () => {
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
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.LightMode);
        slider.value = 15;
    }
    else {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.DarkMode);
        slider.value = 98;
    }
});
slider.addEventListener('change', () => {
    body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, (100 - slider.value) / 100);
    console.log(slider.value);
    if (slider.value <= 45) {
        modeSwitch.checked = true;
    }
    else if (slider.value >= 46) {
        modeSwitch.checked = false;
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2100239fabae068fb3a6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjk3NWY3YzA4OTkxOWRmZWRkOGE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9Ca0M7QUFDd0I7QUFFMUQsbUZBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQ2xDLHNFQUFZLEVBQUUsRUFDZCxvRUFBVSxFQUFFLEVBQ1oscUVBQVcsRUFBRSxFQUNiLHlFQUFlLEVBQUUsRUFDakIscUVBQVcsRUFBRSxFQUNiLDBFQUFnQixFQUFFLEVBQ2xCLHdFQUFjLEVBQUUsRUFDaEIsc0VBQVksRUFBRSxFQUNkLHNFQUFZLEVBQUUsRUFDZCw0RUFBaUIsRUFBRSxDQUNwQixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBQ2xFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDL0MsY0FBYyxDQUNBLENBQUM7QUFDakIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDNUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFDOUUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFMUUsT0FBTyxJQUFJLDRFQUFxQixDQUFDLE9BQU8sRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLDRFQUFxQixDQUFDLElBQUksRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFRLEVBQUU7SUFDckQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLElBQUk7WUFDRixrRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO1NBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQUk7WUFDRixtRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsa0ZBQTJCLENBQUMsQ0FBQztRQUMxRSxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztLQUNuQjtTQUFNO1FBQ0wsSUFBSSxJQUFJLHFGQUE4QixDQUFDLElBQUksRUFBRSxpRkFBMEIsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN6RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1FBQ3RCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQzNCO1NBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUM3QixVQUFVLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUM1QjtBQUNILENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7VUN2R0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIHByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0sXG4gIGZsdWVudEJ1dHRvbixcbiAgZmx1ZW50Q2FyZCxcbiAgZmlsbENvbG9yLFxuICBuZXV0cmFsTGF5ZXIzLFxuICBuZXV0cmFsTGF5ZXIyLFxuICBiYXNlTGF5ZXJMdW1pbmFuY2UsXG4gIFN0YW5kYXJkTHVtaW5hbmNlLFxuICBuZXV0cmFsQmFzZUNvbG9yLFxuICBTd2F0Y2hSR0IsXG4gIGFjY2VudEJhc2VDb2xvcixcbiAgZmx1ZW50QmFkZ2UsXG4gIGZsdWVudFRleHRGaWVsZCxcbiAgZmx1ZW50UmFkaW8sXG4gIGZsdWVudFJhZGlvR3JvdXAsXG4gIGZsdWVudENoZWNrYm94LFxuICBmbHVlbnRTd2l0Y2gsXG4gIGZsdWVudFNsaWRlcixcbiAgZmx1ZW50U2xpZGVyTGFiZWwsXG59IGZyb20gJ0BmbHVlbnR1aS93ZWItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYXJzZUNvbG9ySGV4UkdCIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWNvbG9ycyc7XG5cbnByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcbiAgZmx1ZW50QnV0dG9uKCksXG4gIGZsdWVudENhcmQoKSxcbiAgZmx1ZW50QmFkZ2UoKSxcbiAgZmx1ZW50VGV4dEZpZWxkKCksXG4gIGZsdWVudFJhZGlvKCksXG4gIGZsdWVudFJhZGlvR3JvdXAoKSxcbiAgZmx1ZW50Q2hlY2tib3goKSxcbiAgZmx1ZW50U3dpdGNoKCksXG4gIGZsdWVudFNsaWRlcigpLFxuICBmbHVlbnRTbGlkZXJMYWJlbCgpXG4pO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xuICBhY2NlbnQ6ICcjMDM2MGI5JyxcbiAgYmFzZTogJyNlYmViZWInLFxufTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgdXBkYXRlU3R5bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgJ3VwZGF0ZS1zdHlsZSdcbikgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZW50LWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgYmFzZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zd2l0Y2gnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc2xpZGVyJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG5zaWRlYmFyICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihzaWRlYmFyLCBuZXV0cmFsTGF5ZXIyKTtcbmJvZHkgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKGJvZHksIG5ldXRyYWxMYXllcjMpO1xuXG5jb25zdCBzZXRDb2xvciA9IChjb2xvcjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGUgPT09ICdhY2NlbnQnKSB7XG4gICAgYm9keSAmJlxuICAgICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYXNlJykge1xuICAgIGJvZHkgJiZcbiAgICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH1cbn07XG5cbnVwZGF0ZVN0eWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBhY2NlbnRQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgYmFzZVBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYmFzZTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5hY2NlbnQsICdhY2NlbnQnKTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5iYXNlLCAnYmFzZScpO1xufSk7XG5cbmFjY2VudFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGFjY2VudFBpY2tlci52YWx1ZSwgJ2FjY2VudCcpO1xufSk7XG5cbmJhc2VQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihiYXNlUGlja2VyLnZhbHVlLCAnYmFzZScpO1xufSk7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuTGlnaHRNb2RlKTtcbiAgICBzbGlkZXIudmFsdWUgPSAxNTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gICAgc2xpZGVyLnZhbHVlID0gOTg7XG4gIH1cbn0pO1xuXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCAoMTAwIC0gc2xpZGVyLnZhbHVlKSAvIDEwMCk7XG4gIGNvbnNvbGUubG9nKHNsaWRlci52YWx1ZSk7XG4gIGlmIChzbGlkZXIudmFsdWUgPD0gNDUpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHNsaWRlci52YWx1ZSA+PSA0Nikge1xuICAgIG1vZGVTd2l0Y2guY2hlY2tlZCA9IGZhbHNlO1xuICB9XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIxMDAyMzlmYWJhZTA2OGZiM2E2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9