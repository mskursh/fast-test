"use strict";
self["webpackHotUpdatefast_test"]("app",{

/***/ "./node_modules/@fluentui/web-components/dist/esm/slider-label/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@fluentui/web-components/dist/esm/slider-label/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fluentSliderLabel": () => (/* binding */ fluentSliderLabel),
/* harmony export */   "sliderLabelStyles": () => (/* binding */ sliderLabelStyles),
/* harmony export */   "SliderLabel": () => (/* reexport safe */ _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.SliderLabel)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js");
/* harmony import */ var _slider_label_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider-label.styles */ "./node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js");


/**
 * The Fluent Slider Label Custom Element. Implements {@link @microsoft/fast-foundation#SliderLabel},
 * {@link @microsoft/fast-foundation#sliderLabelTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider-label\>
 */
const fluentSliderLabel = _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.SliderLabel.compose({
    baseName: 'slider-label',
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.sliderLabelTemplate,
    styles: _slider_label_styles__WEBPACK_IMPORTED_MODULE_2__.sliderLabelStyles,
});
/**
 * Styles for SliderLabel
 * @public
 */
const sliderLabelStyles = _slider_label_styles__WEBPACK_IMPORTED_MODULE_2__.sliderLabelStyles;
/**
 * Slider label base class
 * @public
 */



/***/ }),

/***/ "./node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@fluentui/web-components/dist/esm/slider-label/slider-label.styles.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderLabelStyles": () => (/* binding */ sliderLabelStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@fluentui/web-components/dist/esm/design-tokens.js");




const sliderLabelStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('block')} :host {
      font-family: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.bodyFont};
    }
    .root {
      position: absolute;
      display: grid;
    }
    :host(.horizontal) {
      align-self: start;
      grid-row: 2;
      margin-top: -4px;
    }
    :host(.vertical) {
      justify-self: start;
      grid-column: 2;
      margin-left: 2px;
    }
    .container {
      display: grid;
      justify-self: center;
    }
    :host(.horizontal) .container {
      grid-template-rows: auto auto;
      grid-template-columns: 0;
    }
    :host(.vertical) .container {
      grid-template-columns: auto auto;
      grid-template-rows: 0;
      min-width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
    }
    .label {
      justify-self: center;
      align-self: center;
      white-space: nowrap;
      max-width: 30px;
      margin: 2px 0;
    }
    .mark {
      width: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.strokeWidth} * 1px);
      height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} * 1px);
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.neutralStrokeStrongRest};
      justify-self: center;
    }
    :host(.vertical) .mark {
      transform: rotate(90deg);
      align-self: center;
    }
    :host(.vertical) .label {
      margin-left: calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.designUnit} / 2) * 2px);
      align-self: center;
    }
    :host(.disabled) {
      opacity: ${_design_tokens__WEBPACK_IMPORTED_MODULE_2__.disabledOpacity};
    }
  `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        .mark {
          forced-color-adjust: none;
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__.SystemColors.FieldText};
        }
        :host(.disabled) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host(.disabled) .label {
          color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__.SystemColors.GrayText};
        }
        :host(.disabled) .mark {
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_4__.SystemColors.GrayText};
        }
      `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-element/dist/esm/templating/when.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "when": () => (/* binding */ when)
/* harmony export */ });
/**
 * A directive that enables basic conditional rendering in a template.
 * @param binding - The condition to test for rendering.
 * @param templateOrTemplateBinding - The template or a binding that gets
 * the template to render when the condition is true.
 * @public
 */
function when(binding, templateOrTemplateBinding) {
    const getTemplate = typeof templateOrTemplateBinding === "function"
        ? templateOrTemplateBinding
        : () => templateOrTemplateBinding;
    return (source, context) => binding(source, context) ? getTemplate(source, context) : null;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderLabel": () => (/* binding */ SliderLabel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/aria.js");
