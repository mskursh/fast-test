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
const basePicker = document.getElementById('base-color');
basePicker.addEventListener('change', () => {
    const baseColor = basePicker.value;
    body &&
        _fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_11__.parseColorHexRGB)(baseColor)));
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
/******/ 	__webpack_require__.h = () => ("bb22183f720ee96968b1")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjI0ZTVjYTA5NzRjYTkwZjE0NWRiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQmtDO0FBQ3dCO0FBRTFELG1GQUF5QixFQUFFLENBQUMsUUFBUSxDQUNsQyxzRUFBWSxFQUFFLEVBQ2Qsb0VBQVUsRUFBRSxFQUNaLHFFQUFXLEVBQUUsRUFDYix5RUFBZSxFQUFFLEVBQ2pCLHFFQUFXLEVBQUUsRUFDYiwwRUFBZ0IsRUFBRSxFQUNsQix3RUFBYyxFQUFFLEVBQ2hCLHNFQUFZLEVBQUUsQ0FDZixDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsT0FBTyxJQUFJLDJFQUFxQixDQUFDLE9BQU8sRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFekQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsSUFBSSxJQUFJLDJFQUFxQixDQUFDLElBQUksRUFBRSxtRUFBYSxDQUFDLENBQUM7QUFFbkQscUVBQXFFO0FBQ3JFLDZEQUE2RDtBQUM3RCxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiw0Q0FBNEM7QUFFNUMsaUZBQWlGO0FBQ2pGLHdDQUF3QztBQUV4QyxnQkFBZ0I7QUFDaEIsbUNBQW1DO0FBQ25DLGNBQWM7QUFDZCx1REFBdUQ7QUFDdkQsU0FBUztBQUNULG9DQUFvQztBQUNwQyxjQUFjO0FBQ2QscURBQXFEO0FBQ3JELFNBQVM7QUFDVCxNQUFNO0FBQ04sTUFBTTtBQUVOLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFvQixDQUFDO0FBQ2hGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBUyxFQUFFO0lBQ2pELE1BQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDdkMsSUFBSTtRQUNGLGlGQUEyQixDQUN6QixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUMvQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUM1RSxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25DLElBQUk7UUFDRixpRkFBMkIsQ0FDekIsSUFBSSxFQUNKLHFFQUFjLENBQUMseUVBQWdCLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FDN0MsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQW9CLENBQUM7QUFFOUUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7UUFDdkIsSUFBSSxJQUFJLG9GQUE4QixDQUFDLElBQUksRUFBRSxrRkFBMkIsQ0FBQyxDQUFDO0tBQzNFO1NBQU07UUFDTCxJQUFJLElBQUksb0ZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDeEZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxufSBmcm9tICdAZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFyc2VDb2xvckhleFJHQiB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1jb2xvcnMnO1xuXG5wcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtKCkucmVnaXN0ZXIoXG4gIGZsdWVudEJ1dHRvbigpLFxuICBmbHVlbnRDYXJkKCksXG4gIGZsdWVudEJhZGdlKCksXG4gIGZsdWVudFRleHRGaWVsZCgpLFxuICBmbHVlbnRSYWRpbygpLFxuICBmbHVlbnRSYWRpb0dyb3VwKCksXG4gIGZsdWVudENoZWNrYm94KCksXG4gIGZsdWVudFN3aXRjaCgpXG4pO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSBhcyBIVE1MRWxlbWVudDtcbnNpZGViYXIgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKHNpZGViYXIsIG5ldXRyYWxMYXllcjIpO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpIGFzIEhUTUxFbGVtZW50O1xuYm9keSAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3IoYm9keSwgbmV1dHJhbExheWVyMyk7XG5cbi8vIGNvbnN0IHVwZGF0ZVN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1zdHlsZScpO1xuLy8gdXBkYXRlU3R5bGVCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuLy8gICBjb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbi8vICAgICAnYWNjZW50LWNvbG9yJ1xuLy8gICApIGFzIEhUTUxGb3JtRWxlbWVudDtcbi8vICAgY29uc3QgYWNjZW50Q29sb3IgPSBhY2NlbnRQaWNrZXIudmFsdWU7XG5cbi8vICAgY29uc3QgYmFzZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuLy8gICBjb25zdCBiYXNlQ29sb3IgPSBiYXNlUGlja2VyLnZhbHVlO1xuXG4vLyAgIGlmIChib2R5KSB7XG4vLyAgICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuLy8gICAgICAgYm9keSxcbi8vICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoYWNjZW50Q29sb3IpISlcbi8vICAgICApO1xuLy8gICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4vLyAgICAgICBib2R5LFxuLy8gICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihiYXNlQ29sb3IpISlcbi8vICAgICApO1xuLy8gICB9XG4vLyB9KTtcblxuY29uc3QgYWNjZW50UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VudC1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmFjY2VudFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIGNvbnN0IGFjY2VudENvbG9yID0gYWNjZW50UGlja2VyLnZhbHVlO1xuICBib2R5ICYmXG4gICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgYm9keSxcbiAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoYWNjZW50Q29sb3IpISlcbiAgICApO1xufSk7XG5cbmNvbnN0IGJhc2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmJhc2VQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBjb25zdCBiYXNlQ29sb3IgPSBiYXNlUGlja2VyLnZhbHVlO1xuICBib2R5ICYmXG4gICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgYm9keSxcbiAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoYmFzZUNvbG9yKSEpXG4gICAgKTtcbn0pO1xuXG5jb25zdCBtb2RlU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZmx1ZW50LXN3aXRjaCcpIGFzIEhUTUxGb3JtRWxlbWVudDtcblxubW9kZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgaWYgKCFtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5MaWdodE1vZGUpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkRhcmtNb2RlKTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYjIyMTgzZjcyMGVlOTY5NjhiMVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==