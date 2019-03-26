describe('test navigation functionality ',()=>
{
    it('Go to Home of header Section of legal checkup page',()=>{

cy.visit('http://localhost:8000')



cy.get('[data-testid=wrapper]').contains('Home');
cy.get('[data-testid=wrapper]').click();
cy.get('[data-testid=headerNav] > :nth-child(2)').contains('Checkup');
//it('Desktop Header:Checkup exist',()=>{

    

//})

//cy.get('[data-testid=wrapper]').contains('About');





})
/*it('Desktop Header : home exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('About');
  })
*/
  it('Desktop Header : About exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('About');
  })



it('Desktop Header : help exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('Help');
  })

  it('Check the footer sections ',()=>{

    //cy.wait(800)
    cy.get('[data-testid=footerWrapper] > [data-testid=externalLink]').click();//contains('Community Law Wellington & Hutt Valley');

    //cy.url

    //cy.url().should('include', 'Community Law Wellington & Hutt Valley').click();// => true
//cy.url().should('eq', 'http://localhost:8000/users/1/edit') // => true

  })

  
  it('Check the footer sections : Privacy policy exists ',()=> {
    cy.get('[data-testid=footerWrapper] > :nth-child(2)').contains('Privacy Policy');
  })

  it('Check the footer sections : Terms of use  exists ',()=> {
    cy.get('[data-testid=footerWrapper] > :nth-child(3)').contains('Privacy Terms of Use');
  })
})
