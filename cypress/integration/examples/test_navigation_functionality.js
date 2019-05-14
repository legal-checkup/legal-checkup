describe('test navigation functionality ',()=>
{
    it('Go to Home of header Section of legal checkup page',()=>{

cy.visit('http://localhost:8000')



cy.get('[data-testid=wrapper]').contains('Home');
cy.get('[data-testid=wrapper]').click();
cy.get('[data-testid=headerNav] > :nth-child(2)').contains('Checkup');

})


  it('Desktop Header : About exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('About');
  })



it('Desktop Header : help exists ',()=> {
    cy.get('[data-testid=wrapper]').contains('Help');
  })

  it('Check About Community Law link  exists ',()=> {
    cy.get('.sc-eHgmQL').contains('About Community Law').click();
  })

  
  it('Check About Community Law services  exists ',()=> {

   
    cy.get('.sc-cvbbAY').click();
  })
  
  it('Check the Community Law link present in footer section ',()=>{

    //cy.wait(800)
    cy.get('[data-testid=footerWrapper]').contains(' Community Law Wellington & Hutt Valley');
    cy.get('[data-testid=footerWrapper] > [data-testid=externalLink]').click();//contains('Community Law Wellington & Hutt Valley');

    
 

  })

  


  it('Check the Terms of use present in footer sections ',()=> {

    
    cy.get('[data-testid=footerWrapper] > [data-testid=internalLink]').contains('Terms of Use');
    cy.get('[data-testid=footerWrapper] > [data-testid=internalLink]').click();
  })
})

