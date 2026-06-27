import { Page, Locator } from '@playwright/test';

export default class HomePage {
  readonly page: Page;
  readonly signUpLink: Locator;
  readonly loginLink: Locator;
  readonly logoutLink: Locator;
  readonly nameOfUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signUpLink = page.locator('#navbarExample').getByRole('link', { name: 'Sign up' });
    this.loginLink = page.locator('#navbarExample').getByRole('link', { name: 'Log in' });
    this.logoutLink = page.locator('#navbarExample').getByRole('link', { name: 'Log out' });
    this.nameOfUser = page.locator('#nameofuser');
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

  async clickSignUpLink(): Promise<void> {
    await this.signUpLink.click();
  }

  async clickLoginLink(): Promise<void> {
    await this.loginLink.click();
  }

  async clickLogout(): Promise<void> {
    await this.logoutLink.click();
  }

  async getWelcomeText(): Promise<string> {
    return (await this.nameOfUser.textContent()) ?? '';
  }

  async isLoggedIn(): Promise<boolean> {
    return this.nameOfUser.isVisible();
  }

  async isLogoutVisible(): Promise<boolean> {
    return this.logoutLink.isVisible();
  }

  async isLoginLinkVisible(): Promise<boolean> {
    return this.loginLink.isVisible();
  }

  async isSignUpLinkVisible(): Promise<boolean> {
    return this.signUpLink.isVisible();
  }
}
