import {Selector, t} from 'testcafe'

class HomePage {
  constructor() {
    this.footerCopyRight=Selector('.LinkExternalMobile-sc-1suge14-0')
    this.privacyPolicyPage=Selector('.MobileFooterLink-jjajg-0')
    // this.termsPage = Selector('MobileFooterLink-jjajg-0');
  }

  async goToPrivacyPolicyPage() {
    await t.click(this.privacyPolicyPage)
  }

  async goToTermsOfUsePage() {
    await t
    // this.termsPage = termsPage.innerText.eq('Terms of Use')
    // .click(this.termsPage)
  }
}

export default new HomePage()