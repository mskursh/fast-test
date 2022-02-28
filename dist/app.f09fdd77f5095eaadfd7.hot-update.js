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
    }
    else {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.DarkMode);
    }
});
slider.addEventListener('change', () => {
    body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, slider.value / 100);
    console.log(slider.value);
    if (slider.value <= 45) {
        modeSwitch.checked = true;
    }
    else if (slider.value > 45) {
        modeSwitch.cheked = false;
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("13d0540b12056822e5aa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmYwOWZkZDc3ZjUwOTVlYWFkZmQ3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9Ca0M7QUFDd0I7QUFFMUQsbUZBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQ2xDLHNFQUFZLEVBQUUsRUFDZCxvRUFBVSxFQUFFLEVBQ1oscUVBQVcsRUFBRSxFQUNiLHlFQUFlLEVBQUUsRUFDakIscUVBQVcsRUFBRSxFQUNiLDBFQUFnQixFQUFFLEVBQ2xCLHdFQUFjLEVBQUUsRUFDaEIsc0VBQVksRUFBRSxFQUNkLHNFQUFZLEVBQUUsRUFDZCw0RUFBaUIsRUFBRSxDQUNwQixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBQ2xFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDL0MsY0FBYyxDQUNBLENBQUM7QUFDakIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDNUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFDOUUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFMUUsT0FBTyxJQUFJLDRFQUFxQixDQUFDLE9BQU8sRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLDRFQUFxQixDQUFDLElBQUksRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFRLEVBQUU7SUFDckQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLElBQUk7WUFDRixrRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO1NBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQUk7WUFDRixtRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsa0ZBQTJCLENBQUMsQ0FBQztLQUMzRTtTQUFNO1FBQ0wsSUFBSSxJQUFJLHFGQUE4QixDQUFDLElBQUksRUFBRSxpRkFBMEIsQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUNyQyxJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtRQUN0QixVQUFVLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUMzQjtTQUFNLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLEVBQUU7UUFDNUIsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDM0I7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDckdIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxuICBmbHVlbnRTbGlkZXIsXG4gIGZsdWVudFNsaWRlckxhYmVsLFxufSBmcm9tICdAZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFyc2VDb2xvckhleFJHQiB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1jb2xvcnMnO1xuXG5wcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtKCkucmVnaXN0ZXIoXG4gIGZsdWVudEJ1dHRvbigpLFxuICBmbHVlbnRDYXJkKCksXG4gIGZsdWVudEJhZGdlKCksXG4gIGZsdWVudFRleHRGaWVsZCgpLFxuICBmbHVlbnRSYWRpbygpLFxuICBmbHVlbnRSYWRpb0dyb3VwKCksXG4gIGZsdWVudENoZWNrYm94KCksXG4gIGZsdWVudFN3aXRjaCgpLFxuICBmbHVlbnRTbGlkZXIoKSxcbiAgZmx1ZW50U2xpZGVyTGFiZWwoKVxuKTtcblxuY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcbiAgYWNjZW50OiAnIzAzNjBiOScsXG4gIGJhc2U6ICcjZWJlYmViJyxcbn07XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHVwZGF0ZVN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICd1cGRhdGUtc3R5bGUnXG4pIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgYWNjZW50UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VudC1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGJhc2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IG1vZGVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3dpdGNoJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3Qgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXNsaWRlcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxuc2lkZWJhciAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3Ioc2lkZWJhciwgbmV1dHJhbExheWVyMik7XG5ib2R5ICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihib2R5LCBuZXV0cmFsTGF5ZXIzKTtcblxuY29uc3Qgc2V0Q29sb3IgPSAoY29sb3I6IHN0cmluZywgdHlwZTogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGlmICh0eXBlID09PSAnYWNjZW50Jykge1xuICAgIGJvZHkgJiZcbiAgICAgIGFjY2VudEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgICAgYm9keSxcbiAgICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihjb2xvcikhKVxuICAgICAgKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnYmFzZScpIHtcbiAgICBib2R5ICYmXG4gICAgICBuZXV0cmFsQmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9XG59O1xuXG51cGRhdGVTdHlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgYWNjZW50UGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5hY2NlbnQ7XG4gIGJhc2VQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmJhc2U7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYWNjZW50LCAnYWNjZW50Jyk7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYmFzZSwgJ2Jhc2UnKTtcbn0pO1xuXG5hY2NlbnRQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihhY2NlbnRQaWNrZXIudmFsdWUsICdhY2NlbnQnKTtcbn0pO1xuXG5iYXNlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgc2V0Q29sb3IoYmFzZVBpY2tlci52YWx1ZSwgJ2Jhc2UnKTtcbn0pO1xuXG5tb2RlU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBpZiAoIW1vZGVTd2l0Y2guY2hlY2tlZCkge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkxpZ2h0TW9kZSk7XG4gIH0gZWxzZSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuRGFya01vZGUpO1xuICB9XG59KTtcblxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgc2xpZGVyLnZhbHVlIC8gMTAwKTtcbiAgY29uc29sZS5sb2coc2xpZGVyLnZhbHVlKTtcbiAgaWYgKHNsaWRlci52YWx1ZSA8PSA0NSkge1xuICAgIG1vZGVTd2l0Y2guY2hlY2tlZCA9IHRydWU7XG4gIH0gZWxzZSBpZiAoc2xpZGVyLnZhbHVlID4gNDUpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWtlZCA9IGZhbHNlO1xuICB9XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEzZDA1NDBiMTIwNTY4MjJlNWFhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9