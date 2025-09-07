import { test } from "@playwright/test";
import { NavigationPage } from "../page-objects/navigationPage";
import { FormLayoutsPage } from "../page-objects/formLayoutsPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();
  await navigateTo.smartTablePage();
  await navigateTo.toastrPage();
  await navigateTo.tooltipPage();
});

test("parameterized methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const formLayoutsPage = new FormLayoutsPage(page);

  await navigateTo.formLayoutsPage();
  await formLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption(
    "lwolter1337@gmail.com",
    "lolda",
    "Option 2"
  );

  await formLayoutsPage.submitInlineFormWithNameEmailAndCheckbox(
    "Wolter",
    "hehe",
    false
  );
});
