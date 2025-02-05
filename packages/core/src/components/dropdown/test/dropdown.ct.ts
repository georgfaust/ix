/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ElementHandle, expect, Locator, Page } from '@playwright/test';
import { test } from '@utils/test';

test('renders', async ({ mount, page }) => {
  await mount(`
  <ix-split-button label="Test 1">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-split-button label="Test 2">
    <ix-dropdown-item>Test 1</ix-dropdown-item>
  </ix-split-button>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>

  <ix-group header="Title" sub-header="Subtitle">
    <ix-dropdown slot="dropdown">
      <ix-dropdown-item label="Item 1" icon="pin" />
      <ix-dropdown-item label="Item 2" icon="star" />
      <ix-dropdown-item label="Item 3" icon="heart" />
      <ix-dropdown-item label="Item 4" icon="cogwheel" />
    </ix-dropdown>
  </ix-group>
  `);

  const sb1 = page.locator('ix-split-button').nth(0);
  const sb2 = page.locator('ix-split-button').nth(1);

  const g1 = page.locator('ix-group').nth(0);
  const g2 = page.locator('ix-group').nth(1);

  const sb1Dropdown = sb1.locator('ix-dropdown');
  const sb2Dropdown = sb2.locator('ix-dropdown');
  const g1Dropdown = g1.locator('ix-dropdown');
  const g2Dropdown = g2.locator('ix-dropdown');

  await sb1.locator('ix-icon-button').first().click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    0
  );

  await sb2.locator('ix-icon-button').first().click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    1
  );

  await g2.locator('ix-icon-button').click();

  await expectToBeVisible(
    [sb1Dropdown, sb2Dropdown, g1Dropdown, g2Dropdown],
    3
  );
});

function expectToBeVisible(elements: Locator[], index: number) {
  return Promise.all(
    elements.map(async (element, i) => {
      let ef = expect(element);
      if (i !== index) {
        ef = ef.not;
      }
      await ef.toBeVisible();
    })
  );
}

test('trigger toggles', async ({ mount, page }) => {
  await mount(`<ix-button id="trigger">Open</ix-button>
    <ix-dropdown trigger="trigger" trigger-toggles="true">
      <ix-dropdown-item label="Item 1"></ix-dropdown-item>
      <ix-dropdown-item label="Item 2"></ix-dropdown-item>
    </ix-dropdown>
  `);

  await page.locator('ix-button').click();
  const dropdown = page.locator('.dropdown-menu');
  await expect(dropdown).toHaveClass(/show/);
  await expect(dropdown).toBeVisible();

  await page.locator('ix-button').click();
  const after = page.locator('.dropdown-menu');
  await expect(after).not.toHaveClass(/show/);
  await expect(dropdown).not.toBeVisible();
});

test.describe('Close behavior', () => {
  function mountDropdown(
    mount: (selector: string) => Promise<ElementHandle<HTMLElement>>,
    config: {
      closeBehavior: string | boolean;
    }
  ) {
    const closeBehavior = config.closeBehavior
      ? `close-behavior="${config.closeBehavior}"`
      : '';

    return mount(`
      <ix-button id="level-1">Trigger</ix-button>
      <ix-dropdown id="dropdown-level-1" trigger="level-1" ${closeBehavior}>
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item>Item 3</ix-dropdown-item>
      </ix-dropdown>
  `);
  }

  let triggerButton: Locator;
  let dropdownLevel1: Locator;

  let dropdownLevel1_Item1: Locator;

  function setupTest(page: Page) {
    triggerButton = page.locator('#level-1');
    dropdownLevel1 = page.locator('#dropdown-level-1');

    dropdownLevel1_Item1 = dropdownLevel1
      .locator('ix-dropdown-item')
      .getByText('Item 1');
  }

  test(' = both', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'both',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).not.toBeVisible();
  });

  test(' = inside', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'inside',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).not.toBeVisible();
  });

  test(' = outside', async ({ mount, page }) => {
    await mountDropdown(mount, {
      closeBehavior: 'outside',
    });

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click();
    await expect(dropdownLevel1).toBeVisible();
  });

  test(' = false', async ({ mount, page }) => {
    await mountDropdown(mount, {
      // Disable close behavior
      closeBehavior: false,
    });

    // Have to be provided via javascript, otherwise the component parse the value as a string.
    await page
      .locator('ix-dropdown')
      .evaluate((dropdown: any) => (dropdown.closeBehavior = false));

    setupTest(page);

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await page.mouse.click(400, 200);
    await expect(dropdownLevel1).toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).not.toBeVisible();

    await triggerButton.click();
    await expect(dropdownLevel1).toBeVisible();

    await dropdownLevel1_Item1.click({
      force: true,
    });
    await expect(dropdownLevel1).toBeVisible();
  });
});

