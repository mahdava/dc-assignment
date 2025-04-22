import { expect, test } from "@playwright/test";

test.describe("SharedFilesystemForm", () => {
  // adjust this to your dev-server URL if different
  const BASE_URL = "http://localhost:3000";

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test("no submission is shown on initial load", async ({ page }) => {
    // role=status is only rendered after submit
    await expect(page.getByRole("status")).toHaveCount(0);
  });

  test("submits form and displays submission results", async ({ page }) => {
    // fill in the text input
    const nameInput = page.getByLabel("Name");
    await nameInput.click();
    await page.keyboard.type("My Filesystem");

    // set slider value to 42
    const sizeSlider = page.locator('input[name="size"]');
    // programmatically set the value and dispatch an input event
    await sizeSlider.evaluate((el, value) => {
      (el as HTMLInputElement).value = value;
      el.dispatchEvent(new Event("input", { bubbles: true }));
    }, "42");

    // submit the form
    await page.getByRole("button", { name: "Submit" }).click();

    // the status region should now appear
    const status = page.getByTestId("submission-result");
    await expect(status).toBeVisible();

    // assert both list items are correct
    const name = status.getByTestId("submission-name");

    await expect(name).toBeVisible();
    await expect(name).toContainText("My Filesystem");

    const size = status.getByTestId("submission-size");
    await expect(size).toBeVisible();
    await expect(size).toContainText("42");
  });

  test("clears submission results when Clear is clicked", async ({ page }) => {
    // first do a submit so that the status appears
    await page.getByLabel("Name").fill("Temp");
    const sizeSlider = page.locator('input[name="size"]');
    await sizeSlider.evaluate((el) => {
      (el as HTMLInputElement).value = "10";
      el.dispatchEvent(new Event("input", { bubbles: true }));
    });
    await page.getByRole("button", { name: "Submit" }).click();

    // sanity check: status is present
    await expect(page.getByRole("status")).toBeVisible();

    // click Clear
    await page.getByRole("button", { name: "Clear" }).click();

    // status region should vanish
    await expect(page.getByRole("status")).toHaveCount(0);
  });
});
