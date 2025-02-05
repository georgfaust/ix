/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { JsonDocs } from '@stencil/core/internal';
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import autoprefixer from 'autoprefixer';
import fs from 'fs';
import path from 'path';

const copyAssets = [
  {
    src: './../../../node_modules/@siemens/ix-icons/dist',
    dest: 'build/ix-icons',
  },
  {
    src: './../../../node_modules/bootstrap',
    dest: 'build/bootstrap',
  },
];

try {
  const brandTheme = require.resolve('@siemens/ix-brand-theme');

  if (brandTheme) {
    const themeFolder = path.join(brandTheme, '..', '..');
    copyAssets.push({
      src: themeFolder,
      dest: 'build/ix-brand-theme',
    });
  }
} catch (e) {
  console.warn('No additional theme fround');
}

export const config: Config = {
  globalScript: './src/setup.ts',
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true,
    enableImportInjection: true,
    scopedSlotTextContentFix: true,
  },
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/tests/', '/dist/'],
    setupFilesAfterEnv: ['<rootDir>/src/tests/utils/test/matchMedia.mock.js'],
    browserArgs: ['--no-sandbox', '--disable-stuid-sandbox'],
    browserHeadless: 'new',
  },
  namespace: 'siemens-ix',
  globalStyle: './scss/ix.scss',
  minifyCss: false,
  plugins: [
    sass({
      includePaths: ['./scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../vue/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: ['ix-playground-internal', 'ix-icon'],
    }),
    angularOutputTarget({
      componentCorePackage: '@siemens/ix',
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      excludeComponents: ['ix-playground-internal', 'ix-tree', 'ix-icon'],
      valueAccessorConfigs: [
        {
          elementSelectors:
            'ix-select[ngModel],ix-select[formControlName],ix-select[formControl]',
          event: 'valueChange',
          targetAttr: 'value',
          type: 'select',
        },
        {
          elementSelectors:
            'ix-toggle[ngModel],ix-toggle[formControlName],ix-toggle[formControl]',
          event: 'checkedChange',
          targetAttr: 'checked',
          type: 'boolean',
        },
      ],
    }),
    reactOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../react/src/components.ts',
      includeImportCustomElements: true,
      includePolyfills: false,
      includeDefineCustomElements: false,
      excludeComponents: [
        'ix-playground-internal',
        'ix-tree',
        'ix-tree-item',
        'ix-icon',
      ],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    {
      type: 'docs-custom',
      generator: (docs: JsonDocs) => {
        // Delete timestamp from docs, because turbo caching not working with autogenerated time
        docs.timestamp = '';
        const docsJson = JSON.stringify(docs, null, 2);

        // Remove all paths from component doc
        const patchedJson = normalizeProperties(JSON.parse(docsJson), [
          'dirPath',
          'filePath',
          'readmePath',
          'usagesDir',
          'path',
        ]);

        fs.writeFileSync(
          'component-doc.json',
          JSON.stringify(patchedJson, null, 2).replace(/(?:\\[r])+/g, '')
        );
      },
    },
    {
      type: 'www',
      serviceWorker: null,
      copy: copyAssets,
    },
  ],
};

function normalizeProperties(obj: JsonDocs, deleteProps: string[]) {
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      normalizeProperties(obj[key], deleteProps);
    } else if (deleteProps.includes(key)) {
      obj[key] = path.relative(__dirname, obj[key]);
    }
  }

  return obj;
}