test.describe('Nested dropdowns 1/2', () => {
  function mountDropdown(
    mount: (selector: string) => Promise<ElementHandle<HTMLElement>>
  ) {
    const html = String.raw;

    return mount(html`
      <ix-button id="trigger-dropdown-1">Trigger 1</ix-button>
      <ix-dropdown id="dropdown-1" trigger="trigger-dropdown-1">
        <ix-dropdown-item id="trigger-dropdown-2">Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-3">Item 3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-2" id="dropdown-2">
        <ix-dropdown-item>Item 1.1</ix-dropdown-item>
        <ix-dropdown-item>Item 1.2</ix-dropdown-item>
        <ix-dropdown-item>Item 1.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-3" id="dropdown-3">
        <ix-dropdown-item>Item 3.1</ix-dropdown-item>
        <ix-dropdown-item>Item 3.2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-4">Item 3.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown trigger="trigger-dropdown-4" id="dropdown-4">
        <ix-dropdown-item>Item 3.3.1</ix-dropdown-item>
        <ix-dropdown-item>Item 3.3.2</ix-dropdown-item>
        <ix-dropdown-item>Item 3.3.3</ix-dropdown-item>
      </ix-dropdown>

      <ix-button id="trigger-dropdown-5">Trigger 5</ix-button>
      <ix-dropdown id="dropdown-5" trigger="trigger-dropdown-5">
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item id="trigger-dropdown-6">Item 3</ix-dropdown-item>
      </ix-dropdown>

      <ix-dropdown id="dropdown-6" trigger="trigger-dropdown-6">
        <ix-dropdown-item>Item 1</ix-dropdown-item>
        <ix-dropdown-item>Item 2</ix-dropdown-item>
        <ix-dropdown-item>Item 3</ix-dropdown-item>
      </ix-dropdown>
    `);
  }

  let triggerDropdown1: Locator;
  let triggerDropdown2: Locator;
  let triggerDropdown3: Locator;
  let triggerDropdown4: Locator;
  let triggerDropdown5: Locator;

  let dropdown1: Locator;
  let dropdown2: Locator;
  let dropdown3: Locator;
  let dropdown4: Locator;
  let dropdown5: Locator;

  function setupTest(page: Page) {
    triggerDropdown1 = page.locator('#trigger-dropdown-1');
    triggerDropdown2 = page.locator('#trigger-dropdown-2');
    triggerDropdown3 = page.locator('#trigger-dropdown-3');
    triggerDropdown4 = page.locator('#trigger-dropdown-4');
    triggerDropdown5 = page.locator('#trigger-dropdown-5');

    dropdown1 = page.locator('#dropdown-1');
    dropdown2 = page.locator('#dropdown-2');
    dropdown3 = page.locator('#dropdown-3');
    dropdown4 = page.locator('#dropdown-4');
    dropdown5 = page.locator('#dropdown-5');
  }

  test('close neighbor sub menu', async ({ mount, page }) => {
    await mountDropdown(mount);
    setupTest(page);

    await triggerDropdown1.click();
    await expect(dropdown1).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown3).toBeVisible();

    await triggerDropdown5.click();
    await expect(dropdown5).toBeVisible();
    await expect(dropdown1).not.toBeVisible();
    await expect(dropdown3).not.toBeVisible();
  });

  test('close assigned submenu', async ({ mount, page }) => {
    await mountDropdown(mount);

    setupTest(page);

    await triggerDropdown1.click();
    await expect(dropdown1).toBeVisible();

    await triggerDropdown2.click();
    await expect(dropdown2).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown2).not.toBeVisible();
    await expect(dropdown3).toBeVisible();

    await triggerDropdown4.click();
    await expect(dropdown4).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown3).not.toBeVisible();
    await expect(dropdown4).not.toBeVisible();
  });

  test('close by Escape', async ({ mount, page }) => {
    await mountDropdown(mount);

    setupTest(page);

    await triggerDropdown1.click();
    await expect(dropdown1).toBeVisible();

    await triggerDropdown2.click();
    await expect(dropdown2).toBeVisible();

    await triggerDropdown3.click();
    await expect(dropdown2).not.toBeVisible();
    await expect(dropdown3).toBeVisible();

    await triggerDropdown4.click();
    await expect(dropdown4).toBeVisible();

    await page.keyboard.press('Escape');

    await expect(dropdown1).not.toBeVisible();
    await expect(dropdown2).not.toBeVisible();
    await expect(dropdown3).not.toBeVisible();
    await expect(dropdown4).not.toBeVisible();
  });
});

test.describe('nested dropdown 2/2', () => {
  const button1Text = 'Triggerbutton1';
  const button2Text = 'Triggerbutton2';

  test.beforeEach(async ({ mount }) => {
    await mount(`
      <button id="trigger1">${button1Text}</button>
      <ix-dropdown trigger="trigger1">
        <button id="trigger2">${button2Text}</button>
        <ix-dropdown trigger="trigger2">
          <ix-dropdown-item label="Item 1"></ix-dropdown-item>
        </ix-dropdown>
      </ix-dropdown>
    `);
  });

  test('can open nested dropdown', async ({ page }) => {
    await page.getByText(button1Text).click();
    await page.getByText(button2Text).click();
    const nestedDropdownItem = page.locator('ix-dropdown-item');

    await expect(nestedDropdownItem).toHaveClass(/hydrated/);
  });
});
