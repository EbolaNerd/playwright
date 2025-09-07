import { Page } from "@playwright/test";

export class FormLayoutsPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async submitUsingTheGridFormWithCredentialsAndSelectOption(
    email: string,
    password: string,
    optionText: string
  ) {
    const usingTheGridForm = this.page.locator("nb-card", {
      hasText: "Using the Grid",
    });

    await usingTheGridForm.getByRole("textbox", { name: "Email" }).fill(email);
    await usingTheGridForm
      .getByRole("textbox", { name: "Password" })
      .fill(password);

    usingTheGridForm
      .getByRole("radio", {
        name: optionText,
      })
      .check({ force: true });

    await usingTheGridForm.getByRole("button").click();
  }

  /**
   * This method will fill out the Inline form with user details
   * @param name - Should be first and last name
   * @param email - Valid email for the test user
   * @param rememberMe - true or false if the user session to be persisted
   */
  async submitInlineFormWithNameEmailAndCheckbox(
    name: string,
    email: string,
    rememberMe: boolean
  ) {
    const usingInlineForm = this.page.locator("nb-card", {
      hasText: "Inline Form",
    });

    await usingInlineForm.getByRole("textbox", { name: "Jane Doe" }).fill(name);
    await usingInlineForm.getByRole("textbox", { name: "Email" }).fill(email);
    if (rememberMe) {
      await usingInlineForm.getByRole("checkbox").check({ force: true });
    }
    await usingInlineForm.getByRole("button").click();
  }
}
