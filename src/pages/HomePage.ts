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

  async cleanupModals(): Promise<void> {
    await this.page.evaluate(() => {
      const $ = (window as any).$;
      if ($) {
        try {
          $('.modal.show').modal('hide');
        } catch {}
        $('.modal').each(function (this: HTMLElement) {
          $(this).removeData('bs.modal');
        });
      }
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    });
    await this.page.waitForTimeout(300);
  }

  async clickSignUpLink(): Promise<void> {
    await this.cleanupModals();
    await this.page.evaluate(() => {
      const $ = (window as any).$;
      if ($) {
        $('#signInModal').modal('show');
      } else {
        (document.querySelector('#signin2') as HTMLElement)?.click();
      }
    });
  }

  async clickLoginLink(): Promise<void> {
    await this.cleanupModals();
    await this.page.evaluate(() => {
      const $ = (window as any).$;
      if ($) {
        $('#logInModal').modal('show');
      } else {
        (document.querySelector('#login2') as HTMLElement)?.click();
      }
    });
  }

  async clickLogout(): Promise<void> {
    await this.cleanupModals();
    await this.page.evaluate(() => (document.querySelector('#logout2') as HTMLElement)?.click());
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