/* harmony import */ var _slider_slider_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../slider/slider-utilities */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js");
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");





const defaultConfig = {
    min: 0,
    max: 0,
    direction: _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr,
    orientation: _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal,
    disabled: false,
};
/**
 * A label element intended to be used with the {@link @microsoft/fast-foundation#(Slider:class)} component.
 *
 * @public
 */
class SliderLabel extends _foundation_element__WEBPACK_IMPORTED_MODULE_2__.FoundationElement {
    constructor() {
        super(...arguments);
        /**
         * Hides the tick mark.
         *
         * @public
         * @remarks
         * HTML Attribute: hide-mark
         */
        this.hideMark = false;
        /**
         * @internal
         */
        this.sliderDirection = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
        this.getSliderConfiguration = () => {
            if (!this.isSliderConfig(this.parentNode)) {
                this.sliderDirection = defaultConfig.direction || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
                this.sliderOrientation = defaultConfig.orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal;
                this.sliderMaxPosition = defaultConfig.max;
                this.sliderMinPosition = defaultConfig.min;
            }
            else {
                const parentSlider = this
                    .parentNode;
                const { min, max, direction, orientation, disabled } = parentSlider;
                if (disabled !== undefined) {
                    this.disabled = disabled;
                }
                this.sliderDirection = direction || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
                this.sliderOrientation = orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal;
                this.sliderMaxPosition = max;
                this.sliderMinPosition = min;
            }
        };
        this.positionAsStyle = () => {
            const direction = this.sliderDirection
                ? this.sliderDirection
                : _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.ltr;
            const pct = (0,_slider_slider_utilities__WEBPACK_IMPORTED_MODULE_3__.convertPixelToPercent)(Number(this.position), Number(this.sliderMinPosition), Number(this.sliderMaxPosition));
            let rightNum = Math.round((1 - pct) * 100);
            let leftNum = Math.round(pct * 100);
            if (Number.isNaN(leftNum) && Number.isNaN(rightNum)) {
                rightNum = 50;
                leftNum = 50;
            }
            if (this.sliderOrientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal) {
                return direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.Direction.rtl
                    ? `right: ${leftNum}%; left: ${rightNum}%;`
                    : `left: ${leftNum}%; right: ${rightNum}%;`;
            }
            else {
                return `top: ${leftNum}%; bottom: ${rightNum}%;`;
            }
        };
    }
    positionChanged() {
        this.positionStyle = this.positionAsStyle();
    }
    /**
     * @internal
     */
    sliderOrientationChanged() {
        void 0;
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.getSliderConfiguration();
        this.positionStyle = this.positionAsStyle();
        this.notifier = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.Observable.getNotifier(this.parentNode);
        this.notifier.subscribe(this, "orientation");
        this.notifier.subscribe(this, "direction");
        this.notifier.subscribe(this, "max");
        this.notifier.subscribe(this, "min");
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.notifier.unsubscribe(this, "orientation");
        this.notifier.unsubscribe(this, "direction");
        this.notifier.unsubscribe(this, "max");
        this.notifier.unsubscribe(this, "min");
    }
    /**
     * @internal
     */
    handleChange(source, propertyName) {
        switch (propertyName) {
            case "direction":
                this.sliderDirection = source.direction;
                break;
            case "orientation":
                this.sliderOrientation = source.orientation;
                break;
            case "max":
                this.sliderMinPosition = source.max;
                break;
            case "min":
                this.sliderMinPosition = source.min;
                break;
            default:
                break;
        }
        this.positionStyle = this.positionAsStyle();
    }
    isSliderConfig(node) {
        return node.max !== undefined && node.min !== undefined;
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "positionStyle", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr
], SliderLabel.prototype, "position", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "hide-mark", mode: "boolean" })
], SliderLabel.prototype, "hideMark", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_6__.attr)({ attribute: "disabled", mode: "boolean" })
], SliderLabel.prototype, "disabled", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderOrientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderMinPosition", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderMaxPosition", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.observable
], SliderLabel.prototype, "sliderDirection", void 0);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderLabelTemplate": () => (/* binding */ sliderLabelTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/when.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/aria.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(SliderLabel:class)} component.
 * @public
 */
const sliderLabelTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        aria-disabled="${x => x.disabled}"
        class="${x => x.sliderOrientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal}
            ${x => (x.disabled ? "disabled" : "")}"
    >
        <div ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("root")} part="root" class="root" style="${x => x.positionStyle}">
            <div class="container">
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_3__.when)(x => !x.hideMark, _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
                        <div class="mark"></div>
                    `)}
                <div class="label">
                    <slot></slot>
                </div>
            </div>
        </div>
    </template>
`;


/***/ }),

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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("64016171e02e8eb011bd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0FBRUYsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtJQUNyRCxZQUFZLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUM7SUFDMUMsVUFBVSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3RDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFTLEVBQUU7SUFDakQsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUMvQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFO1FBQ3ZCLElBQUksSUFBSSxxRkFBOEIsQ0FBQyxJQUFJLEVBQUUsa0ZBQTJCLENBQUMsQ0FBQztLQUMzRTtTQUFNO1FBQ0wsSUFBSSxJQUFJLHFGQUE4QixDQUFDLElBQUksRUFBRSxpRkFBMEIsQ0FBQyxDQUFDO0tBQzFFO0FBQ0gsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7OztVQzFGSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9AZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMvZGlzdC9lc20vc2xpZGVyLWxhYmVsL2luZGV4LmpzIiwid2VicGFjazovL2Zhc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9AZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMvZGlzdC9lc20vc2xpZGVyLWxhYmVsL3NsaWRlci1sYWJlbC5zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50L2Rpc3QvZXNtL3RlbXBsYXRpbmcvd2hlbi5qcyIsIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vc2xpZGVyLWxhYmVsL3NsaWRlci1sYWJlbC5qcyIsIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vc2xpZGVyLWxhYmVsL3NsaWRlci1sYWJlbC50ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly9mYXN0LXRlc3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNsaWRlckxhYmVsLCBzbGlkZXJMYWJlbFRlbXBsYXRlIGFzIHRlbXBsYXRlIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24nO1xuaW1wb3J0IHsgc2xpZGVyTGFiZWxTdHlsZXMgYXMgc3R5bGVzIH0gZnJvbSAnLi9zbGlkZXItbGFiZWwuc3R5bGVzJztcbi8qKlxuICogVGhlIEZsdWVudCBTbGlkZXIgTGFiZWwgQ3VzdG9tIEVsZW1lbnQuIEltcGxlbWVudHMge0BsaW5rIEBtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uI1NsaWRlckxhYmVsfSxcbiAqIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiNzbGlkZXJMYWJlbFRlbXBsYXRlfVxuICpcbiAqXG4gKiBAcHVibGljXG4gKiBAcmVtYXJrc1xuICogSFRNTCBFbGVtZW50OiBcXDxmbHVlbnQtc2xpZGVyLWxhYmVsXFw+XG4gKi9cbmV4cG9ydCBjb25zdCBmbHVlbnRTbGlkZXJMYWJlbCA9IFNsaWRlckxhYmVsLmNvbXBvc2Uoe1xuICAgIGJhc2VOYW1lOiAnc2xpZGVyLWxhYmVsJyxcbiAgICB0ZW1wbGF0ZSxcbiAgICBzdHlsZXMsXG59KTtcbi8qKlxuICogU3R5bGVzIGZvciBTbGlkZXJMYWJlbFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2xpZGVyTGFiZWxTdHlsZXMgPSBzdHlsZXM7XG4vKipcbiAqIFNsaWRlciBsYWJlbCBiYXNlIGNsYXNzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB7IFNsaWRlckxhYmVsIH07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XG5pbXBvcnQgeyBTeXN0ZW1Db2xvcnMgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3Qtd2ViLXV0aWxpdGllcyc7XG5pbXBvcnQgeyBkaXNwbGF5LCBmb3JjZWRDb2xvcnNTdHlsZXNoZWV0QmVoYXZpb3IsIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24nO1xuaW1wb3J0IHsgYm9keUZvbnQsIGRlc2lnblVuaXQsIGRpc2FibGVkT3BhY2l0eSwgbmV1dHJhbFN0cm9rZVN0cm9uZ1Jlc3QsIHN0cm9rZVdpZHRoIH0gZnJvbSAnLi4vZGVzaWduLXRva2Vucyc7XG5leHBvcnQgY29uc3Qgc2xpZGVyTGFiZWxTdHlsZXMgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gY3NzIGBcbiAgICAke2Rpc3BsYXkoJ2Jsb2NrJyl9IDpob3N0IHtcbiAgICAgIGZvbnQtZmFtaWx5OiAke2JvZHlGb250fTtcbiAgICB9XG4gICAgLnJvb3Qge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICB9XG4gICAgOmhvc3QoLmhvcml6b250YWwpIHtcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xuICAgICAgZ3JpZC1yb3c6IDI7XG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIH1cbiAgICA6aG9zdCgudmVydGljYWwpIHtcbiAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XG4gICAgICBncmlkLWNvbHVtbjogMjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIH1cbiAgICA6aG9zdCguaG9yaXpvbnRhbCkgLmNvbnRhaW5lciB7XG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMDtcbiAgICB9XG4gICAgOmhvc3QoLnZlcnRpY2FsKSAuY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwO1xuICAgICAgbWluLXdpZHRoOiBjYWxjKHZhcigtLXRodW1iLXNpemUpICogMXB4KTtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDFweCk7XG4gICAgfVxuICAgIC5sYWJlbCB7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBtYXgtd2lkdGg6IDMwcHg7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgIH1cbiAgICAubWFyayB7XG4gICAgICB3aWR0aDogY2FsYygke3N0cm9rZVdpZHRofSAqIDFweCk7XG4gICAgICBoZWlnaHQ6IGNhbGMoJHtkZXNpZ25Vbml0fSAqIDFweCk7XG4gICAgICBiYWNrZ3JvdW5kOiAke25ldXRyYWxTdHJva2VTdHJvbmdSZXN0fTtcbiAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIH1cbiAgICA6aG9zdCgudmVydGljYWwpIC5tYXJrIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgOmhvc3QoLnZlcnRpY2FsKSAubGFiZWwge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoKCR7ZGVzaWduVW5pdH0gLyAyKSAqIDJweCk7XG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIDpob3N0KC5kaXNhYmxlZCkge1xuICAgICAgb3BhY2l0eTogJHtkaXNhYmxlZE9wYWNpdHl9O1xuICAgIH1cbiAgYC53aXRoQmVoYXZpb3JzKGZvcmNlZENvbG9yc1N0eWxlc2hlZXRCZWhhdmlvcihjc3MgYFxuICAgICAgICAubWFyayB7XG4gICAgICAgICAgZm9yY2VkLWNvbG9yLWFkanVzdDogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5GaWVsZFRleHR9O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5kaXNhYmxlZCkge1xuICAgICAgICAgIGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguZGlzYWJsZWQpIC5sYWJlbCB7XG4gICAgICAgICAgY29sb3I6ICR7U3lzdGVtQ29sb3JzLkdyYXlUZXh0fTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguZGlzYWJsZWQpIC5tYXJrIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5HcmF5VGV4dH07XG4gICAgICAgIH1cbiAgICAgIGApKTtcbiIsIi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBlbmFibGVzIGJhc2ljIGNvbmRpdGlvbmFsIHJlbmRlcmluZyBpbiBhIHRlbXBsYXRlLlxuICogQHBhcmFtIGJpbmRpbmcgLSBUaGUgY29uZGl0aW9uIHRvIHRlc3QgZm9yIHJlbmRlcmluZy5cbiAqIEBwYXJhbSB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nIC0gVGhlIHRlbXBsYXRlIG9yIGEgYmluZGluZyB0aGF0IGdldHNcbiAqIHRoZSB0ZW1wbGF0ZSB0byByZW5kZXIgd2hlbiB0aGUgY29uZGl0aW9uIGlzIHRydWUuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aGVuKGJpbmRpbmcsIHRlbXBsYXRlT3JUZW1wbGF0ZUJpbmRpbmcpIHtcbiAgICBjb25zdCBnZXRUZW1wbGF0ZSA9IHR5cGVvZiB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyB0ZW1wbGF0ZU9yVGVtcGxhdGVCaW5kaW5nXG4gICAgICAgIDogKCkgPT4gdGVtcGxhdGVPclRlbXBsYXRlQmluZGluZztcbiAgICByZXR1cm4gKHNvdXJjZSwgY29udGV4dCkgPT4gYmluZGluZyhzb3VyY2UsIGNvbnRleHQpID8gZ2V0VGVtcGxhdGUoc291cmNlLCBjb250ZXh0KSA6IG51bGw7XG59XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhdHRyLCBPYnNlcnZhYmxlLCBvYnNlcnZhYmxlIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBEaXJlY3Rpb24sIE9yaWVudGF0aW9uIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBjb252ZXJ0UGl4ZWxUb1BlcmNlbnQgfSBmcm9tIFwiLi4vc2xpZGVyL3NsaWRlci11dGlsaXRpZXNcIjtcbmltcG9ydCB7IEZvdW5kYXRpb25FbGVtZW50IH0gZnJvbSBcIi4uL2ZvdW5kYXRpb24tZWxlbWVudFwiO1xuY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAwLFxuICAgIGRpcmVjdGlvbjogRGlyZWN0aW9uLmx0cixcbiAgICBvcmllbnRhdGlvbjogT3JpZW50YXRpb24uaG9yaXpvbnRhbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG59O1xuLyoqXG4gKiBBIGxhYmVsIGVsZW1lbnQgaW50ZW5kZWQgdG8gYmUgdXNlZCB3aXRoIHRoZSB7QGxpbmsgQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24jKFNsaWRlcjpjbGFzcyl9IGNvbXBvbmVudC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBTbGlkZXJMYWJlbCBleHRlbmRzIEZvdW5kYXRpb25FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGVzIHRoZSB0aWNrIG1hcmsuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IGhpZGUtbWFya1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oaWRlTWFyayA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNsaWRlckRpcmVjdGlvbiA9IERpcmVjdGlvbi5sdHI7XG4gICAgICAgIHRoaXMuZ2V0U2xpZGVyQ29uZmlndXJhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NsaWRlckNvbmZpZyh0aGlzLnBhcmVudE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJEaXJlY3Rpb24gPSBkZWZhdWx0Q29uZmlnLmRpcmVjdGlvbiB8fCBEaXJlY3Rpb24ubHRyO1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT3JpZW50YXRpb24gPSBkZWZhdWx0Q29uZmlnLm9yaWVudGF0aW9uIHx8IE9yaWVudGF0aW9uLmhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJNYXhQb3NpdGlvbiA9IGRlZmF1bHRDb25maWcubWF4O1xuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyTWluUG9zaXRpb24gPSBkZWZhdWx0Q29uZmlnLm1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudFNsaWRlciA9IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBtaW4sIG1heCwgZGlyZWN0aW9uLCBvcmllbnRhdGlvbiwgZGlzYWJsZWQgfSA9IHBhcmVudFNsaWRlcjtcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyRGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IERpcmVjdGlvbi5sdHI7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPcmllbnRhdGlvbiA9IG9yaWVudGF0aW9uIHx8IE9yaWVudGF0aW9uLmhvcml6b250YWw7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJNYXhQb3NpdGlvbiA9IG1heDtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlck1pblBvc2l0aW9uID0gbWluO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBvc2l0aW9uQXNTdHlsZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IHRoaXMuc2xpZGVyRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNsaWRlckRpcmVjdGlvblxuICAgICAgICAgICAgICAgIDogRGlyZWN0aW9uLmx0cjtcbiAgICAgICAgICAgIGNvbnN0IHBjdCA9IGNvbnZlcnRQaXhlbFRvUGVyY2VudChOdW1iZXIodGhpcy5wb3NpdGlvbiksIE51bWJlcih0aGlzLnNsaWRlck1pblBvc2l0aW9uKSwgTnVtYmVyKHRoaXMuc2xpZGVyTWF4UG9zaXRpb24pKTtcbiAgICAgICAgICAgIGxldCByaWdodE51bSA9IE1hdGgucm91bmQoKDEgLSBwY3QpICogMTAwKTtcbiAgICAgICAgICAgIGxldCBsZWZ0TnVtID0gTWF0aC5yb3VuZChwY3QgKiAxMDApO1xuICAgICAgICAgICAgaWYgKE51bWJlci5pc05hTihsZWZ0TnVtKSAmJiBOdW1iZXIuaXNOYU4ocmlnaHROdW0pKSB7XG4gICAgICAgICAgICAgICAgcmlnaHROdW0gPSA1MDtcbiAgICAgICAgICAgICAgICBsZWZ0TnVtID0gNTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zbGlkZXJPcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ydGxcbiAgICAgICAgICAgICAgICAgICAgPyBgcmlnaHQ6ICR7bGVmdE51bX0lOyBsZWZ0OiAke3JpZ2h0TnVtfSU7YFxuICAgICAgICAgICAgICAgICAgICA6IGBsZWZ0OiAke2xlZnROdW19JTsgcmlnaHQ6ICR7cmlnaHROdW19JTtgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGB0b3A6ICR7bGVmdE51bX0lOyBib3R0b206ICR7cmlnaHROdW19JTtgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBwb3NpdGlvbkNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb25TdHlsZSA9IHRoaXMucG9zaXRpb25Bc1N0eWxlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHNsaWRlck9yaWVudGF0aW9uQ2hhbmdlZCgpIHtcbiAgICAgICAgdm9pZCAwO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5nZXRTbGlkZXJDb25maWd1cmF0aW9uKCk7XG4gICAgICAgIHRoaXMucG9zaXRpb25TdHlsZSA9IHRoaXMucG9zaXRpb25Bc1N0eWxlKCk7XG4gICAgICAgIHRoaXMubm90aWZpZXIgPSBPYnNlcnZhYmxlLmdldE5vdGlmaWVyKHRoaXMucGFyZW50Tm9kZSk7XG4gICAgICAgIHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKHRoaXMsIFwib3JpZW50YXRpb25cIik7XG4gICAgICAgIHRoaXMubm90aWZpZXIuc3Vic2NyaWJlKHRoaXMsIFwiZGlyZWN0aW9uXCIpO1xuICAgICAgICB0aGlzLm5vdGlmaWVyLnN1YnNjcmliZSh0aGlzLCBcIm1heFwiKTtcbiAgICAgICAgdGhpcy5ub3RpZmllci5zdWJzY3JpYmUodGhpcywgXCJtaW5cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLm5vdGlmaWVyLnVuc3Vic2NyaWJlKHRoaXMsIFwib3JpZW50YXRpb25cIik7XG4gICAgICAgIHRoaXMubm90aWZpZXIudW5zdWJzY3JpYmUodGhpcywgXCJkaXJlY3Rpb25cIik7XG4gICAgICAgIHRoaXMubm90aWZpZXIudW5zdWJzY3JpYmUodGhpcywgXCJtYXhcIik7XG4gICAgICAgIHRoaXMubm90aWZpZXIudW5zdWJzY3JpYmUodGhpcywgXCJtaW5cIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGhhbmRsZUNoYW5nZShzb3VyY2UsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBzd2l0Y2ggKHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcImRpcmVjdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyRGlyZWN0aW9uID0gc291cmNlLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcmllbnRhdGlvblwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT3JpZW50YXRpb24gPSBzb3VyY2Uub3JpZW50YXRpb247XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWF4XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJNaW5Qb3NpdGlvbiA9IHNvdXJjZS5tYXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWluXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJNaW5Qb3NpdGlvbiA9IHNvdXJjZS5taW47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9zaXRpb25TdHlsZSA9IHRoaXMucG9zaXRpb25Bc1N0eWxlKCk7XG4gICAgfVxuICAgIGlzU2xpZGVyQ29uZmlnKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGUubWF4ICE9PSB1bmRlZmluZWQgJiYgbm9kZS5taW4gIT09IHVuZGVmaW5lZDtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBTbGlkZXJMYWJlbC5wcm90b3R5cGUsIFwicG9zaXRpb25TdHlsZVwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0clxuXSwgU2xpZGVyTGFiZWwucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImhpZGUtbWFya1wiLCBtb2RlOiBcImJvb2xlYW5cIiB9KVxuXSwgU2xpZGVyTGFiZWwucHJvdG90eXBlLCBcImhpZGVNYXJrXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcImRpc2FibGVkXCIsIG1vZGU6IFwiYm9vbGVhblwiIH0pXG5dLCBTbGlkZXJMYWJlbC5wcm90b3R5cGUsIFwiZGlzYWJsZWRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIFNsaWRlckxhYmVsLnByb3RvdHlwZSwgXCJzbGlkZXJPcmllbnRhdGlvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgU2xpZGVyTGFiZWwucHJvdG90eXBlLCBcInNsaWRlck1pblBvc2l0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBTbGlkZXJMYWJlbC5wcm90b3R5cGUsIFwic2xpZGVyTWF4UG9zaXRpb25cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIFNsaWRlckxhYmVsLnByb3RvdHlwZSwgXCJzbGlkZXJEaXJlY3Rpb25cIiwgdm9pZCAwKTtcbiIsImltcG9ydCB7IGh0bWwsIHJlZiwgd2hlbiB9IGZyb20gXCJAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudFwiO1xuaW1wb3J0IHsgT3JpZW50YXRpb24gfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LXdlYi11dGlsaXRpZXNcIjtcbi8qKlxuICogVGhlIHRlbXBsYXRlIGZvciB0aGUge0BsaW5rIEBtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uIyhTbGlkZXJMYWJlbDpjbGFzcyl9IGNvbXBvbmVudC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNsaWRlckxhYmVsVGVtcGxhdGUgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gaHRtbCBgXG4gICAgPHRlbXBsYXRlXG4gICAgICAgIGFyaWEtZGlzYWJsZWQ9XCIke3ggPT4geC5kaXNhYmxlZH1cIlxuICAgICAgICBjbGFzcz1cIiR7eCA9PiB4LnNsaWRlck9yaWVudGF0aW9uIHx8IE9yaWVudGF0aW9uLmhvcml6b250YWx9XG4gICAgICAgICAgICAke3ggPT4gKHguZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcIlwiKX1cIlxuICAgID5cbiAgICAgICAgPGRpdiAke3JlZihcInJvb3RcIil9IHBhcnQ9XCJyb290XCIgY2xhc3M9XCJyb290XCIgc3R5bGU9XCIke3ggPT4geC5wb3NpdGlvblN0eWxlfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICR7d2hlbih4ID0+ICF4LmhpZGVNYXJrLCBodG1sIGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC90ZW1wbGF0ZT5cbmA7XG4iLCJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxuICBmbHVlbnRTbGlkZXIsXG4gIGZsdWVudFNsaWRlckxhYmVsLFxufSBmcm9tICdAZmx1ZW50dWkvd2ViLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgcGFyc2VDb2xvckhleFJHQiB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1jb2xvcnMnO1xuXG5wcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtKCkucmVnaXN0ZXIoXG4gIGZsdWVudEJ1dHRvbigpLFxuICBmbHVlbnRDYXJkKCksXG4gIGZsdWVudEJhZGdlKCksXG4gIGZsdWVudFRleHRGaWVsZCgpLFxuICBmbHVlbnRSYWRpbygpLFxuICBmbHVlbnRSYWRpb0dyb3VwKCksXG4gIGZsdWVudENoZWNrYm94KCksXG4gIGZsdWVudFN3aXRjaCgpLFxuICBmbHVlbnRTbGlkZXIoKSxcbiAgZmx1ZW50U2xpZGVyTGFiZWwoKVxuKTtcblxuY29uc3QgZGVmYXVsdENvbG9ycyA9IHtcbiAgYWNjZW50OiAnIzAzNjBiOScsXG4gIGJhc2U6ICcjZWJlYmViJyxcbn07XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHVwZGF0ZVN0eWxlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICd1cGRhdGUtc3R5bGUnXG4pIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgYWNjZW50UGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VudC1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IGJhc2VQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFzZS1jb2xvcicpIGFzIEhUTUxGb3JtRWxlbWVudDtcbmNvbnN0IG1vZGVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmbHVlbnQtc3dpdGNoJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuXG5zaWRlYmFyICYmIGZpbGxDb2xvci5zZXRWYWx1ZUZvcihzaWRlYmFyLCBuZXV0cmFsTGF5ZXIyKTtcbmJvZHkgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKGJvZHksIG5ldXRyYWxMYXllcjMpO1xuXG5jb25zdCBzZXRDb2xvciA9IChjb2xvcjogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgaWYgKHR5cGUgPT09ICdhY2NlbnQnKSB7XG4gICAgYm9keSAmJlxuICAgICAgYWNjZW50QmFzZUNvbG9yLnNldFZhbHVlRm9yKFxuICAgICAgICBib2R5LFxuICAgICAgICBTd2F0Y2hSR0IuZnJvbShwYXJzZUNvbG9ySGV4UkdCKGNvbG9yKSEpXG4gICAgICApO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdiYXNlJykge1xuICAgIGJvZHkgJiZcbiAgICAgIG5ldXRyYWxCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH1cbn07XG5cbnVwZGF0ZVN0eWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuICBhY2NlbnRQaWNrZXIudmFsdWUgPSBkZWZhdWx0Q29sb3JzLmFjY2VudDtcbiAgYmFzZVBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYmFzZTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5hY2NlbnQsICdhY2NlbnQnKTtcbiAgc2V0Q29sb3IoZGVmYXVsdENvbG9ycy5iYXNlLCAnYmFzZScpO1xufSk7XG5cbmFjY2VudFBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGFjY2VudFBpY2tlci52YWx1ZSwgJ2FjY2VudCcpO1xufSk7XG5cbmJhc2VQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk6IHZvaWQgPT4ge1xuICBzZXRDb2xvcihiYXNlUGlja2VyLnZhbHVlLCAnYmFzZScpO1xufSk7XG5cbm1vZGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGlmICghbW9kZVN3aXRjaC5jaGVja2VkKSB7XG4gICAgYm9keSAmJiBiYXNlTGF5ZXJMdW1pbmFuY2Uuc2V0VmFsdWVGb3IoYm9keSwgU3RhbmRhcmRMdW1pbmFuY2UuTGlnaHRNb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5EYXJrTW9kZSk7XG4gIH1cbn0pO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjQwMTYxNzFlMDJlOGViMDExYmRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=