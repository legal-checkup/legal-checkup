import {Selector, t} from 'testcafe'

class HomePage {
  constructor() {
    this.footerCopyRight=Selector('.LinkExternalMobile-sc-1suge14-0')
    this.privacyPolicyPage=Selector('.MobileFooterLink-jjajg-0')
    this.clickCheckup=Selector('#root > header > a:nth-child(2)')
    // this.termsPage = Selector('MobileFooterLink-jjajg-0');
  }

  async goToPrivacyPolicyPage() {
    await t
      .click(this.privacyPolicyPage)
  }

  async goToTermsOfUsePage() {
    await t
    // this.termsPage = termsPage.innerText.eq('Terms of Use')
    // .click(this.termsPage)
  }

  async gotoCheckupPage() {
    await t
      .click(this.clickCheckup)
  }
}

export default new HomePage()