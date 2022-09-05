/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-split-button-icons',
  template: ` <ix-split-button icon="document">
    <ix-split-button-item icon="cut"></ix-split-button-item>
    <ix-split-button-item icon="bulb"></ix-split-button-item>
  </ix-split-button>`,
})
export class SplitButtonIcons {}
