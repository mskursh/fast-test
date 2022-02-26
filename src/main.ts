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
  fluentSwitch()
);

const sidebar = document.querySelector('.sidebar') as HTMLElement;
sidebar && fillColor.setValueFor(sidebar, neutralLayer2);

const body = document.querySelector('body') as HTMLElement;
body && fillColor.setValueFor(body, neutralLayer3);

const updateStyleButton = document.getElementById('update-style');
updateStyleButton?.addEventListener('click', (): void => {
  const accentPicker = document.getElementById(
    'accent-color'
  ) as HTMLFormElement;
  const accentColor = accentPicker.value;

  const basePicker = document.getElementById('base-color') as HTMLFormElement;
  const baseColor = basePicker.value;

  if (body) {
    accentBaseColor.setValueFor(
      body,
      SwatchRGB.from(parseColorHexRGB(accentColor)!)
    );
    neutralBaseColor.setValueFor(
      body,
      SwatchRGB.from(parseColorHexRGB(baseColor)!)
    );
  }
});

const modeSwitch = document.querySelector('fluent-switch') as HTMLFormElement;

modeSwitch.addEventListener('click', (): void => {
  if (!modeSwitch.checked) {
    body && baseLayerLuminance.setValueFor(body, StandardLuminance.LightMode);
  } else {
    body && baseLayerLuminance.setValueFor(body, StandardLuminance.DarkMode);
  }
});
