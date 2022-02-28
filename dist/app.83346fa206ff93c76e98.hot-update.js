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
    if (modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.DarkMode);
        slider.value = 98;
        modeSwitch.checked = false;
    }
    else if (!modeSwitch.checked) {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_14__.StandardLuminance.LightMode);
        slider.value = 15;
        modeSwitch.checked = true;
    }
});
slider.addEventListener('change', () => {
    body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.baseLayerLuminance.setValueFor(body, (100 - slider.value) / 100);
    console.log(slider.value);
    if (slider.value >= 46) {
        modeSwitch.checked = true;
    }
    else if (slider.value <= 45) {
        modeSwitch.checked = false;
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8cf89eaa4c9a975c19d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjgzMzQ2ZmEyMDZmZjkzYzc2ZTk4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9Ca0M7QUFDd0I7QUFFMUQsbUZBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQ2xDLHNFQUFZLEVBQUUsRUFDZCxvRUFBVSxFQUFFLEVBQ1oscUVBQVcsRUFBRSxFQUNiLHlFQUFlLEVBQUUsRUFDakIscUVBQVcsRUFBRSxFQUNiLDBFQUFnQixFQUFFLEVBQ2xCLHdFQUFjLEVBQUUsRUFDaEIsc0VBQVksRUFBRSxFQUNkLHNFQUFZLEVBQUUsRUFDZCw0RUFBaUIsRUFBRSxDQUNwQixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBQ2xFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDL0MsY0FBYyxDQUNBLENBQUM7QUFDakIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDNUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFDOUUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFMUUsT0FBTyxJQUFJLDRFQUFxQixDQUFDLE9BQU8sRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLDRFQUFxQixDQUFDLElBQUksRUFBRSxvRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFRLEVBQUU7SUFDckQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLElBQUk7WUFDRixrRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO1NBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQUk7WUFDRixtRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUN0QixJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDNUI7U0FBTSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtRQUM5QixJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLGtGQUEyQixDQUFDLENBQUM7UUFDMUUsTUFBTSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDM0I7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3JDLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7UUFDdEIsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7S0FDM0I7U0FBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1FBQzdCLFVBQVUsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQzVCO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQ3pHSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtdGVzdC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2Zhc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSxcbiAgZmx1ZW50QnV0dG9uLFxuICBmbHVlbnRDYXJkLFxuICBmaWxsQ29sb3IsXG4gIG5ldXRyYWxMYXllcjMsXG4gIG5ldXRyYWxMYXllcjIsXG4gIGJhc2VMYXllckx1bWluYW5jZSxcbiAgU3RhbmRhcmRMdW1pbmFuY2UsXG4gIG5ldXRyYWxCYXNlQ29sb3IsXG4gIFN3YXRjaFJHQixcbiAgYWNjZW50QmFzZUNvbG9yLFxuICBmbHVlbnRCYWRnZSxcbiAgZmx1ZW50VGV4dEZpZWxkLFxuICBmbHVlbnRSYWRpbyxcbiAgZmx1ZW50UmFkaW9Hcm91cCxcbiAgZmx1ZW50Q2hlY2tib3gsXG4gIGZsdWVudFN3aXRjaCxcbiAgZmx1ZW50U2xpZGVyLFxuICBmbHVlbnRTbGlkZXJMYWJlbCxcbn0gZnJvbSAnQGZsdWVudHVpL3dlYi1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhcnNlQ29sb3JIZXhSR0IgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtY29sb3JzJztcblxucHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSgpLnJlZ2lzdGVyKFxuICBmbHVlbnRCdXR0b24oKSxcbiAgZmx1ZW50Q2FyZCgpLFxuICBmbHVlbnRCYWRnZSgpLFxuICBmbHVlbnRUZXh0RmllbGQoKSxcbiAgZmx1ZW50UmFkaW8oKSxcbiAgZmx1ZW50UmFkaW9Hcm91cCgpLFxuICBmbHVlbnRDaGVja2JveCgpLFxuICBmbHVlbnRTd2l0Y2goKSxcbiAgZmx1ZW50U2xpZGVyKCksXG4gIGZsdWVudFNsaWRlckxhYmVsKClcbik7XG5cbmNvbnN0IGRlZmF1bHRDb2xvcnMgPSB7XG4gIGFjY2VudDogJyMwMzYwYjknLFxuICBiYXNlOiAnI2ViZWJlYicsXG59O1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCB1cGRhdGVTdHlsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAndXBkYXRlLXN0eWxlJ1xuKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IGFjY2VudFBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2NlbnQtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBiYXNlUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2UtY29sb3InKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5jb25zdCBtb2RlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXN3aXRjaCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zbGlkZXInKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbnNpZGViYXIgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKHNpZGViYXIsIG5ldXRyYWxMYXllcjIpO1xuYm9keSAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3IoYm9keSwgbmV1dHJhbExheWVyMyk7XG5cbmNvbnN0IHNldENvbG9yID0gKGNvbG9yOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAodHlwZSA9PT0gJ2FjY2VudCcpIHtcbiAgICBib2R5ICYmXG4gICAgICBhY2NlbnRCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jhc2UnKSB7XG4gICAgYm9keSAmJlxuICAgICAgbmV1dHJhbEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgICAgYm9keSxcbiAgICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihjb2xvcikhKVxuICAgICAgKTtcbiAgfVxufTtcblxudXBkYXRlU3R5bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGFjY2VudFBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYWNjZW50O1xuICBiYXNlUGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5iYXNlO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmFjY2VudCwgJ2FjY2VudCcpO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmJhc2UsICdiYXNlJyk7XG59KTtcblxuYWNjZW50UGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgc2V0Q29sb3IoYWNjZW50UGlja2VyLnZhbHVlLCAnYWNjZW50Jyk7XG59KTtcblxuYmFzZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGJhc2VQaWNrZXIudmFsdWUsICdiYXNlJyk7XG59KTtcblxubW9kZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgaWYgKG1vZGVTd2l0Y2guY2hlY2tlZCkge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkRhcmtNb2RlKTtcbiAgICBzbGlkZXIudmFsdWUgPSA5ODtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfSBlbHNlIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuTGlnaHRNb2RlKTtcbiAgICBzbGlkZXIudmFsdWUgPSAxNTtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xuICB9XG59KTtcblxuc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgKDEwMCAtIHNsaWRlci52YWx1ZSkgLyAxMDApO1xuICBjb25zb2xlLmxvZyhzbGlkZXIudmFsdWUpO1xuICBpZiAoc2xpZGVyLnZhbHVlID49IDQ2KSB7XG4gICAgbW9kZVN3aXRjaC5jaGVja2VkID0gdHJ1ZTtcbiAgfSBlbHNlIGlmIChzbGlkZXIudmFsdWUgPD0gNDUpIHtcbiAgICBtb2RlU3dpdGNoLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOGNmODllYWE0YzlhOTc1YzE5ZFwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==