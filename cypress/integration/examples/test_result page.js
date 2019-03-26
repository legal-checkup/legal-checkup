describe('test result page',()=>{

    it('Go to Home  page',()=>{

        cy.visit('http://localhost:8000');
        cy.get('.sc-kEYyzF').click();

        let i = 0
        while( i < 28){
            cy.get('[data-testid=btnYes]').click();


           // cy.get('[data-testid=btnYes]').type('Yes');
            i++
          }
          cy.get('[data-testid=redoBtn]').click()

cy.reload();
    })

    //it('')
})