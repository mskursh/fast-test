"use strict";
self["webpackHotUpdatefast_test"]("app",{

/***/ "./node_modules/@fluentui/web-components/dist/esm/slider/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@fluentui/web-components/dist/esm/slider/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fluentSlider": () => (/* binding */ fluentSlider),
/* harmony export */   "sliderStyles": () => (/* binding */ sliderStyles),
/* harmony export */   "Slider": () => (/* reexport safe */ _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Slider)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js");
/* harmony import */ var _slider_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider.styles */ "./node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js");


/**
 * The Fluent Slider Custom Element. Implements {@link @microsoft/fast-foundation#(Slider:class)},
 * {@link @microsoft/fast-foundation#sliderTemplate}
 *
 *
 * @public
 * @remarks
 * HTML Element: \<fluent-slider\>
 */
const fluentSlider = _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_0__.Slider.compose({
    baseName: 'slider',
    template: _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.sliderTemplate,
    styles: _slider_styles__WEBPACK_IMPORTED_MODULE_2__.sliderStyles,
    thumb: `
    <div class="thumb-cursor"></div>
  `,
});
/**
 * Styles for Slider
 * @public
 */
const sliderStyles = _slider_styles__WEBPACK_IMPORTED_MODULE_2__.sliderStyles;
/**
 * Slider base class
 * @public
 */



/***/ }),

/***/ "./node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@fluentui/web-components/dist/esm/slider/slider.styles.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderStyles": () => (/* binding */ sliderStyles)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/system-colors.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");
/* harmony import */ var _microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @microsoft/fast-foundation */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./node_modules/@fluentui/web-components/dist/esm/styles/size.js");
/* harmony import */ var _design_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design-tokens */ "./node_modules/@fluentui/web-components/dist/esm/design-tokens.js");





