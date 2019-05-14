describe('test result page',()=>{

    it('Back button and progress bar functionality',()=>{
        cy.visit('http://localhost:8000');

        //Click on Start legal checkup
        cy.get('.sc-hSdWYo').click();
        //Click on YES button
cy.get('[data-testid=btnYes]').click();
//After clicking Yes check the message of the page
cy.get('[data-testid=box]').contains('Do you have payments due or unpaid accounts?');
    //Going back to previous page using "<"
cy.get('.daJwKB').click();

// Check the message after coming back to first page
cy.get('[data-testid=box]').contains('Is anyone chasing you for money? Hello everyone!');
cy.get('.daJwKB').click();
    })


    
})
