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

// import { Selector, t } from 'testcafe'

// class HomePage {
//   constructor () {
//     this.footerCopyRight = Selector('.LinkExternalMobile-sc-1suge14-0')
//     this.privacyPage = Selector('.MobileFooterLink-jjajg-0')
//     this.logo = Selector(
//       '#root > header > div.style__StyledDesktopHeaderLogo-i6d3ga-1.kMQrdA'
//     )
//     // this.termsPage = Selector('MobileFooterLink-jjajg-0');
//     this.about = Selector('#root > header > div:nth-child(5) > a')
//     this.checkup = Selector('#root > header > div:nth-child(4) > a')
//     this.help = Selector('#root > header > div:nth-child(6) > a')
//     this.legalCheckup = Selector(
//       '#root > header > div.style__StyledDesktopHeaderLegal-i6d3ga-2.cTqNXU'
//     )
//     this.home = Selector(
//       '#root > header > div.style__StyledDesktopHeaderLink-i6d3ga-4.gcOcKx'
//     )
//     //  this.checkupPage = Selector('#root > header > div:nth-child(4) > a')
//   }
//   async goToPrivacyPage () {
//     await t.click(this.privacyPage)
//   }

//   async goToTermsOfUsePage () {
//     await t
//     // this.termsPage = termsPage.innerText.eq('Terms of Use')
//     // .click(this.termsPage)
//   }
// }

// export default new HomePage()