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
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.DarkMode);
        slider.value = 100;
    }
    else if (!modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.LightMode);
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
/******/ 	__webpack_require__.h = () => ("887e2b644aec572626bf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmMzMDM2MmRkODAzYmIxNzZkOTJkLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9Ca0M7QUFDd0I7QUFFMUQsbUZBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQ2xDLHNFQUFZLEVBQUUsRUFDZCxvRUFBVSxFQUFFLEVBQ1oscUVBQVcsRUFBRSxFQUNiLHlFQUFlLEVBQUUsRUFDakIscUVBQVcsRUFBRSxFQUNiLDBFQUFnQixFQUFFLEVBQ2xCLHdFQUFjLEVBQUUsRUFDaEIsc0VBQVksRUFBRSxFQUNkLHNFQUFZLEVBQUUsRUFDZCw0RUFBaUIsRUFBRSxDQUNwQixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBQ2xFLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQWdCLENBQUM7QUFDL0UsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDNUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFDOUUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFMUUsT0FBTyxJQUFJLDRFQUFxQixDQUFDLE9BQU8sRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLDRFQUFxQixDQUFDLElBQUksRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFRLEVBQUU7SUFDckQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLElBQUk7WUFDRixrRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO1NBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQUk7WUFDRixtRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUN0QixJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7S0FDcEI7U0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUM5QixJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLGtGQUEyQixDQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDbEI7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7UUFDdEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDNUI7U0FBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1FBQzdCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQzNCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQ3BELFlBQVksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxVQUFVLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDM0IsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQ3ZHSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtdGVzdC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2Zhc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSxcbiAgZmx1ZW50QnV0dG9uLFxuICBmbHVlbnRDYXJkLFxuICBmaWxsQ29sb3IsXG4gIG5ldXRyYWxMYXllcjMsXG4gIG5ldXRyYWxMYXllcjIsXG4gIGJhc2VMYXllckx1bWluYW5jZSxcbiAgU3RhbmRhcmRMdW1pbmFuY2UsXG4gIG5ldXRyYWxCYXNlQ29sb3IsXG4gIFN3YXRjaFJHQixcbiAgYWNjZW50QmFzZUNvbG9yLFxuICBmbHVlbnRCYWRnZSxcbiAgZmx1ZW50VGV4dEZpZWxkLFxuICBmbHVlbnRSYWRpbyxcbiAgZmx1ZW50UmFkaW9Hcm91cCxcbiAgZmx1ZW50Q2hlY2tib3gsXG4gIGZsdWVudFN3aXRjaCxcbiAgZmx1ZW50U2xpZGVyLFxuICBmbHVlbnRTbGlkZXJMYWJlbCxcbn0gZnJvbSAnQGZsdWVudHVpL3dlYi1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhcnNlQ29sb3JIZXhSR0IgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtY29sb3JzJztcblxucHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSgpLnJlZ2lzdGVyKFxuICBmbHVlbnRCdXR0b24oKSxcbiAgZmx1ZW50Q2FyZCgpLFxuICBmbHVlbnRCYWRnZSgpLFxuICBmbHVlbnRUZXh0RmllbGQoKSxcbiAgZmx1ZW50UmFkaW8oKSxcbiAgZmx1ZW50UmFkaW9Hcm91cCgpLFxuICBmbHVlbnRDaGVja2JveCgpLFxuICBmbHVlbnRTd2l0Y2goKSxcbiAgZmx1ZW50U2xpZGVyKCksXG4gIGZsdWVudFNsaWRlckxhYmVsKClcbik7XG5cbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XG4gIGFjY2VudDogJyMwMzYwYjknLFxuICBiYXNlOiAnI2ViZWJlYicsXG59O1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCByZXNldFN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LXN0eWxlJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZW50LWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgYmFzZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zd2l0Y2gnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc2xpZGVyJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG5zaWRlYmFyICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihzaWRlYmFyLCBuZXV0cmFsTGF5ZXIyKTtcbmJvZHkgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKGJvZHksIG5ldXRyYWxMYXllcjMpO1xuXG5jb25zdCBzZXRDb2xvciA9IChjb2xvcjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGUgPT09ICdhY2NlbnQnKSB7XG4gICAgYm9keSAmJlxuICAgICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYXNlJykge1xuICAgIGJvZHkgJiZcbiAgICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH1cbn07XG5cbmFjY2VudFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGFjY2VudFBpY2tlci52YWx1ZSwgJ2FjY2VudCcpO1xufSk7XG5cbmJhc2VQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihiYXNlUGlja2VyLnZhbHVlLCAnYmFzZScpO1xufSk7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmIChtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gICAgc2xpZGVyLnZhbHVlID0gMTAwO1xuICB9IGVsc2UgaWYgKCFtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5MaWdodE1vZGUpO1xuICAgIHNsaWRlci52YWx1ZSA9IDA7XG4gIH1cbn0pO1xuXG5zbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCAoMTAwIC0gc2xpZGVyLnZhbHVlKSAvIDEwMCk7XG4gIGNvbnNvbGUubG9nKHNsaWRlci52YWx1ZSk7XG4gIGlmIChzbGlkZXIudmFsdWUgPD0gNDUpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChzbGlkZXIudmFsdWUgPj0gNDYpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59KTtcblxucmVzZXRTdHlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgYWNjZW50UGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5hY2NlbnQ7XG4gIGJhc2VQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmJhc2U7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYWNjZW50LCAnYWNjZW50Jyk7XG4gIHNldENvbG9yKGRlZmF1bHRDb2xvcnMuYmFzZSwgJ2Jhc2UnKTtcbiAgbW9kZVN3aXRjaC5jaGVja2VkID0gZmFsc2U7XG4gIHNsaWRlci52YWx1ZSA9IDA7XG59KTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg4N2UyYjY0NGFlYzU3MjYyNmJmXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9