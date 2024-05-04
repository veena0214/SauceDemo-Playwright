
import{ test,expect } from '@playwright/test';


test('saucedemo login and add products to cart',async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('#login_button_container div').nth(3).click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  //adding products to cart adding comments

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  //clicking on cart
  await page.locator('[data-test="shopping-cart-link"]').click();
  //removing sauce labs bike light
  await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();
  //clicking checkout
  await page.locator('[data-test="checkout"]').click();
  //entering first ,lastname and zip
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Sauce');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Testing');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('07110');
  await page.locator('[data-test="continue"]').click();
  // total price greater than $40 clicking on cancel button
  await page.locator('[data-test="cancel"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Sauce');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('test');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('07110');
  await page.locator('[data-test="continue"]').click();
  //total price less than $40 clicking on finish button
  await page.locator('[data-test="finish"]').click();
  // validation on "Thank you for your order!" text 
  await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  // Navigation back to home page
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  // Logout from application
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