const sliderStyles = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
    ${(0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_1__.display)('inline-grid')} :host {
      --thumb-size: calc((${_styles__WEBPACK_IMPORTED_MODULE_2__.heightNumber} / 2) + ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.designUnit} + (${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.strokeWidth} * 2));
      --thumb-translate: calc(var(--thumb-size) * -0.5 + var(--track-width) / 2);
      --track-overhang: calc((${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.designUnit} / 2) * -1);
      --track-width: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.designUnit};
      align-items: center;
      width: 100%;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.controlCornerRadius} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host(.horizontal) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(.vertical) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.fillColor}, 0 0 0 4px ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.focusStrokeOuter};
    }
    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
    }
    .thumb-cursor {
      display: flex;
      position: relative;
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: padding-box linear-gradient(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}, ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}),
        border-box ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralStrokeControlRest};
      border: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.strokeWidth} * 1px) solid transparent;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .thumb-cursor::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 100%;
      margin: 4px;
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.accentFillRest};
    }
    :host(:not(.disabled)) .thumb-cursor:hover::after {
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.accentFillHover};
      margin: 3px;
    }
    :host(:not(.disabled)) .thumb-cursor:active::after {
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.accentFillActive};
      margin: 5px;
    }
    :host(:not(.disabled)) .thumb-cursor:hover {
      background: padding-box linear-gradient(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}, ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}),
        border-box ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralStrokeControlHover};
    }
    :host(:not(.disabled)) .thumb-cursor:active {
      background: padding-box linear-gradient(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}, ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillRest}),
        border-box ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralStrokeControlActive};
    }
    .track-start {
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.accentFillRest};
      position: absolute;
      height: 100%;
      left: 0;
      border-radius: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.controlCornerRadius} * 1px);
    }
    :host(.horizontal) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px)) translateY(calc(var(--thumb-translate) * 1px));
    }
    :host(.vertical) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px)) translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host(.horizontal) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host(.horizontal) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host(.vertical) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralFillStrongRest};
      border: 1px solid ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.neutralStrokeStrongRest};
      border-radius: 2px;
      box-sizing: border-box;
      position: absolute;
    }
    :host(.vertical) {
      height: 100%;
      min-height: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.designUnit} * 60px);
      min-width: calc(${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.designUnit} * 20px);
    }
    :host(.vertical) .track-start {
      height: auto;
      width: 100%;
      top: 0;
    }
    :host(.disabled),
    :host(.readonly) {
      cursor: ${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_5__.disabledCursor};
    }
    :host(.disabled) {
      opacity: ${_design_tokens__WEBPACK_IMPORTED_MODULE_3__.disabledOpacity};
    }
  `.withBehaviors((0,_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_6__.forcedColorsStylesheetBehavior)(_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.css `
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
        }
        :host(:not(.disabled)) .thumb-cursor:hover,
        :host(:not(.disabled)) .thumb-cursor:active {
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
        }
        .thumb-cursor::after,
        :host(:not(.disabled)) .thumb-cursor:hover::after,
        :host(:not(.disabled)) .thumb-cursor:active::after {
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field};
        }
        :host(:${_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_4__.focusVisible}) .thumb-cursor {
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
          border-color: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Highlight};
          box-shadow: 0 0 0 1px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.Field}, 0 0 0 3px ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.FieldText};
        }
        :host(.disabled) {
          opacity: 1;
        }
        :host(.disabled) .track,
        :host(.disabled) .thumb-cursor {
          forced-color-adjust: none;
          background: ${_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_7__.SystemColors.GrayText};
        }
      `));


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertPixelToPercent": () => (/* binding */ convertPixelToPercent)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/numbers.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/localization.js");

/**
 * Converts a pixel coordinate on the track to a percent of the track's range
 */
function convertPixelToPercent(pixelPos, minPosition, maxPosition, direction) {
    let pct = (0,_microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_0__.limit)(0, 1, (pixelPos - minPosition) / (maxPosition - minPosition));
    if (direction === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl) {
        pct = 1 - pct;
    }
    return pct;
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormAssociatedSlider": () => (/* binding */ FormAssociatedSlider)
/* harmony export */ });
/* harmony import */ var _form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form-associated/form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");
/* harmony import */ var _foundation_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../foundation-element */ "./node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js");


class _Slider extends _foundation_element__WEBPACK_IMPORTED_MODULE_0__.FoundationElement {
}
/**
 * A form-associated base class for the {@link @microsoft/fast-foundation#(Slider:class)} component.
 *
 * @internal
 */
class FormAssociatedSlider extends (0,_form_associated_form_associated__WEBPACK_IMPORTED_MODULE_1__.FormAssociated)(_Slider) {
    constructor() {
        super(...arguments);
        this.proxy = document.createElement("input");
    }
}


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderMode": () => (/* binding */ SliderMode),
/* harmony export */   "Slider": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/observation/observable.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/localization.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/aria.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/key-codes.js");
/* harmony import */ var _utilities_direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/direction */ "./node_modules/@microsoft/fast-foundation/dist/esm/utilities/direction.js");
/* harmony import */ var _slider_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider-utilities */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider-utilities.js");
/* harmony import */ var _slider_form_associated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.form-associated */ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.form-associated.js");






/**
 * The selection modes of a {@link @microsoft/fast-foundation#(Slider:class)}.
 * @public
 */
var SliderMode;
(function (SliderMode) {
    SliderMode["singleValue"] = "single-value";
})(SliderMode || (SliderMode = {}));
/**
 * A Slider Custom HTML Element.
 * Implements the {@link https://www.w3.org/TR/wai-aria-1.1/#slider | ARIA slider }.
 *
 * @public
 */
class Slider extends _slider_form_associated__WEBPACK_IMPORTED_MODULE_0__.FormAssociatedSlider {
    constructor() {
        super(...arguments);
        /**
         * @internal
         */
        this.direction = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.ltr;
        /**
         * @internal
         */
        this.isDragging = false;
        /**
         * @internal
         */
        this.trackWidth = 0;
        /**
         * @internal
         */
        this.trackMinWidth = 0;
        /**
         * @internal
         */
        this.trackHeight = 0;
        /**
         * @internal
         */
        this.trackLeft = 0;
        /**
         * @internal
         */
        this.trackMinHeight = 0;
        /**
         * Custom function that generates a string for the component's "aria-valuetext" attribute based on the current value.
         *
         * @public
         */
        this.valueTextFormatter = () => null;
        /**
         * The minimum allowed value.
         *
         * @defaultValue - 0
         * @public
         * @remarks
         * HTML Attribute: min
         */
        this.min = 0; // Map to proxy element.
        /**
         * The maximum allowed value.
         *
         * @defaultValue - 10
         * @public
         * @remarks
         * HTML Attribute: max
         */
        this.max = 10; // Map to proxy element.
        /**
         * Value to increment or decrement via arrow keys, mouse click or drag.
         *
         * @public
         * @remarks
         * HTML Attribute: step
         */
        this.step = 1; // Map to proxy element.
        /**
         * The orientation of the slider.
         *
         * @public
         * @remarks
         * HTML Attribute: orientation
         */
        this.orientation = _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal;
        /**
         * The selection mode.
         *
         * @public
         * @remarks
         * HTML Attribute: mode
         */
        this.mode = SliderMode.singleValue;
        this.keypressHandler = (e) => {
            if (e.key === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyHome) {
                e.preventDefault();
                this.value = `${this.min}`;
            }
            else if (e.key === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyEnd) {
                e.preventDefault();
                this.value = `${this.max}`;
            }
            else if (!e.shiftKey) {
                switch (e.key) {
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyArrowRight:
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyArrowUp:
                        e.preventDefault();
                        this.increment();
                        break;
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyArrowLeft:
                    case _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_3__.keyArrowDown:
                        e.preventDefault();
                        this.decrement();
                        break;
                }
            }
        };
        this.setupTrackConstraints = () => {
            const clientRect = this.track.getBoundingClientRect();
            this.trackWidth = this.track.clientWidth;
            this.trackMinWidth = this.track.clientLeft;
            this.trackHeight = clientRect.bottom;
            this.trackMinHeight = clientRect.top;
            this.trackLeft = this.getBoundingClientRect().left;
            if (this.trackWidth === 0) {
                this.trackWidth = 1;
            }
        };
        this.setupListeners = (remove = false) => {
            const eventAction = `${remove ? "remove" : "add"}EventListener`;
            this[eventAction]("keydown", this.keypressHandler);
            this[eventAction]("mousedown", this.handleMouseDown);
            this.thumb[eventAction]("mousedown", this.handleThumbMouseDown);
            this.thumb[eventAction]("touchstart", this.handleThumbMouseDown);
            // removes handlers attached by mousedown handlers
            if (remove) {
                this.handleMouseDown(null);
                this.handleThumbMouseDown(null);
            }
        };
        /**
         * @internal
         */
        this.initialValue = "";
        /**
         *  Handle mouse moves during a thumb drag operation
         *  If the event handler is null it removes the events
         */
        this.handleThumbMouseDown = (event) => {
            if (event) {
                if (this.readOnly || this.disabled || event.defaultPrevented) {
                    return;
                }
                event.preventDefault();
                event.target.focus();
            }
            const eventAction = `${event !== null ? "add" : "remove"}EventListener`;
            window[eventAction]("mouseup", this.handleWindowMouseUp);
            window[eventAction]("mousemove", this.handleMouseMove);
            window[eventAction]("touchmove", this.handleMouseMove);
            window[eventAction]("touchend", this.handleWindowMouseUp);
            this.isDragging = event !== null;
        };
        /**
         *  Handle mouse moves during a thumb drag operation
         */
        this.handleMouseMove = (e) => {
            if (this.readOnly || this.disabled || e.defaultPrevented) {
                return;
            }
            // update the value based on current position
            const sourceEvent = window.TouchEvent && e instanceof TouchEvent
                ? e.touches[0]
                : e;
            const eventValue = this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? sourceEvent.pageX - document.documentElement.scrollLeft - this.trackLeft
                : sourceEvent.pageY - document.documentElement.scrollTop;
            this.value = `${this.calculateNewValue(eventValue)}`;
        };
        this.calculateNewValue = (rawValue) => {
            // update the value based on current position
            const newPosition = (0,_slider_utilities__WEBPACK_IMPORTED_MODULE_4__.convertPixelToPercent)(rawValue, this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? this.trackMinWidth
                : this.trackMinHeight, this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                ? this.trackWidth
                : this.trackHeight, this.direction);
            const newValue = (this.max - this.min) * newPosition + this.min;
            return this.convertToConstrainedValue(newValue);
        };
        /**
         * Handle a window mouse up during a drag operation
         */
        this.handleWindowMouseUp = (event) => {
            this.stopDragging();
        };
        this.stopDragging = () => {
            this.isDragging = false;
            this.handleMouseDown(null);
            this.handleThumbMouseDown(null);
        };
        /**
         *
         * @param e - MouseEvent or null. If there is no event handler it will remove the events
         */
        this.handleMouseDown = (e) => {
            const eventAction = `${e !== null ? "add" : "remove"}EventListener`;
            if (e === null || (!this.disabled && !this.readOnly)) {
                window[eventAction]("mouseup", this.handleWindowMouseUp);
                window.document[eventAction]("mouseleave", this.handleWindowMouseUp);
                window[eventAction]("mousemove", this.handleMouseMove);
                if (e) {
                    e.preventDefault();
                    this.setupTrackConstraints();
                    e.target.focus();
                    const controlValue = this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal
                        ? e.pageX - document.documentElement.scrollLeft - this.trackLeft
                        : e.pageY - document.documentElement.scrollTop;
                    this.value = `${this.calculateNewValue(controlValue)}`;
                }
            }
        };
        this.convertToConstrainedValue = (value) => {
            if (isNaN(value)) {
                value = this.min;
            }
            /**
             * The following logic intends to overcome the issue with math in JavaScript with regards to floating point numbers.
             * This is needed as the `step` may be an integer but could also be a float. To accomplish this the step  is assumed to be a float
             * and is converted to an integer by determining the number of decimal places it represent, multiplying it until it is an
             * integer and then dividing it to get back to the correct number.
             */
            let constrainedValue = value - this.min;
            const roundedConstrainedValue = Math.round(constrainedValue / this.step);
            const remainderValue = constrainedValue -
                (roundedConstrainedValue * (this.stepMultiplier * this.step)) /
                    this.stepMultiplier;
            constrainedValue =
                remainderValue >= Number(this.step) / 2
                    ? constrainedValue - remainderValue + Number(this.step)
                    : constrainedValue - remainderValue;
            return constrainedValue + this.min;
        };
    }
    readOnlyChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.readOnly = this.readOnly;
        }
    }
    /**
     * The value property, typed as a number.
     *
     * @public
     */
    get valueAsNumber() {
        return parseFloat(super.value);
    }
    set valueAsNumber(next) {
        this.value = next.toString();
    }
    /**
     * @internal
     */
    valueChanged(previous, next) {
        super.valueChanged(previous, next);
        if (this.$fastController.isConnected) {
            this.setThumbPositionForOrientation(this.direction);
        }
        this.$emit("change");
    }
    minChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.min = `${this.min}`;
        }
        this.validate();
    }
    maxChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.max = `${this.max}`;
        }
        this.validate();
    }
    stepChanged() {
        if (this.proxy instanceof HTMLInputElement) {
            this.proxy.step = `${this.step}`;
        }
        this.updateStepMultiplier();
        this.validate();
    }
    orientationChanged() {
        if (this.$fastController.isConnected) {
            this.setThumbPositionForOrientation(this.direction);
        }
    }
    /**
     * @internal
     */
    connectedCallback() {
        super.connectedCallback();
        this.proxy.setAttribute("type", "range");
        this.direction = (0,_utilities_direction__WEBPACK_IMPORTED_MODULE_5__.getDirection)(this);
        this.updateStepMultiplier();
        this.setupTrackConstraints();
        this.setupListeners();
        this.setupDefaultValue();
        this.setThumbPositionForOrientation(this.direction);
    }
    /**
     * @internal
     */
    disconnectedCallback() {
        this.setupListeners(true);
    }
    /**
     * Increment the value by the step
     *
     * @public
     */
    increment() {
        const newVal = this.direction !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl && this.orientation !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.vertical
            ? Number(this.value) + Number(this.step)
            : Number(this.value) - Number(this.step);
        const incrementedVal = this.convertToConstrainedValue(newVal);
        const incrementedValString = incrementedVal < Number(this.max) ? `${incrementedVal}` : `${this.max}`;
        this.value = incrementedValString;
    }
    /**
     * Decrement the value by the step
     *
     * @public
     */
    decrement() {
        const newVal = this.direction !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Direction.rtl && this.orientation !== _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.vertical
            ? Number(this.value) - Number(this.step)
            : Number(this.value) + Number(this.step);
        const decrementedVal = this.convertToConstrainedValue(newVal);
        const decrementedValString = decrementedVal > Number(this.min) ? `${decrementedVal}` : `${this.min}`;
        this.value = decrementedValString;
    }
    /**
     * Places the thumb based on the current value
     *
     * @public
     * @param direction - writing mode
     */
    setThumbPositionForOrientation(direction) {
        const newPct = (0,_slider_utilities__WEBPACK_IMPORTED_MODULE_4__.convertPixelToPercent)(Number(this.value), Number(this.min), Number(this.max), direction);
        const percentage = (1 - newPct) * 100;
        if (this.orientation === _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_2__.Orientation.horizontal) {
            this.position = this.isDragging
                ? `right: ${percentage}%; transition: none;`
                : `right: ${percentage}%; transition: all 0.2s ease;`;
        }
        else {
            this.position = this.isDragging
                ? `bottom: ${percentage}%; transition: none;`
                : `bottom: ${percentage}%; transition: all 0.2s ease;`;
        }
    }
    /**
     * Update the step multiplier used to ensure rounding errors from steps that
     * are not whole numbers
     */
    updateStepMultiplier() {
        const stepString = this.step + "";
        const decimalPlacesOfStep = !!(this.step % 1)
            ? stepString.length - stepString.indexOf(".") - 1
            : 0;
        this.stepMultiplier = Math.pow(10, decimalPlacesOfStep);
    }
    get midpoint() {
        return `${this.convertToConstrainedValue((this.max + this.min) / 2)}`;
    }
    setupDefaultValue() {
        if (typeof this.value === "string") {
            if (this.value.length === 0) {
                this.initialValue = this.midpoint;
            }
            else {
                const value = parseFloat(this.value);
                if (!Number.isNaN(value) && (value < this.min || value > this.max)) {
                    this.value = this.midpoint;
                }
            }
        }
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ attribute: "readonly", mode: "boolean" })
], Slider.prototype, "readOnly", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "direction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "isDragging", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "position", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackMinWidth", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackLeft", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "trackMinHeight", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_8__.observable
], Slider.prototype, "valueTextFormatter", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "min", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "max", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr)({ converter: _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.nullableNumberConverter })
], Slider.prototype, "step", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr
], Slider.prototype, "orientation", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_7__.attr
], Slider.prototype, "mode", void 0);


/***/ }),

/***/ "./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sliderTemplate": () => (/* binding */ sliderTemplate)
/* harmony export */ });
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/ref.js");
/* harmony import */ var _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-web-utilities */ "./node_modules/@microsoft/fast-web-utilities/dist/aria.js");


/**
 * The template for the {@link @microsoft/fast-foundation#(Slider:class)} component.
 * @public
 */
const sliderTemplate = (context, definition) => _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <template
        role="slider"
        class="${x => (x.readOnly ? "readonly" : "")}
        ${x => x.orientation || _microsoft_fast_web_utilities__WEBPACK_IMPORTED_MODULE_1__.Orientation.horizontal}"
        tabindex="${x => (x.disabled ? null : 0)}"
        aria-valuetext="${x => x.valueTextFormatter(x.value)}"
        aria-valuenow="${x => x.value}"
        aria-valuemin="${x => x.min}"
        aria-valuemax="${x => x.max}"
        aria-disabled="${x => (x.disabled ? true : void 0)}"
        aria-readonly="${x => (x.readOnly ? true : void 0)}"
        aria-orientation="${x => x.orientation}"
        class="${x => x.orientation}"
    >
        <div part="positioning-region" class="positioning-region">
            <div ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("track")} part="track-container" class="track">
                <slot name="track"></slot>
            </div>
            <slot></slot>
            <div
                ${(0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.ref)("thumb")}
                part="thumb-container"
                class="thumb-container"
                style="${x => x.position}"
            >
                <slot name="thumb">${definition.thumb || ""}</slot>
            </div>
        </div>
    </template>
`;


/***/ }),

/***/ "./node_modules/@microsoft/fast-web-utilities/dist/numbers.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microsoft/fast-web-utilities/dist/numbers.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapInBounds": () => (/* binding */ wrapInBounds),
/* harmony export */   "limit": () => (/* binding */ limit),
/* harmony export */   "inRange": () => (/* binding */ inRange)
/* harmony export */ });
/**
 * This method keeps a given value within the bounds of a min and max value. If the value
 * is larger than the max, the minimum value will be returned. If the value is smaller than the minimum,
 * the maximum will be returned. Otherwise, the value is returned un-changed.
 */
function wrapInBounds(min, max, value) {
    if (value < min) {
        return max;
    }
    else if (value > max) {
        return min;
    }
    return value;
}
/**
 * Ensures that a value is between a min and max value. If value is lower than min, min will be returned.
 * If value is greater than max, max will be returned.
 */
function limit(min, max, value) {
    return Math.min(Math.max(value, min), max);
}
/**
 * Determines if a number value is within a specified range.
 *
 * @param value - the value to check
 * @param min - the range start
 * @param max - the range end
 */
