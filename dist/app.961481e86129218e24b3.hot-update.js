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
const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const updateStyleButton = document.getElementById('update-style');
const accentPicker = document.getElementById('accent-color');
const basePicker = document.getElementById('base-color');
const modeSwitch = document.querySelector('fluent-switch');
sidebar && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(sidebar, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer2);
body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fillColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.neutralLayer3);
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
/******/ 	__webpack_require__.h = () => ("e87922222530703dacdc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjk2MTQ4MWU4NjEyOTIxOGUyNGIzLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmtDO0FBQ3dCO0FBRTFELG1GQUF5QixFQUFFLENBQUMsUUFBUSxDQUNsQyxzRUFBWSxFQUFFLEVBQ2Qsb0VBQVUsRUFBRSxFQUNaLHFFQUFXLEVBQUUsRUFDYix5RUFBZSxFQUFFLEVBQ2pCLHFFQUFXLEVBQUUsRUFDYiwwRUFBZ0IsRUFBRSxFQUNsQix3RUFBYyxFQUFFLEVBQ2hCLHNFQUFZLEVBQUUsQ0FDZixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUc7SUFDcEIsTUFBTSxFQUFFLFNBQVM7SUFDakIsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVGLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFnQixDQUFDO0FBQzNELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0FBQ2xFLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDL0MsY0FBYyxDQUNBLENBQUM7QUFDakIsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQW9CLENBQUM7QUFDaEYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQW9CLENBQUM7QUFDNUUsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFOUUsT0FBTyxJQUFJLDJFQUFxQixDQUFDLE9BQU8sRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFDekQsSUFBSSxJQUFJLDJFQUFxQixDQUFDLElBQUksRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFbkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFRLEVBQUU7SUFDckQsSUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3JCLElBQUk7WUFDRixpRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO1NBQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1FBQzFCLElBQUk7WUFDRixrRkFBNEIsQ0FDMUIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FDekMsQ0FBQztLQUNMO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxvRkFBOEIsQ0FBQyxJQUFJLEVBQUUsa0ZBQTJCLENBQUMsQ0FBQztLQUMzRTtTQUFNO1FBQ0wsSUFBSSxJQUFJLG9GQUE4QixDQUFDLElBQUksRUFBRSxpRkFBMEIsQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQ3RGSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtdGVzdC8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL2Zhc3QtdGVzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgcHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSxcbiAgZmx1ZW50QnV0dG9uLFxuICBmbHVlbnRDYXJkLFxuICBmaWxsQ29sb3IsXG4gIG5ldXRyYWxMYXllcjMsXG4gIG5ldXRyYWxMYXllcjIsXG4gIGJhc2VMYXllckx1bWluYW5jZSxcbiAgU3RhbmRhcmRMdW1pbmFuY2UsXG4gIG5ldXRyYWxCYXNlQ29sb3IsXG4gIFN3YXRjaFJHQixcbiAgYWNjZW50QmFzZUNvbG9yLFxuICBmbHVlbnRCYWRnZSxcbiAgZmx1ZW50VGV4dEZpZWxkLFxuICBmbHVlbnRSYWRpbyxcbiAgZmx1ZW50UmFkaW9Hcm91cCxcbiAgZmx1ZW50Q2hlY2tib3gsXG4gIGZsdWVudFN3aXRjaCxcbn0gZnJvbSAnQGZsdWVudHVpL3dlYi1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhcnNlQ29sb3JIZXhSR0IgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtY29sb3JzJztcblxucHJvdmlkZUZsdWVudERlc2lnblN5c3RlbSgpLnJlZ2lzdGVyKFxuICBmbHVlbnRCdXR0b24oKSxcbiAgZmx1ZW50Q2FyZCgpLFxuICBmbHVlbnRCYWRnZSgpLFxuICBmbHVlbnRUZXh0RmllbGQoKSxcbiAgZmx1ZW50UmFkaW8oKSxcbiAgZmx1ZW50UmFkaW9Hcm91cCgpLFxuICBmbHVlbnRDaGVja2JveCgpLFxuICBmbHVlbnRTd2l0Y2goKVxuKTtcblxuY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcbiAgYWNjZW50OiAnIzAzNjBiOScsXG4gIGJhc2U6ICcjZWJlYmViJyxcbn07XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHVwZGF0ZVN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICd1cGRhdGUtc3R5bGUnXG4pIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgYWNjZW50UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VudC1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGJhc2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IG1vZGVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3dpdGNoJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG5zaWRlYmFyICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihzaWRlYmFyLCBuZXV0cmFsTGF5ZXIyKTtcbmJvZHkgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKGJvZHksIG5ldXRyYWxMYXllcjMpO1xuXG5jb25zdCBzZXRDb2xvciA9IChjb2xvcjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGUgPT09ICdhY2NlbnQnKSB7XG4gICAgYm9keSAmJlxuICAgICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYXNlJykge1xuICAgIGJvZHkgJiZcbiAgICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH1cbn07XG5cbnVwZGF0ZVN0eWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBhY2NlbnRQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgYmFzZVBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYmFzZTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5hY2NlbnQsICdhY2NlbnQnKTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5iYXNlLCAnYmFzZScpO1xufSk7XG5cbmFjY2VudFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGFjY2VudFBpY2tlci52YWx1ZSwgJ2FjY2VudCcpO1xufSk7XG5cbmJhc2VQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihiYXNlUGlja2VyLnZhbHVlLCAnYmFzZScpO1xufSk7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuTGlnaHRNb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTg3OTIyMjIyNTMwNzAzZGFjZGNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=