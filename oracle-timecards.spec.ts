import { test, expect } from '@playwright/test';

test('oracle sample test', async ({ page }) => {

  // Insert Login to MS O365 - Endava
  // ! Up to 2FA
  await page.goto('https://eclf.fa.em2.oraclecloud.com/fscmUI/faces/AtkHomePageWelcome?_adf.ctrl-state=x5n84pljc_1&_adf.no-new-window-redirect=true&_adf.no-new-window-redirect=true&_adf.no-new-window-redirect=true&_afrLoop=27430382311130488&_afrFS=16&_afrMT=screen&_afrMFW=822&_afrMFH=773&_afrMFDW=1920&_afrMFDH=1080&_afrMFC=8&_afrMFCI=0&_afrMFM=0&_afrMFR=96&_afrMFG=0&_afrMFS=0&_afrMFO=1');
  await page.getByRole('link', { name: 'Navigator' }).click();
  await page.getByRole('link', { name: 'Time and Absences' }).click();
  await page.getByRole('link', { name: 'Existing Time Cards Access' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'Project Code' }).click();
  await page.getByText('MOADV012 - Monuta Portals').click();
  await page.getByRole('textbox', { name: 'Task Details' }).click();
  await page.getByText('- Operate').click();
  await page.getByRole('textbox', { name: 'Time Type' }).click();
  await page.getByText('Regular').click();
  await page.getByRole('textbox', { name: 'Location' }).click();
  await page.getByText('Work from home').click();
  await page.getByRole('link', { name: 'Select dates' }).click();
  await page.getByRole('gridcell', { name: '3', exact: true }).first().click();
  await page.getByRole('gridcell', { name: '4' }).nth(1).click();
  await page.getByRole('gridcell', { name: '5' }).nth(1).click();
  await page.getByRole('gridcell', { name: '6', exact: true }).click();
  await page.getByRole('gridcell', { name: '7', exact: true }).click();
  await page.getByRole('link', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Select dates' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Quantity' }).click();
  await page.getByRole('textbox', { name: 'Quantity' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Quantity' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Quantity' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Quantity' }).press('ArrowRight');
  await page.getByRole('textbox', { name: 'Quantity' }).fill('8');
  await page.getByRole('textbox', { name: 'Quantity' }).press('Enter');
  await page.getByRole('textbox', { name: 'Comments' }).click();
  await page.getByRole('textbox', { name: 'Comments' }).fill('Some comment here\n');
  await page.locator('[id="_FOpt1\\:_FOr1\\:0\\:_FONSr2\\:0\\:MAnt2\\:2\\:teUpl\\:UPsp1\\:tcePce\\:tcdLv\\:0\\:stePse\\:edTEPfl"]').click();
});

test('test demoqa.com', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByText('© 2013-2020 TOOLSQA.COM | ALL').click();
});