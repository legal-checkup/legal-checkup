describe('test navigation functionality ',()=>
{
    it('Privacy policy exists in footer section',()=>{

cy.visit('http://localhost:8000')
cy.wait(900)

cy.get('[data-testid=footerWrapper]').contains('Privacy policy')


/*cy.get('[data-testid=wrapper]').contains('Home');

it('Desktop Header:Checkup exist',()=>{

    cy.get('[data-testid=headerNav] > :nth-child(2)').contains('Checkup');

})

//cy.get('[data-testid=wrapper]').contains('About');





})
/*it('Desktop Header : home exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('About');
  })
*/
  /*it('Desktop Header : About exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('About');
  })



it('Desktop Header : help exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('Help');*/
  })
  it('Desktop Footer:terms of use exist',()=>{

    cy.get('[data-testid=footerWrapper]').contains('Terms of use')

})

})
