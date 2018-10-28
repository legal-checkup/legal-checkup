import { Selector, t } from 'testcafe'

class HomePage {
  constructor () {
    this.footerCopyRight = Selector('.LinkExternalMobile-sc-1suge14-0')
    this.privacyPage = Selector('.MobileFooterLink-jjajg-0')
    // this.termsPage = Selector('MobileFooterLink-jjajg-0');
  }

  async goToPrivacyPage () {
    await t.click(this.privacyPage)
  }

  async goToTermsOfUsePage () {
    await t
    // this.termsPage = termsPage.innerText.eq('Terms of Use')
    // .click(this.termsPage)
  }
}

export default new HomePage()
