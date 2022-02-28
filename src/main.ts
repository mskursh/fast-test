import {
  provideFluentDesignSystem,
  fluentButton,
  fluentCard,
  fillColor,
  neutralLayer3,
  neutralLayer2,
  baseLayerLuminance,
  StandardLuminance,
  neutralBaseColor,
  SwatchRGB,
  accentBaseColor,
  fluentBadge,
  fluentTextField,
  fluentRadio,
  fluentRadioGroup,
  fluentCheckbox,
  fluentSwitch,
  fluentSlider,
  fluentSliderLabel,
} from '@fluentui/web-components';
import { parseColorHexRGB } from '@microsoft/fast-colors';

provideFluentDesignSystem().register(
  fluentButton(),
  fluentCard(),
  fluentBadge(),
  fluentTextField(),
  fluentRadio(),
  fluentRadioGroup(),
  fluentCheckbox(),
  fluentSwitch(),
  fluentSlider(),
  fluentSliderLabel()
);

const defaultColors = {
  accent: '#0360b9',
  base: '#ebebeb',
};

const body = document.querySelector('body') as HTMLElement;
const sidebar = document.querySelector('.sidebar') as HTMLElement;
const resetStyleButton = document.getElementById('reset-style') as HTMLElement;
const accentPicker = document.getElementById('accent-color') as HTMLFormElement;
const basePicker = document.getElementById('base-color') as HTMLFormElement;
const modeSwitch = document.querySelector('fluent-switch') as HTMLFormElement;
const slider = document.querySelector('fluent-slider') as HTMLFormElement;

sidebar && fillColor.setValueFor(sidebar, neutralLayer2);
body && fillColor.setValueFor(body, neutralLayer3);

const setColor = (color: string, type: string): void => {
  if (type === 'accent') {
    body &&
      accentBaseColor.setValueFor(
        body,
        SwatchRGB.from(parseColorHexRGB(color)!)
      );
  } else if (type === 'base') {
    body &&
      neutralBaseColor.setValueFor(
        body,
        SwatchRGB.from(parseColorHexRGB(color)!)
      );
  }
};

accentPicker.addEventListener('change', (): void => {
  setColor(accentPicker.value, 'accent');
});

basePicker.addEventListener('change', (): void => {
  setColor(basePicker.value, 'base');
});

modeSwitch.addEventListener('click', (): void => {
  if (modeSwitch.checked) {
    body && baseLayerLuminance.setValueFor(body, 100);
    slider.value = 100;
  } else if (!modeSwitch.checked) {
    body && baseLayerLuminance.setValueFor(body, 0);
    slider.value = 0;
  }
});

slider.addEventListener('change', () => {
  body && baseLayerLuminance.setValueFor(body, (100 - slider.value) / 100);
  console.log(slider.value);
  if (slider.value <= 45) {
    modeSwitch.checked = false;
  } else if (slider.value >= 46) {
    modeSwitch.checked = true;
  }
});