function inRange(value, min, max = 0) {
    [min, max] = [min, max].sort((a, b) => a - b);
    return min <= value && value < max;
}


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
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/design-tokens.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/swatch.js");
/* harmony import */ var _fluentui_web_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fluentui/web-components */ "./node_modules/@fluentui/web-components/dist/esm/color/utilities/base-layer-luminance.js");
/* harmony import */ var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @microsoft/fast-colors */ "./node_modules/@microsoft/fast-colors/dist/parse-color.js");


(0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_0__.provideFluentDesignSystem)().register((0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_1__.fluentButton)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_2__.fluentCard)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_3__.fluentBadge)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_4__.fluentTextField)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_5__.fluentRadio)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_6__.fluentRadioGroup)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_7__.fluentCheckbox)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_8__.fluentSwitch)(), (0,_fluentui_web_components__WEBPACK_IMPORTED_MODULE_9__.fluentSlider)());
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
sidebar && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.fillColor.setValueFor(sidebar, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.neutralLayer2);
body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.fillColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.neutralLayer3);
const setColor = (color, type) => {
    if (type === 'accent') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.accentBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_12__.parseColorHexRGB)(color)));
    }
    else if (type === 'base') {
        body &&
            _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.neutralBaseColor.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_11__.SwatchRGB.from((0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_12__.parseColorHexRGB)(color)));
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
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_13__.StandardLuminance.LightMode);
    }
    else {
        body && _fluentui_web_components__WEBPACK_IMPORTED_MODULE_10__.baseLayerLuminance.setValueFor(body, _fluentui_web_components__WEBPACK_IMPORTED_MODULE_13__.StandardLuminance.DarkMode);
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96c49e5c481b5d207b15")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjMwYjg1ZjE0OThlMDg2MzMzZGM3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdGO0FBQ3ZCO0FBQ3pEO0FBQ0EsaURBQWlELGdEQUFnRDtBQUNqRyxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08scUJBQXFCLHNFQUFjO0FBQzFDO0FBQ0EsWUFBWTtBQUNaLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDTyxxQkFBcUIsd0RBQU07QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUI0QjtBQUNlO0FBQ3VEO0FBQzNFO0FBQzJSO0FBQzdULDhDQUE4Qyx3REFBRztBQUN4RCxNQUFNLG1FQUFPLGlCQUFpQjtBQUM5Qiw0QkFBNEIsaURBQVksRUFBRSxTQUFTLHNEQUFVLEVBQUUsS0FBSyx1REFBVyxFQUFFO0FBQ2pGO0FBQ0EsZ0NBQWdDLHNEQUFVLEVBQUU7QUFDNUMsdUJBQXVCLHNEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFtQixFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBWSxDQUFDO0FBQzFCLDhCQUE4QixxREFBUyxDQUFDLGNBQWMsNERBQWdCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDJEQUFlLENBQUMsSUFBSSwyREFBZSxDQUFDO0FBQ3BGLHFCQUFxQixvRUFBd0I7QUFDN0MscUJBQXFCLHVEQUFXLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBEQUFjO0FBQ2xDO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWU7QUFDbkM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMkRBQWUsQ0FBQyxJQUFJLDJEQUFlLENBQUM7QUFDcEYscUJBQXFCLHFFQUF5QjtBQUM5QztBQUNBO0FBQ0EsZ0RBQWdELDJEQUFlLENBQUMsSUFBSSwyREFBZSxDQUFDO0FBQ3BGLHFCQUFxQixzRUFBMEI7QUFDL0M7QUFDQTtBQUNBLG9CQUFvQiwwREFBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsK0RBQW1CLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBcUI7QUFDekMsMEJBQTBCLG1FQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0RBQVUsRUFBRTtBQUNyQyx3QkFBd0Isc0RBQVUsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFjO0FBQzlCO0FBQ0E7QUFDQSxpQkFBaUIsMkRBQWU7QUFDaEM7QUFDQSxrQkFBa0IsMEZBQThCLENBQUMsd0RBQUc7QUFDcEQ7QUFDQTtBQUNBLDBCQUEwQixpRkFBc0I7QUFDaEQsd0JBQXdCLGlGQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUZBQXNCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpRkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkVBQWtCO0FBQzFDO0FBQ0EsaUJBQWlCLG9FQUFZLENBQUM7QUFDOUIsd0JBQXdCLGlGQUFzQjtBQUM5QywwQkFBMEIsaUZBQXNCO0FBQ2hELGtDQUFrQyw2RUFBa0IsQ0FBQyxjQUFjLGlGQUFzQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnRkFBcUI7QUFDN0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS2lFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsY0FBYyxvRUFBSztBQUNuQixzQkFBc0Isd0VBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVm9FO0FBQ1Y7QUFDMUQsc0JBQXNCLGtFQUFpQjtBQUN2QztBQUNBO0FBQ0EseUNBQXlDLGlEQUFpRDtBQUMxRjtBQUNBO0FBQ0E7QUFDTyxtQ0FBbUMsZ0ZBQWM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RtQztBQUNrRDtBQUMyRDtBQUMxRjtBQUNLO0FBQ0s7QUFDaEU7QUFDQSw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxDQUFDLGdDQUFnQztBQUNqQztBQUNBO0FBQ0EsbUJBQW1CLGdFQUFnRTtBQUNuRjtBQUNBO0FBQ0E7QUFDTyxxQkFBcUIseUVBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlGQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0VBQU87QUFDakM7QUFDQSxnQ0FBZ0MsU0FBUztBQUN6QztBQUNBLCtCQUErQixpRUFBTTtBQUNyQztBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYTtBQUN0Qyx5QkFBeUIscUVBQVU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVFQUFZO0FBQ3JDLHlCQUF5Qix1RUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0NBQWtDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsaUZBQXNCO0FBQzFFO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx3RUFBcUIsZ0NBQWdDLGlGQUFzQjtBQUMzRztBQUNBLDREQUE0RCxpRkFBc0I7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDhCQUE4QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELGlGQUFzQjtBQUNwRjtBQUNBO0FBQ0Esb0NBQW9DLHFDQUFxQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0VBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHdFQUFhLHlCQUF5QiwrRUFBb0I7QUFDcEc7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGVBQWUsT0FBTyxTQUFTO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsd0VBQWEseUJBQXlCLCtFQUFvQjtBQUNwRztBQUNBO0FBQ0E7QUFDQSw0RUFBNEUsZUFBZSxPQUFPLFNBQVM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUFxQjtBQUM1QztBQUNBLGlDQUFpQyxpRkFBc0I7QUFDdkQ7QUFDQSw0QkFBNEIsV0FBVyxHQUFHLGlCQUFpQjtBQUMzRCw0QkFBNEIsV0FBVyxHQUFHLDBCQUEwQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsV0FBVyxHQUFHLGlCQUFpQjtBQUM1RCw2QkFBNkIsV0FBVyxHQUFHLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUEwRDtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBVTtBQUNWLElBQUksNkRBQUksR0FBRyx3Q0FBd0M7QUFDbkQ7QUFDQSxpREFBVTtBQUNWLElBQUksK0RBQVU7QUFDZDtBQUNBLGlEQUFVO0FBQ1YsSUFBSSwrREFBVTtBQUNkO0FBQ0EsaURBQVU7QUFDVixJQUFJLCtEQUFVO0FBQ2Q7QUFDQSxpREFBVTtBQUNWLElBQUksK0RBQVU7QUFDZDtBQUNBLGlEQUFVO0FBQ1YsSUFBSSwrREFBVTtBQUNkO0FBQ0EsaURBQVU7QUFDVixJQUFJLCtEQUFVO0FBQ2Q7QUFDQSxpREFBVTtBQUNWLElBQUksK0RBQVU7QUFDZDtBQUNBLGlEQUFVO0FBQ1YsSUFBSSwrREFBVTtBQUNkO0FBQ0EsaURBQVU7QUFDVixJQUFJLCtEQUFVO0FBQ2Q7QUFDQSxpREFBVTtBQUNWLElBQUksNkRBQUksR0FBRyxXQUFXLDRFQUF1QixFQUFFO0FBQy9DO0FBQ0EsaURBQVU7QUFDVixJQUFJLDZEQUFJLEdBQUcsV0FBVyw0RUFBdUIsRUFBRTtBQUMvQztBQUNBLGlEQUFVO0FBQ1YsSUFBSSw2REFBSSxHQUFHLFdBQVcsNEVBQXVCLEVBQUU7QUFDL0M7QUFDQSxpREFBVTtBQUNWLElBQUkseURBQUk7QUFDUjtBQUNBLGlEQUFVO0FBQ1YsSUFBSSx5REFBSTtBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwYm9EO0FBQ1E7QUFDNUQ7QUFDQSx5QkFBeUIsaURBQWlEO0FBQzFFO0FBQ0E7QUFDTyxnREFBZ0QseURBQUk7QUFDM0Q7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixVQUFVLHNCQUFzQixpRkFBc0IsQ0FBQztBQUN2RCxvQkFBb0IsNkJBQTZCO0FBQ2pELDBCQUEwQixtQ0FBbUM7QUFDN0QseUJBQXlCLGFBQWE7QUFDdEMseUJBQXlCLFdBQVc7QUFDcEMseUJBQXlCLFdBQVc7QUFDcEMseUJBQXlCLGtDQUFrQztBQUMzRCx5QkFBeUIsa0NBQWtDO0FBQzNELDRCQUE0QixtQkFBbUI7QUFDL0MsaUJBQWlCLG1CQUFtQjtBQUNwQztBQUNBO0FBQ0EsbUJBQW1CLDREQUFHLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQUc7QUFDckI7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1prQztBQUN3QjtBQUUxRCxtRkFBeUIsRUFBRSxDQUFDLFFBQVEsQ0FDbEMsc0VBQVksRUFBRSxFQUNkLG9FQUFVLEVBQUUsRUFDWixxRUFBVyxFQUFFLEVBQ2IseUVBQWUsRUFBRSxFQUNqQixxRUFBVyxFQUFFLEVBQ2IsMEVBQWdCLEVBQUUsRUFDbEIsd0VBQWMsRUFBRSxFQUNoQixzRUFBWSxFQUFFLEVBQ2Qsc0VBQVksRUFBRSxDQUNmLENBQUM7QUFFRixNQUFNLGFBQWEsR0FBRztJQUNwQixNQUFNLEVBQUUsU0FBUztJQUNqQixJQUFJLEVBQUUsU0FBUztDQUNoQixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQWdCLENBQUM7QUFDM0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCLENBQUM7QUFDbEUsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUMvQyxjQUFjLENBQ0EsQ0FBQztBQUNqQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBb0IsQ0FBQztBQUNoRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBb0IsQ0FBQztBQUM1RSxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBb0IsQ0FBQztBQUU5RSxPQUFPLElBQUksNEVBQXFCLENBQUMsT0FBTyxFQUFFLG9FQUFhLENBQUMsQ0FBQztBQUN6RCxJQUFJLElBQUksNEVBQXFCLENBQUMsSUFBSSxFQUFFLG9FQUFhLENBQUMsQ0FBQztBQUVuRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxJQUFZLEVBQVEsRUFBRTtJQUNyRCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDckIsSUFBSTtZQUNGLGtGQUEyQixDQUN6QixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUN6QyxDQUFDO0tBQ0w7U0FBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDMUIsSUFBSTtZQUNGLG1GQUE0QixDQUMxQixJQUFJLEVBQ0oscUVBQWMsQ0FBQyx5RUFBZ0IsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUN6QyxDQUFDO0tBQ0w7QUFDSCxDQUFDLENBQUM7QUFFRixpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBUyxFQUFFO0lBQ3JELFlBQVksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUMxQyxVQUFVLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDdEMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQVMsRUFBRTtJQUNqRCxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMsQ0FBQztBQUVILFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBUyxFQUFFO0lBQy9DLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7SUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUU7UUFDdkIsSUFBSSxJQUFJLHFGQUE4QixDQUFDLElBQUksRUFBRSxrRkFBMkIsQ0FBQyxDQUFDO0tBQzNFO1NBQU07UUFDTCxJQUFJLElBQUkscUZBQThCLENBQUMsSUFBSSxFQUFFLGlGQUEwQixDQUFDLENBQUM7S0FDMUU7QUFDSCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7O1VDeEZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL0BmbHVlbnR1aS93ZWItY29tcG9uZW50cy9kaXN0L2VzbS9zbGlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL0BmbHVlbnR1aS93ZWItY29tcG9uZW50cy9kaXN0L2VzbS9zbGlkZXIvc2xpZGVyLnN0eWxlcy5qcyIsIndlYnBhY2s6Ly9mYXN0LXRlc3QvLi9ub2RlX21vZHVsZXMvQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24vZGlzdC9lc20vc2xpZGVyL3NsaWRlci11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vbm9kZV9tb2R1bGVzL0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uL2Rpc3QvZXNtL3NsaWRlci9zbGlkZXIuZm9ybS1hc3NvY2lhdGVkLmpzIiwid2VicGFjazovL2Zhc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9zbGlkZXIvc2xpZGVyLmpzIiwid2VicGFjazovL2Zhc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbi9kaXN0L2VzbS9zbGlkZXIvc2xpZGVyLnRlbXBsYXRlLmpzIiwid2VicGFjazovL2Zhc3QtdGVzdC8uL25vZGVfbW9kdWxlcy9AbWljcm9zb2Z0L2Zhc3Qtd2ViLXV0aWxpdGllcy9kaXN0L251bWJlcnMuanMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0Ly4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZmFzdC10ZXN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTbGlkZXIsIHNsaWRlclRlbXBsYXRlIGFzIHRlbXBsYXRlIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24nO1xuaW1wb3J0IHsgc2xpZGVyU3R5bGVzIGFzIHN0eWxlcyB9IGZyb20gJy4vc2xpZGVyLnN0eWxlcyc7XG4vKipcbiAqIFRoZSBGbHVlbnQgU2xpZGVyIEN1c3RvbSBFbGVtZW50LiBJbXBsZW1lbnRzIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiMoU2xpZGVyOmNsYXNzKX0sXG4gKiB7QGxpbmsgQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24jc2xpZGVyVGVtcGxhdGV9XG4gKlxuICpcbiAqIEBwdWJsaWNcbiAqIEByZW1hcmtzXG4gKiBIVE1MIEVsZW1lbnQ6IFxcPGZsdWVudC1zbGlkZXJcXD5cbiAqL1xuZXhwb3J0IGNvbnN0IGZsdWVudFNsaWRlciA9IFNsaWRlci5jb21wb3NlKHtcbiAgICBiYXNlTmFtZTogJ3NsaWRlcicsXG4gICAgdGVtcGxhdGUsXG4gICAgc3R5bGVzLFxuICAgIHRodW1iOiBgXG4gICAgPGRpdiBjbGFzcz1cInRodW1iLWN1cnNvclwiPjwvZGl2PlxuICBgLFxufSk7XG4vKipcbiAqIFN0eWxlcyBmb3IgU2xpZGVyXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzbGlkZXJTdHlsZXMgPSBzdHlsZXM7XG4vKipcbiAqIFNsaWRlciBiYXNlIGNsYXNzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCB7IFNsaWRlciB9O1xuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuaW1wb3J0IHsgU3lzdGVtQ29sb3JzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LXdlYi11dGlsaXRpZXMnO1xuaW1wb3J0IHsgZGlzYWJsZWRDdXJzb3IsIGRpc3BsYXksIGZvY3VzVmlzaWJsZSwgZm9yY2VkQ29sb3JzU3R5bGVzaGVldEJlaGF2aW9yLCB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uJztcbmltcG9ydCB7IGhlaWdodE51bWJlciB9IGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBhY2NlbnRGaWxsQWN0aXZlLCBhY2NlbnRGaWxsSG92ZXIsIGFjY2VudEZpbGxSZXN0LCBjb250cm9sQ29ybmVyUmFkaXVzLCBkZXNpZ25Vbml0LCBkaXNhYmxlZE9wYWNpdHksIGZpbGxDb2xvciwgZm9jdXNTdHJva2VPdXRlciwgbmV1dHJhbEZpbGxSZXN0LCBuZXV0cmFsRmlsbFN0cm9uZ1Jlc3QsIG5ldXRyYWxTdHJva2VDb250cm9sQWN0aXZlLCBuZXV0cmFsU3Ryb2tlQ29udHJvbEhvdmVyLCBuZXV0cmFsU3Ryb2tlQ29udHJvbFJlc3QsIG5ldXRyYWxTdHJva2VTdHJvbmdSZXN0LCBzdHJva2VXaWR0aCwgfSBmcm9tICcuLi9kZXNpZ24tdG9rZW5zJztcbmV4cG9ydCBjb25zdCBzbGlkZXJTdHlsZXMgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gY3NzIGBcbiAgICAke2Rpc3BsYXkoJ2lubGluZS1ncmlkJyl9IDpob3N0IHtcbiAgICAgIC0tdGh1bWItc2l6ZTogY2FsYygoJHtoZWlnaHROdW1iZXJ9IC8gMikgKyAke2Rlc2lnblVuaXR9ICsgKCR7c3Ryb2tlV2lkdGh9ICogMikpO1xuICAgICAgLS10aHVtYi10cmFuc2xhdGU6IGNhbGModmFyKC0tdGh1bWItc2l6ZSkgKiAtMC41ICsgdmFyKC0tdHJhY2std2lkdGgpIC8gMik7XG4gICAgICAtLXRyYWNrLW92ZXJoYW5nOiBjYWxjKCgke2Rlc2lnblVuaXR9IC8gMikgKiAtMSk7XG4gICAgICAtLXRyYWNrLXdpZHRoOiAke2Rlc2lnblVuaXR9O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgYm9yZGVyLXJhZGl1czogY2FsYygke2NvbnRyb2xDb3JuZXJSYWRpdXN9ICogMXB4KTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIDpob3N0KC5ob3Jpem9udGFsKSAucG9zaXRpb25pbmctcmVnaW9uIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBjYWxjKHZhcigtLXRodW1iLXNpemUpICogMXB4KSAxZnI7XG4gICAgfVxuICAgIDpob3N0KC52ZXJ0aWNhbCkgLnBvc2l0aW9uaW5nLXJlZ2lvbiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDFweCkgMWZyO1xuICAgIH1cbiAgICA6aG9zdCg6JHtmb2N1c1Zpc2libGV9KSAudGh1bWItY3Vyc29yIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCAke2ZpbGxDb2xvcn0sIDAgMCAwIDRweCAke2ZvY3VzU3Ryb2tlT3V0ZXJ9O1xuICAgIH1cbiAgICAudGh1bWItY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDFweCk7XG4gICAgICB3aWR0aDogY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDFweCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIH1cbiAgICAudGh1bWItY3Vyc29yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDFweCk7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdGh1bWItc2l6ZSkgKiAxcHgpO1xuICAgICAgYmFja2dyb3VuZDogcGFkZGluZy1ib3ggbGluZWFyLWdyYWRpZW50KCR7bmV1dHJhbEZpbGxSZXN0fSwgJHtuZXV0cmFsRmlsbFJlc3R9KSxcbiAgICAgICAgYm9yZGVyLWJveCAke25ldXRyYWxTdHJva2VDb250cm9sUmVzdH07XG4gICAgICBib3JkZXI6IGNhbGMoJHtzdHJva2VXaWR0aH0gKiAxcHgpIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gICAgLnRodW1iLWN1cnNvcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAke2FjY2VudEZpbGxSZXN0fTtcbiAgICB9XG4gICAgOmhvc3QoOm5vdCguZGlzYWJsZWQpKSAudGh1bWItY3Vyc29yOmhvdmVyOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAke2FjY2VudEZpbGxIb3Zlcn07XG4gICAgICBtYXJnaW46IDNweDtcbiAgICB9XG4gICAgOmhvc3QoOm5vdCguZGlzYWJsZWQpKSAudGh1bWItY3Vyc29yOmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHthY2NlbnRGaWxsQWN0aXZlfTtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICA6aG9zdCg6bm90KC5kaXNhYmxlZCkpIC50aHVtYi1jdXJzb3I6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcGFkZGluZy1ib3ggbGluZWFyLWdyYWRpZW50KCR7bmV1dHJhbEZpbGxSZXN0fSwgJHtuZXV0cmFsRmlsbFJlc3R9KSxcbiAgICAgICAgYm9yZGVyLWJveCAke25ldXRyYWxTdHJva2VDb250cm9sSG92ZXJ9O1xuICAgIH1cbiAgICA6aG9zdCg6bm90KC5kaXNhYmxlZCkpIC50aHVtYi1jdXJzb3I6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHBhZGRpbmctYm94IGxpbmVhci1ncmFkaWVudCgke25ldXRyYWxGaWxsUmVzdH0sICR7bmV1dHJhbEZpbGxSZXN0fSksXG4gICAgICAgIGJvcmRlci1ib3ggJHtuZXV0cmFsU3Ryb2tlQ29udHJvbEFjdGl2ZX07XG4gICAgfVxuICAgIC50cmFjay1zdGFydCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke2FjY2VudEZpbGxSZXN0fTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3JkZXItcmFkaXVzOiBjYWxjKCR7Y29udHJvbENvcm5lclJhZGl1c30gKiAxcHgpO1xuICAgIH1cbiAgICA6aG9zdCguaG9yaXpvbnRhbCkgLnRodW1iLWNvbnRhaW5lciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYyh2YXIoLS10aHVtYi1zaXplKSAqIDAuNXB4KSkgdHJhbnNsYXRlWShjYWxjKHZhcigtLXRodW1iLXRyYW5zbGF0ZSkgKiAxcHgpKTtcbiAgICB9XG4gICAgOmhvc3QoLnZlcnRpY2FsKSAudGh1bWItY29udGFpbmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKHZhcigtLXRodW1iLXRyYW5zbGF0ZSkgKiAxcHgpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tdGh1bWItc2l6ZSkgKiAwLjVweCkpO1xuICAgIH1cbiAgICA6aG9zdCguaG9yaXpvbnRhbCkge1xuICAgICAgbWluLXdpZHRoOiBjYWxjKHZhcigtLXRodW1iLXNpemUpICogMXB4KTtcbiAgICB9XG4gICAgOmhvc3QoLmhvcml6b250YWwpIC50cmFjayB7XG4gICAgICByaWdodDogY2FsYyh2YXIoLS10cmFjay1vdmVyaGFuZykgKiAxcHgpO1xuICAgICAgbGVmdDogY2FsYyh2YXIoLS10cmFjay1vdmVyaGFuZykgKiAxcHgpO1xuICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICBoZWlnaHQ6IGNhbGModmFyKC0tdHJhY2std2lkdGgpICogMXB4KTtcbiAgICB9XG4gICAgOmhvc3QoLnZlcnRpY2FsKSAudHJhY2sge1xuICAgICAgdG9wOiBjYWxjKHZhcigtLXRyYWNrLW92ZXJoYW5nKSAqIDFweCk7XG4gICAgICBib3R0b206IGNhbGModmFyKC0tdHJhY2stb3ZlcmhhbmcpICogMXB4KTtcbiAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXRyYWNrLXdpZHRoKSAqIDFweCk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC50cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiAke25ldXRyYWxGaWxsU3Ryb25nUmVzdH07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAke25ldXRyYWxTdHJva2VTdHJvbmdSZXN0fTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIDpob3N0KC52ZXJ0aWNhbCkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogY2FsYygke2Rlc2lnblVuaXR9ICogNjBweCk7XG4gICAgICBtaW4td2lkdGg6IGNhbGMoJHtkZXNpZ25Vbml0fSAqIDIwcHgpO1xuICAgIH1cbiAgICA6aG9zdCgudmVydGljYWwpIC50cmFjay1zdGFydCB7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICB9XG4gICAgOmhvc3QoLmRpc2FibGVkKSxcbiAgICA6aG9zdCgucmVhZG9ubHkpIHtcbiAgICAgIGN1cnNvcjogJHtkaXNhYmxlZEN1cnNvcn07XG4gICAgfVxuICAgIDpob3N0KC5kaXNhYmxlZCkge1xuICAgICAgb3BhY2l0eTogJHtkaXNhYmxlZE9wYWNpdHl9O1xuICAgIH1cbiAgYC53aXRoQmVoYXZpb3JzKGZvcmNlZENvbG9yc1N0eWxlc2hlZXRCZWhhdmlvcihjc3MgYFxuICAgICAgICAudGh1bWItY3Vyc29yIHtcbiAgICAgICAgICBmb3JjZWQtY29sb3ItYWRqdXN0OiBub25lO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtTeXN0ZW1Db2xvcnMuRmllbGRUZXh0fTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5GaWVsZFRleHR9O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KDpub3QoLmRpc2FibGVkKSkgLnRodW1iLWN1cnNvcjpob3ZlcixcbiAgICAgICAgOmhvc3QoOm5vdCguZGlzYWJsZWQpKSAudGh1bWItY3Vyc29yOmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuSGlnaGxpZ2h0fTtcbiAgICAgICAgfVxuICAgICAgICAudHJhY2sge1xuICAgICAgICAgIGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuRmllbGRUZXh0fTtcbiAgICAgICAgfVxuICAgICAgICAudGh1bWItY3Vyc29yOjphZnRlcixcbiAgICAgICAgOmhvc3QoOm5vdCguZGlzYWJsZWQpKSAudGh1bWItY3Vyc29yOmhvdmVyOjphZnRlcixcbiAgICAgICAgOmhvc3QoOm5vdCguZGlzYWJsZWQpKSAudGh1bWItY3Vyc29yOmFjdGl2ZTo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7U3lzdGVtQ29sb3JzLkZpZWxkfTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCg6JHtmb2N1c1Zpc2libGV9KSAudGh1bWItY3Vyc29yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke1N5c3RlbUNvbG9ycy5IaWdobGlnaHR9O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtTeXN0ZW1Db2xvcnMuSGlnaGxpZ2h0fTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggJHtTeXN0ZW1Db2xvcnMuRmllbGR9LCAwIDAgMCAzcHggJHtTeXN0ZW1Db2xvcnMuRmllbGRUZXh0fTtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdCguZGlzYWJsZWQpIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KC5kaXNhYmxlZCkgLnRyYWNrLFxuICAgICAgICA6aG9zdCguZGlzYWJsZWQpIC50aHVtYi1jdXJzb3Ige1xuICAgICAgICAgIGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHtTeXN0ZW1Db2xvcnMuR3JheVRleHR9O1xuICAgICAgICB9XG4gICAgICBgKSk7XG4iLCJpbXBvcnQgeyBEaXJlY3Rpb24sIGxpbWl0IH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG4vKipcbiAqIENvbnZlcnRzIGEgcGl4ZWwgY29vcmRpbmF0ZSBvbiB0aGUgdHJhY2sgdG8gYSBwZXJjZW50IG9mIHRoZSB0cmFjaydzIHJhbmdlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0UGl4ZWxUb1BlcmNlbnQocGl4ZWxQb3MsIG1pblBvc2l0aW9uLCBtYXhQb3NpdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgbGV0IHBjdCA9IGxpbWl0KDAsIDEsIChwaXhlbFBvcyAtIG1pblBvc2l0aW9uKSAvIChtYXhQb3NpdGlvbiAtIG1pblBvc2l0aW9uKSk7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLnJ0bCkge1xuICAgICAgICBwY3QgPSAxIC0gcGN0O1xuICAgIH1cbiAgICByZXR1cm4gcGN0O1xufVxuIiwiaW1wb3J0IHsgRm9ybUFzc29jaWF0ZWQgfSBmcm9tIFwiLi4vZm9ybS1hc3NvY2lhdGVkL2Zvcm0tYXNzb2NpYXRlZFwiO1xuaW1wb3J0IHsgRm91bmRhdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi4vZm91bmRhdGlvbi1lbGVtZW50XCI7XG5jbGFzcyBfU2xpZGVyIGV4dGVuZHMgRm91bmRhdGlvbkVsZW1lbnQge1xufVxuLyoqXG4gKiBBIGZvcm0tYXNzb2NpYXRlZCBiYXNlIGNsYXNzIGZvciB0aGUge0BsaW5rIEBtaWNyb3NvZnQvZmFzdC1mb3VuZGF0aW9uIyhTbGlkZXI6Y2xhc3MpfSBjb21wb25lbnQuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtQXNzb2NpYXRlZFNsaWRlciBleHRlbmRzIEZvcm1Bc3NvY2lhdGVkKF9TbGlkZXIpIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm94eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBfX2RlY29yYXRlIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBhdHRyLCBudWxsYWJsZU51bWJlckNvbnZlcnRlciwgb2JzZXJ2YWJsZSwgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IERpcmVjdGlvbiwga2V5QXJyb3dEb3duLCBrZXlBcnJvd0xlZnQsIGtleUFycm93UmlnaHQsIGtleUFycm93VXAsIGtleUVuZCwga2V5SG9tZSwgT3JpZW50YXRpb24sIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG5pbXBvcnQgeyBnZXREaXJlY3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RpcmVjdGlvblwiO1xuaW1wb3J0IHsgY29udmVydFBpeGVsVG9QZXJjZW50IH0gZnJvbSBcIi4vc2xpZGVyLXV0aWxpdGllc1wiO1xuaW1wb3J0IHsgRm9ybUFzc29jaWF0ZWRTbGlkZXIgfSBmcm9tIFwiLi9zbGlkZXIuZm9ybS1hc3NvY2lhdGVkXCI7XG4vKipcbiAqIFRoZSBzZWxlY3Rpb24gbW9kZXMgb2YgYSB7QGxpbmsgQG1pY3Jvc29mdC9mYXN0LWZvdW5kYXRpb24jKFNsaWRlcjpjbGFzcyl9LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgdmFyIFNsaWRlck1vZGU7XG4oZnVuY3Rpb24gKFNsaWRlck1vZGUpIHtcbiAgICBTbGlkZXJNb2RlW1wic2luZ2xlVmFsdWVcIl0gPSBcInNpbmdsZS12YWx1ZVwiO1xufSkoU2xpZGVyTW9kZSB8fCAoU2xpZGVyTW9kZSA9IHt9KSk7XG4vKipcbiAqIEEgU2xpZGVyIEN1c3RvbSBIVE1MIEVsZW1lbnQuXG4gKiBJbXBsZW1lbnRzIHRoZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3dhaS1hcmlhLTEuMS8jc2xpZGVyIHwgQVJJQSBzbGlkZXIgfS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBGb3JtQXNzb2NpYXRlZFNsaWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uLmx0cjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tXaWR0aCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tNaW5XaWR0aCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tIZWlnaHQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnRyYWNrTGVmdCA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudHJhY2tNaW5IZWlnaHQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEgc3RyaW5nIGZvciB0aGUgY29tcG9uZW50J3MgXCJhcmlhLXZhbHVldGV4dFwiIGF0dHJpYnV0ZSBiYXNlZCBvbiB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy52YWx1ZVRleHRGb3JtYXR0ZXIgPSAoKSA9PiBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1pbmltdW0gYWxsb3dlZCB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGRlZmF1bHRWYWx1ZSAtIDBcbiAgICAgICAgICogQHB1YmxpY1xuICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgKiBIVE1MIEF0dHJpYnV0ZTogbWluXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm1pbiA9IDA7IC8vIE1hcCB0byBwcm94eSBlbGVtZW50LlxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gYWxsb3dlZCB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQGRlZmF1bHRWYWx1ZSAtIDEwXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IG1heFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5tYXggPSAxMDsgLy8gTWFwIHRvIHByb3h5IGVsZW1lbnQuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZSB0byBpbmNyZW1lbnQgb3IgZGVjcmVtZW50IHZpYSBhcnJvdyBrZXlzLCBtb3VzZSBjbGljayBvciBkcmFnLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIEhUTUwgQXR0cmlidXRlOiBzdGVwXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0ZXAgPSAxOyAvLyBNYXAgdG8gcHJveHkgZWxlbWVudC5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcmllbnRhdGlvbiBvZiB0aGUgc2xpZGVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHVibGljXG4gICAgICAgICAqIEByZW1hcmtzXG4gICAgICAgICAqIEhUTUwgQXR0cmlidXRlOiBvcmllbnRhdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IE9yaWVudGF0aW9uLmhvcml6b250YWw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2VsZWN0aW9uIG1vZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwdWJsaWNcbiAgICAgICAgICogQHJlbWFya3NcbiAgICAgICAgICogSFRNTCBBdHRyaWJ1dGU6IG1vZGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubW9kZSA9IFNsaWRlck1vZGUuc2luZ2xlVmFsdWU7XG4gICAgICAgIHRoaXMua2V5cHJlc3NIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0ga2V5SG9tZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gYCR7dGhpcy5taW59YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBrZXlFbmQpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGAke3RoaXMubWF4fWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBrZXlBcnJvd1JpZ2h0OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIGtleUFycm93VXA6XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2Uga2V5QXJyb3dMZWZ0OlxuICAgICAgICAgICAgICAgICAgICBjYXNlIGtleUFycm93RG93bjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0dXBUcmFja0NvbnN0cmFpbnRzID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpZW50UmVjdCA9IHRoaXMudHJhY2suZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnRyYWNrV2lkdGggPSB0aGlzLnRyYWNrLmNsaWVudFdpZHRoO1xuICAgICAgICAgICAgdGhpcy50cmFja01pbldpZHRoID0gdGhpcy50cmFjay5jbGllbnRMZWZ0O1xuICAgICAgICAgICAgdGhpcy50cmFja0hlaWdodCA9IGNsaWVudFJlY3QuYm90dG9tO1xuICAgICAgICAgICAgdGhpcy50cmFja01pbkhlaWdodCA9IGNsaWVudFJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy50cmFja0xlZnQgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICBpZiAodGhpcy50cmFja1dpZHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja1dpZHRoID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXR1cExpc3RlbmVycyA9IChyZW1vdmUgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRBY3Rpb24gPSBgJHtyZW1vdmUgPyBcInJlbW92ZVwiIDogXCJhZGRcIn1FdmVudExpc3RlbmVyYDtcbiAgICAgICAgICAgIHRoaXNbZXZlbnRBY3Rpb25dKFwia2V5ZG93blwiLCB0aGlzLmtleXByZXNzSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzW2V2ZW50QWN0aW9uXShcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XG4gICAgICAgICAgICB0aGlzLnRodW1iW2V2ZW50QWN0aW9uXShcIm1vdXNlZG93blwiLCB0aGlzLmhhbmRsZVRodW1iTW91c2VEb3duKTtcbiAgICAgICAgICAgIHRoaXMudGh1bWJbZXZlbnRBY3Rpb25dKFwidG91Y2hzdGFydFwiLCB0aGlzLmhhbmRsZVRodW1iTW91c2VEb3duKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZXMgaGFuZGxlcnMgYXR0YWNoZWQgYnkgbW91c2Vkb3duIGhhbmRsZXJzXG4gICAgICAgICAgICBpZiAocmVtb3ZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb3VzZURvd24obnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUaHVtYk1vdXNlRG93bihudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogIEhhbmRsZSBtb3VzZSBtb3ZlcyBkdXJpbmcgYSB0aHVtYiBkcmFnIG9wZXJhdGlvblxuICAgICAgICAgKiAgSWYgdGhlIGV2ZW50IGhhbmRsZXIgaXMgbnVsbCBpdCByZW1vdmVzIHRoZSBldmVudHNcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlVGh1bWJNb3VzZURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlYWRPbmx5IHx8IHRoaXMuZGlzYWJsZWQgfHwgZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBldmVudEFjdGlvbiA9IGAke2V2ZW50ICE9PSBudWxsID8gXCJhZGRcIiA6IFwicmVtb3ZlXCJ9RXZlbnRMaXN0ZW5lcmA7XG4gICAgICAgICAgICB3aW5kb3dbZXZlbnRBY3Rpb25dKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZVdpbmRvd01vdXNlVXApO1xuICAgICAgICAgICAgd2luZG93W2V2ZW50QWN0aW9uXShcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICB3aW5kb3dbZXZlbnRBY3Rpb25dKFwidG91Y2htb3ZlXCIsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIHdpbmRvd1tldmVudEFjdGlvbl0oXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZVdpbmRvd01vdXNlVXApO1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZXZlbnQgIT09IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiAgSGFuZGxlIG1vdXNlIG1vdmVzIGR1cmluZyBhIHRodW1iIGRyYWcgb3BlcmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkT25seSB8fCB0aGlzLmRpc2FibGVkIHx8IGUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgdmFsdWUgYmFzZWQgb24gY3VycmVudCBwb3NpdGlvblxuICAgICAgICAgICAgY29uc3Qgc291cmNlRXZlbnQgPSB3aW5kb3cuVG91Y2hFdmVudCAmJiBlIGluc3RhbmNlb2YgVG91Y2hFdmVudFxuICAgICAgICAgICAgICAgID8gZS50b3VjaGVzWzBdXG4gICAgICAgICAgICAgICAgOiBlO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IHRoaXMub3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLmhvcml6b250YWxcbiAgICAgICAgICAgICAgICA/IHNvdXJjZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgLSB0aGlzLnRyYWNrTGVmdFxuICAgICAgICAgICAgICAgIDogc291cmNlRXZlbnQucGFnZVkgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IGAke3RoaXMuY2FsY3VsYXRlTmV3VmFsdWUoZXZlbnRWYWx1ZSl9YDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVOZXdWYWx1ZSA9IChyYXdWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB2YWx1ZSBiYXNlZCBvbiBjdXJyZW50IHBvc2l0aW9uXG4gICAgICAgICAgICBjb25zdCBuZXdQb3NpdGlvbiA9IGNvbnZlcnRQaXhlbFRvUGVyY2VudChyYXdWYWx1ZSwgdGhpcy5vcmllbnRhdGlvbiA9PT0gT3JpZW50YXRpb24uaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgID8gdGhpcy50cmFja01pbldpZHRoXG4gICAgICAgICAgICAgICAgOiB0aGlzLnRyYWNrTWluSGVpZ2h0LCB0aGlzLm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5ob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgPyB0aGlzLnRyYWNrV2lkdGhcbiAgICAgICAgICAgICAgICA6IHRoaXMudHJhY2tIZWlnaHQsIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gKHRoaXMubWF4IC0gdGhpcy5taW4pICogbmV3UG9zaXRpb24gKyB0aGlzLm1pbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0NvbnN0cmFpbmVkVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlIGEgd2luZG93IG1vdXNlIHVwIGR1cmluZyBhIGRyYWcgb3BlcmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZVdpbmRvd01vdXNlVXAgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc3RvcERyYWdnaW5nID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRG93bihudWxsKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGh1bWJNb3VzZURvd24obnVsbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gZSAtIE1vdXNlRXZlbnQgb3IgbnVsbC4gSWYgdGhlcmUgaXMgbm8gZXZlbnQgaGFuZGxlciBpdCB3aWxsIHJlbW92ZSB0aGUgZXZlbnRzXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhbmRsZU1vdXNlRG93biA9IChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudEFjdGlvbiA9IGAke2UgIT09IG51bGwgPyBcImFkZFwiIDogXCJyZW1vdmVcIn1FdmVudExpc3RlbmVyYDtcbiAgICAgICAgICAgIGlmIChlID09PSBudWxsIHx8ICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5yZWFkT25seSkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3dbZXZlbnRBY3Rpb25dKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZVdpbmRvd01vdXNlVXApO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kb2N1bWVudFtldmVudEFjdGlvbl0oXCJtb3VzZWxlYXZlXCIsIHRoaXMuaGFuZGxlV2luZG93TW91c2VVcCk7XG4gICAgICAgICAgICAgICAgd2luZG93W2V2ZW50QWN0aW9uXShcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldHVwVHJhY2tDb25zdHJhaW50cygpO1xuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250cm9sVmFsdWUgPSB0aGlzLm9yaWVudGF0aW9uID09PSBPcmllbnRhdGlvbi5ob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGUucGFnZVggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCAtIHRoaXMudHJhY2tMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICA6IGUucGFnZVkgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gYCR7dGhpcy5jYWxjdWxhdGVOZXdWYWx1ZShjb250cm9sVmFsdWUpfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0NvbnN0cmFpbmVkVmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMubWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBUaGUgZm9sbG93aW5nIGxvZ2ljIGludGVuZHMgdG8gb3ZlcmNvbWUgdGhlIGlzc3VlIHdpdGggbWF0aCBpbiBKYXZhU2NyaXB0IHdpdGggcmVnYXJkcyB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLlxuICAgICAgICAgICAgICogVGhpcyBpcyBuZWVkZWQgYXMgdGhlIGBzdGVwYCBtYXkgYmUgYW4gaW50ZWdlciBidXQgY291bGQgYWxzbyBiZSBhIGZsb2F0LiBUbyBhY2NvbXBsaXNoIHRoaXMgdGhlIHN0ZXAgIGlzIGFzc3VtZWQgdG8gYmUgYSBmbG9hdFxuICAgICAgICAgICAgICogYW5kIGlzIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IGRldGVybWluaW5nIHRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgaXQgcmVwcmVzZW50LCBtdWx0aXBseWluZyBpdCB1bnRpbCBpdCBpcyBhblxuICAgICAgICAgICAgICogaW50ZWdlciBhbmQgdGhlbiBkaXZpZGluZyBpdCB0byBnZXQgYmFjayB0byB0aGUgY29ycmVjdCBudW1iZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCBjb25zdHJhaW5lZFZhbHVlID0gdmFsdWUgLSB0aGlzLm1pbjtcbiAgICAgICAgICAgIGNvbnN0IHJvdW5kZWRDb25zdHJhaW5lZFZhbHVlID0gTWF0aC5yb3VuZChjb25zdHJhaW5lZFZhbHVlIC8gdGhpcy5zdGVwKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbWFpbmRlclZhbHVlID0gY29uc3RyYWluZWRWYWx1ZSAtXG4gICAgICAgICAgICAgICAgKHJvdW5kZWRDb25zdHJhaW5lZFZhbHVlICogKHRoaXMuc3RlcE11bHRpcGxpZXIgKiB0aGlzLnN0ZXApKSAvXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcE11bHRpcGxpZXI7XG4gICAgICAgICAgICBjb25zdHJhaW5lZFZhbHVlID1cbiAgICAgICAgICAgICAgICByZW1haW5kZXJWYWx1ZSA+PSBOdW1iZXIodGhpcy5zdGVwKSAvIDJcbiAgICAgICAgICAgICAgICAgICAgPyBjb25zdHJhaW5lZFZhbHVlIC0gcmVtYWluZGVyVmFsdWUgKyBOdW1iZXIodGhpcy5zdGVwKVxuICAgICAgICAgICAgICAgICAgICA6IGNvbnN0cmFpbmVkVmFsdWUgLSByZW1haW5kZXJWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJhaW5lZFZhbHVlICsgdGhpcy5taW47XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlYWRPbmx5Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LnJlYWRPbmx5ID0gdGhpcy5yZWFkT25seTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgcHJvcGVydHksIHR5cGVkIGFzIGEgbnVtYmVyLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIGdldCB2YWx1ZUFzTnVtYmVyKCkge1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzdXBlci52YWx1ZSk7XG4gICAgfVxuICAgIHNldCB2YWx1ZUFzTnVtYmVyKG5leHQpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5leHQudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgdmFsdWVDaGFuZ2VkKHByZXZpb3VzLCBuZXh0KSB7XG4gICAgICAgIHN1cGVyLnZhbHVlQ2hhbmdlZChwcmV2aW91cywgbmV4dCk7XG4gICAgICAgIGlmICh0aGlzLiRmYXN0Q29udHJvbGxlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5zZXRUaHVtYlBvc2l0aW9uRm9yT3JpZW50YXRpb24odGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJGVtaXQoXCJjaGFuZ2VcIik7XG4gICAgfVxuICAgIG1pbkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3h5IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5wcm94eS5taW4gPSBgJHt0aGlzLm1pbn1gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gICAgbWF4Q2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5Lm1heCA9IGAke3RoaXMubWF4fWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgICBzdGVwQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJveHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByb3h5LnN0ZXAgPSBgJHt0aGlzLnN0ZXB9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0ZXBNdWx0aXBsaWVyKCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gICAgb3JpZW50YXRpb25DaGFuZ2VkKCkge1xuICAgICAgICBpZiAodGhpcy4kZmFzdENvbnRyb2xsZXIuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VGh1bWJQb3NpdGlvbkZvck9yaWVudGF0aW9uKHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5wcm94eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZ2V0RGlyZWN0aW9uKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0ZXBNdWx0aXBsaWVyKCk7XG4gICAgICAgIHRoaXMuc2V0dXBUcmFja0NvbnN0cmFpbnRzKCk7XG4gICAgICAgIHRoaXMuc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5zZXR1cERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB0aGlzLnNldFRodW1iUG9zaXRpb25Gb3JPcmllbnRhdGlvbih0aGlzLmRpcmVjdGlvbik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnNldHVwTGlzdGVuZXJzKHRydWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHZhbHVlIGJ5IHRoZSBzdGVwXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLmRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLnJ0bCAmJiB0aGlzLm9yaWVudGF0aW9uICE9PSBPcmllbnRhdGlvbi52ZXJ0aWNhbFxuICAgICAgICAgICAgPyBOdW1iZXIodGhpcy52YWx1ZSkgKyBOdW1iZXIodGhpcy5zdGVwKVxuICAgICAgICAgICAgOiBOdW1iZXIodGhpcy52YWx1ZSkgLSBOdW1iZXIodGhpcy5zdGVwKTtcbiAgICAgICAgY29uc3QgaW5jcmVtZW50ZWRWYWwgPSB0aGlzLmNvbnZlcnRUb0NvbnN0cmFpbmVkVmFsdWUobmV3VmFsKTtcbiAgICAgICAgY29uc3QgaW5jcmVtZW50ZWRWYWxTdHJpbmcgPSBpbmNyZW1lbnRlZFZhbCA8IE51bWJlcih0aGlzLm1heCkgPyBgJHtpbmNyZW1lbnRlZFZhbH1gIDogYCR7dGhpcy5tYXh9YDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGluY3JlbWVudGVkVmFsU3RyaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWNyZW1lbnQgdGhlIHZhbHVlIGJ5IHRoZSBzdGVwXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgZGVjcmVtZW50KCkge1xuICAgICAgICBjb25zdCBuZXdWYWwgPSB0aGlzLmRpcmVjdGlvbiAhPT0gRGlyZWN0aW9uLnJ0bCAmJiB0aGlzLm9yaWVudGF0aW9uICE9PSBPcmllbnRhdGlvbi52ZXJ0aWNhbFxuICAgICAgICAgICAgPyBOdW1iZXIodGhpcy52YWx1ZSkgLSBOdW1iZXIodGhpcy5zdGVwKVxuICAgICAgICAgICAgOiBOdW1iZXIodGhpcy52YWx1ZSkgKyBOdW1iZXIodGhpcy5zdGVwKTtcbiAgICAgICAgY29uc3QgZGVjcmVtZW50ZWRWYWwgPSB0aGlzLmNvbnZlcnRUb0NvbnN0cmFpbmVkVmFsdWUobmV3VmFsKTtcbiAgICAgICAgY29uc3QgZGVjcmVtZW50ZWRWYWxTdHJpbmcgPSBkZWNyZW1lbnRlZFZhbCA+IE51bWJlcih0aGlzLm1pbikgPyBgJHtkZWNyZW1lbnRlZFZhbH1gIDogYCR7dGhpcy5taW59YDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGRlY3JlbWVudGVkVmFsU3RyaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQbGFjZXMgdGhlIHRodW1iIGJhc2VkIG9uIHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIGRpcmVjdGlvbiAtIHdyaXRpbmcgbW9kZVxuICAgICAqL1xuICAgIHNldFRodW1iUG9zaXRpb25Gb3JPcmllbnRhdGlvbihkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbmV3UGN0ID0gY29udmVydFBpeGVsVG9QZXJjZW50KE51bWJlcih0aGlzLnZhbHVlKSwgTnVtYmVyKHRoaXMubWluKSwgTnVtYmVyKHRoaXMubWF4KSwgZGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9ICgxIC0gbmV3UGN0KSAqIDEwMDtcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IE9yaWVudGF0aW9uLmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLmlzRHJhZ2dpbmdcbiAgICAgICAgICAgICAgICA/IGByaWdodDogJHtwZXJjZW50YWdlfSU7IHRyYW5zaXRpb246IG5vbmU7YFxuICAgICAgICAgICAgICAgIDogYHJpZ2h0OiAke3BlcmNlbnRhZ2V9JTsgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuaXNEcmFnZ2luZ1xuICAgICAgICAgICAgICAgID8gYGJvdHRvbTogJHtwZXJjZW50YWdlfSU7IHRyYW5zaXRpb246IG5vbmU7YFxuICAgICAgICAgICAgICAgIDogYGJvdHRvbTogJHtwZXJjZW50YWdlfSU7IHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHN0ZXAgbXVsdGlwbGllciB1c2VkIHRvIGVuc3VyZSByb3VuZGluZyBlcnJvcnMgZnJvbSBzdGVwcyB0aGF0XG4gICAgICogYXJlIG5vdCB3aG9sZSBudW1iZXJzXG4gICAgICovXG4gICAgdXBkYXRlU3RlcE11bHRpcGxpZXIoKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0ZXAgKyBcIlwiO1xuICAgICAgICBjb25zdCBkZWNpbWFsUGxhY2VzT2ZTdGVwID0gISEodGhpcy5zdGVwICUgMSlcbiAgICAgICAgICAgID8gc3RlcFN0cmluZy5sZW5ndGggLSBzdGVwU3RyaW5nLmluZGV4T2YoXCIuXCIpIC0gMVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICB0aGlzLnN0ZXBNdWx0aXBsaWVyID0gTWF0aC5wb3coMTAsIGRlY2ltYWxQbGFjZXNPZlN0ZXApO1xuICAgIH1cbiAgICBnZXQgbWlkcG9pbnQoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNvbnZlcnRUb0NvbnN0cmFpbmVkVmFsdWUoKHRoaXMubWF4ICsgdGhpcy5taW4pIC8gMil9YDtcbiAgICB9XG4gICAgc2V0dXBEZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsVmFsdWUgPSB0aGlzLm1pZHBvaW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghTnVtYmVyLmlzTmFOKHZhbHVlKSAmJiAodmFsdWUgPCB0aGlzLm1pbiB8fCB2YWx1ZSA+IHRoaXMubWF4KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taWRwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgYXR0cmlidXRlOiBcInJlYWRvbmx5XCIsIG1vZGU6IFwiYm9vbGVhblwiIH0pXG5dLCBTbGlkZXIucHJvdG90eXBlLCBcInJlYWRPbmx5XCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBTbGlkZXIucHJvdG90eXBlLCBcImRpcmVjdGlvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJpc0RyYWdnaW5nXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBTbGlkZXIucHJvdG90eXBlLCBcInBvc2l0aW9uXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBvYnNlcnZhYmxlXG5dLCBTbGlkZXIucHJvdG90eXBlLCBcInRyYWNrV2lkdGhcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIFNsaWRlci5wcm90b3R5cGUsIFwidHJhY2tNaW5XaWR0aFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJ0cmFja0hlaWdodFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgb2JzZXJ2YWJsZVxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJ0cmFja0xlZnRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIFNsaWRlci5wcm90b3R5cGUsIFwidHJhY2tNaW5IZWlnaHRcIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIG9ic2VydmFibGVcbl0sIFNsaWRlci5wcm90b3R5cGUsIFwidmFsdWVUZXh0Rm9ybWF0dGVyXCIsIHZvaWQgMCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdHRyKHsgY29udmVydGVyOiBudWxsYWJsZU51bWJlckNvbnZlcnRlciB9KVxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJtaW5cIiwgdm9pZCAwKTtcbl9fZGVjb3JhdGUoW1xuICAgIGF0dHIoeyBjb252ZXJ0ZXI6IG51bGxhYmxlTnVtYmVyQ29udmVydGVyIH0pXG5dLCBTbGlkZXIucHJvdG90eXBlLCBcIm1heFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0cih7IGNvbnZlcnRlcjogbnVsbGFibGVOdW1iZXJDb252ZXJ0ZXIgfSlcbl0sIFNsaWRlci5wcm90b3R5cGUsIFwic3RlcFwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0clxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJvcmllbnRhdGlvblwiLCB2b2lkIDApO1xuX19kZWNvcmF0ZShbXG4gICAgYXR0clxuXSwgU2xpZGVyLnByb3RvdHlwZSwgXCJtb2RlXCIsIHZvaWQgMCk7XG4iLCJpbXBvcnQgeyBodG1sLCByZWYgfSBmcm9tIFwiQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnRcIjtcbmltcG9ydCB7IE9yaWVudGF0aW9uIH0gZnJvbSBcIkBtaWNyb3NvZnQvZmFzdC13ZWItdXRpbGl0aWVzXCI7XG4vKipcbiAqIFRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHtAbGluayBAbWljcm9zb2Z0L2Zhc3QtZm91bmRhdGlvbiMoU2xpZGVyOmNsYXNzKX0gY29tcG9uZW50LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2xpZGVyVGVtcGxhdGUgPSAoY29udGV4dCwgZGVmaW5pdGlvbikgPT4gaHRtbCBgXG4gICAgPHRlbXBsYXRlXG4gICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICBjbGFzcz1cIiR7eCA9PiAoeC5yZWFkT25seSA/IFwicmVhZG9ubHlcIiA6IFwiXCIpfVxuICAgICAgICAke3ggPT4geC5vcmllbnRhdGlvbiB8fCBPcmllbnRhdGlvbi5ob3Jpem9udGFsfVwiXG4gICAgICAgIHRhYmluZGV4PVwiJHt4ID0+ICh4LmRpc2FibGVkID8gbnVsbCA6IDApfVwiXG4gICAgICAgIGFyaWEtdmFsdWV0ZXh0PVwiJHt4ID0+IHgudmFsdWVUZXh0Rm9ybWF0dGVyKHgudmFsdWUpfVwiXG4gICAgICAgIGFyaWEtdmFsdWVub3c9XCIke3ggPT4geC52YWx1ZX1cIlxuICAgICAgICBhcmlhLXZhbHVlbWluPVwiJHt4ID0+IHgubWlufVwiXG4gICAgICAgIGFyaWEtdmFsdWVtYXg9XCIke3ggPT4geC5tYXh9XCJcbiAgICAgICAgYXJpYS1kaXNhYmxlZD1cIiR7eCA9PiAoeC5kaXNhYmxlZCA/IHRydWUgOiB2b2lkIDApfVwiXG4gICAgICAgIGFyaWEtcmVhZG9ubHk9XCIke3ggPT4gKHgucmVhZE9ubHkgPyB0cnVlIDogdm9pZCAwKX1cIlxuICAgICAgICBhcmlhLW9yaWVudGF0aW9uPVwiJHt4ID0+IHgub3JpZW50YXRpb259XCJcbiAgICAgICAgY2xhc3M9XCIke3ggPT4geC5vcmllbnRhdGlvbn1cIlxuICAgID5cbiAgICAgICAgPGRpdiBwYXJ0PVwicG9zaXRpb25pbmctcmVnaW9uXCIgY2xhc3M9XCJwb3NpdGlvbmluZy1yZWdpb25cIj5cbiAgICAgICAgICAgIDxkaXYgJHtyZWYoXCJ0cmFja1wiKX0gcGFydD1cInRyYWNrLWNvbnRhaW5lclwiIGNsYXNzPVwidHJhY2tcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwidHJhY2tcIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAke3JlZihcInRodW1iXCIpfVxuICAgICAgICAgICAgICAgIHBhcnQ9XCJ0aHVtYi1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGh1bWItY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cIiR7eCA9PiB4LnBvc2l0aW9ufVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInRodW1iXCI+JHtkZWZpbml0aW9uLnRodW1iIHx8IFwiXCJ9PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5gO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCBrZWVwcyBhIGdpdmVuIHZhbHVlIHdpdGhpbiB0aGUgYm91bmRzIG9mIGEgbWluIGFuZCBtYXggdmFsdWUuIElmIHRoZSB2YWx1ZVxuICogaXMgbGFyZ2VyIHRoYW4gdGhlIG1heCwgdGhlIG1pbmltdW0gdmFsdWUgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIHZhbHVlIGlzIHNtYWxsZXIgdGhhbiB0aGUgbWluaW11bSxcbiAqIHRoZSBtYXhpbXVtIHdpbGwgYmUgcmV0dXJuZWQuIE90aGVyd2lzZSwgdGhlIHZhbHVlIGlzIHJldHVybmVkIHVuLWNoYW5nZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3cmFwSW5Cb3VuZHMobWluLCBtYXgsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgICAgIHJldHVybiBtYXg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlID4gbWF4KSB7XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogRW5zdXJlcyB0aGF0IGEgdmFsdWUgaXMgYmV0d2VlbiBhIG1pbiBhbmQgbWF4IHZhbHVlLiBJZiB2YWx1ZSBpcyBsb3dlciB0aGFuIG1pbiwgbWluIHdpbGwgYmUgcmV0dXJuZWQuXG4gKiBJZiB2YWx1ZSBpcyBncmVhdGVyIHRoYW4gbWF4LCBtYXggd2lsbCBiZSByZXR1cm5lZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxpbWl0KG1pbiwgbWF4LCB2YWx1ZSkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbn1cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiBhIG51bWJlciB2YWx1ZSBpcyB3aXRoaW4gYSBzcGVjaWZpZWQgcmFuZ2UuXG4gKlxuICogQHBhcmFtIHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcGFyYW0gbWluIC0gdGhlIHJhbmdlIHN0YXJ0XG4gKiBAcGFyYW0gbWF4IC0gdGhlIHJhbmdlIGVuZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5SYW5nZSh2YWx1ZSwgbWluLCBtYXggPSAwKSB7XG4gICAgW21pbiwgbWF4XSA9IFttaW4sIG1heF0uc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIHJldHVybiBtaW4gPD0gdmFsdWUgJiYgdmFsdWUgPCBtYXg7XG59XG4iLCJpbXBvcnQge1xuICBwcm92aWRlRmx1ZW50RGVzaWduU3lzdGVtLFxuICBmbHVlbnRCdXR0b24sXG4gIGZsdWVudENhcmQsXG4gIGZpbGxDb2xvcixcbiAgbmV1dHJhbExheWVyMyxcbiAgbmV1dHJhbExheWVyMixcbiAgYmFzZUxheWVyTHVtaW5hbmNlLFxuICBTdGFuZGFyZEx1bWluYW5jZSxcbiAgbmV1dHJhbEJhc2VDb2xvcixcbiAgU3dhdGNoUkdCLFxuICBhY2NlbnRCYXNlQ29sb3IsXG4gIGZsdWVudEJhZGdlLFxuICBmbHVlbnRUZXh0RmllbGQsXG4gIGZsdWVudFJhZGlvLFxuICBmbHVlbnRSYWRpb0dyb3VwLFxuICBmbHVlbnRDaGVja2JveCxcbiAgZmx1ZW50U3dpdGNoLFxuICBmbHVlbnRTbGlkZXIsXG59IGZyb20gJ0BmbHVlbnR1aS93ZWItY29tcG9uZW50cyc7XG5pbXBvcnQgeyBwYXJzZUNvbG9ySGV4UkdCIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWNvbG9ycyc7XG5cbnByb3ZpZGVGbHVlbnREZXNpZ25TeXN0ZW0oKS5yZWdpc3RlcihcbiAgZmx1ZW50QnV0dG9uKCksXG4gIGZsdWVudENhcmQoKSxcbiAgZmx1ZW50QmFkZ2UoKSxcbiAgZmx1ZW50VGV4dEZpZWxkKCksXG4gIGZsdWVudFJhZGlvKCksXG4gIGZsdWVudFJhZGlvR3JvdXAoKSxcbiAgZmx1ZW50Q2hlY2tib3goKSxcbiAgZmx1ZW50U3dpdGNoKCksXG4gIGZsdWVudFNsaWRlcigpXG4pO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0ge1xuICBhY2NlbnQ6ICcjMDM2MGI5JyxcbiAgYmFzZTogJyNlYmViZWInLFxufTtcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSBhcyBIVE1MRWxlbWVudDtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpIGFzIEhUTUxFbGVtZW50O1xuY29uc3QgdXBkYXRlU3R5bGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgJ3VwZGF0ZS1zdHlsZSdcbikgYXMgSFRNTEVsZW1lbnQ7XG5jb25zdCBhY2NlbnRQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWNjZW50LWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgYmFzZVBpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlLWNvbG9yJykgYXMgSFRNTEZvcm1FbGVtZW50O1xuY29uc3QgbW9kZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ZsdWVudC1zd2l0Y2gnKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XG5cbnNpZGViYXIgJiYgZmlsbENvbG9yLnNldFZhbHVlRm9yKHNpZGViYXIsIG5ldXRyYWxMYXllcjIpO1xuYm9keSAmJiBmaWxsQ29sb3Iuc2V0VmFsdWVGb3IoYm9keSwgbmV1dHJhbExheWVyMyk7XG5cbmNvbnN0IHNldENvbG9yID0gKGNvbG9yOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQgPT4ge1xuICBpZiAodHlwZSA9PT0gJ2FjY2VudCcpIHtcbiAgICBib2R5ICYmXG4gICAgICBhY2NlbnRCYXNlQ29sb3Iuc2V0VmFsdWVGb3IoXG4gICAgICAgIGJvZHksXG4gICAgICAgIFN3YXRjaFJHQi5mcm9tKHBhcnNlQ29sb3JIZXhSR0IoY29sb3IpISlcbiAgICAgICk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jhc2UnKSB7XG4gICAgYm9keSAmJlxuICAgICAgbmV1dHJhbEJhc2VDb2xvci5zZXRWYWx1ZUZvcihcbiAgICAgICAgYm9keSxcbiAgICAgICAgU3dhdGNoUkdCLmZyb20ocGFyc2VDb2xvckhleFJHQihjb2xvcikhKVxuICAgICAgKTtcbiAgfVxufTtcblxudXBkYXRlU3R5bGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKTogdm9pZCA9PiB7XG4gIGFjY2VudFBpY2tlci52YWx1ZSA9IGRlZmF1bHRDb2xvcnMuYWNjZW50O1xuICBiYXNlUGlja2VyLnZhbHVlID0gZGVmYXVsdENvbG9ycy5iYXNlO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmFjY2VudCwgJ2FjY2VudCcpO1xuICBzZXRDb2xvcihkZWZhdWx0Q29sb3JzLmJhc2UsICdiYXNlJyk7XG59KTtcblxuYWNjZW50UGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpOiB2b2lkID0+IHtcbiAgc2V0Q29sb3IoYWNjZW50UGlja2VyLnZhbHVlLCAnYWNjZW50Jyk7XG59KTtcblxuYmFzZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKTogdm9pZCA9PiB7XG4gIHNldENvbG9yKGJhc2VQaWNrZXIudmFsdWUsICdiYXNlJyk7XG59KTtcblxubW9kZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcbiAgaWYgKCFtb2RlU3dpdGNoLmNoZWNrZWQpIHtcbiAgICBib2R5ICYmIGJhc2VMYXllckx1bWluYW5jZS5zZXRWYWx1ZUZvcihib2R5LCBTdGFuZGFyZEx1bWluYW5jZS5MaWdodE1vZGUpO1xuICB9IGVsc2Uge1xuICAgIGJvZHkgJiYgYmFzZUxheWVyTHVtaW5hbmNlLnNldFZhbHVlRm9yKGJvZHksIFN0YW5kYXJkTHVtaW5hbmNlLkRhcmtNb2RlKTtcbiAgfVxufSk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NmM0OWU1YzQ4MWI1ZDIwN2IxNVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==