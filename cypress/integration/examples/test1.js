describe('test result page',()=>{

    it('Go to Home  page',()=>{

        cy.visit('http://localhost:8000');
        /*cy.get('.sc-kEYyzF').click();
//click on yes and verify the text of the answer
//cy.get('[data-testid=btnYes]').contain('')

//cy.get('.sc-hMqMXs').click();

//cy.get('[data-testid=box]').contain('')
cy.contains('Is anyone chasing you for money?')
//After selecting YES to question number 2
cy.get('[data-testid=btnYes]').click();

cy.get('[data-testid=btnYes]').contains('Do you have payments due or unpaid accounts?');
cy.get('[data-testid=btnYes]').title();
    })*/

    it('Go to Home  page',()=>{

        cy.visit('http://localhost:8000');

        cy.get('[data-testid=footerWrapper]').click();

        cy.get('[data-testid=footerWrapper]').click();
    })
})
})