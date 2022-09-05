/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-category-filter',
  template: `
    <ix-category-filter
      placeholder="Filter by"
      [repeatCategories]="repeatCategories"
      [categories]="categories"
      [filterState]="filterState"
    ></ix-category-filter>
  `,
})
export class CategoryFilter {
  repeatCategories = false;
  filterState = {
    tokens: ['Custom filter text'],
    categories: [
      {
        id: 'ID_1',
        value: 'IBM',
        operator: 'Not equal',
      },
    ],
  };
  categories = {
    ID_1: {
      label: 'Vendor',
      options: ['Apple', 'MS', 'Siemens'],
    },
    ID_2: {
      label: 'Product',
      options: ['iPhone X', 'Windows', 'APS'],
    },
  };
}
