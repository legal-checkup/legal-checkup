describe('test result page',()=>{

    it('Check up legal app with YES answer',()=>{

        cy.visit('http://localhost:8000');
        cy.get('.sc-hSdWYo').click();

        let i = 0
        while( i < 28){
            cy.get('[data-testid=btnYes]').click();


           // cy.get('[data-testid=btnYes]').type('Yes');
            i++
          }
          cy.get('.sc-iRbamj > :nth-child(1)').contains('Based on your answers, a lawyer may be able to help you with …');
          
          //Show more button
          cy.get(':nth-child(4) > :nth-child(1) > .sc-jlyJG > .sc-gipzik').click();
          
          //cy.get('.sc-iRbamj > :nth-child(1) > :nth-child(4)')
          //cy.get(':nth-child(1) > .sc-jhAzac').contains('The fact that someone chasing you for money');
           cy.reload();
    })

   it('Check up legal app with Keyboard typing "A" answer',()=>{

        cy.visit('http://localhost:8000');
        cy.get('.sc-hSdWYo').click();

        let i = 0  
        while( i < 28){
            //cy.get('[data-testid=btnYes]').click();
            //cy.get('[data-testid=accessKeyBar]').click();
            cy.get('[data-testid=accessKeyA]').type('A');
           //cy.get('[data-testid=btnYes]').type('A');
            i++
          }
          //cy.get('.sc-iRbamj > :nth-child(1)').contains('Based on your answers, it looks like you re in good legal health! But if you have a problem, or something worrying you that wasn t covered by the questions in this check-up, do come talk to us at Community Law.');
        })
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
 it('Check up legal app with Keyboard typing "B" answer',()=>{

        cy.visit('http://localhost:8000');
        cy.get('.sc-hSdWYo').click();

        let i = 0  
        while( i < 28){
            //cy.get('[data-testid=btnYes]').click();
            //cy.get('[data-testid=accessKeyBar]').click();
            cy.get('[data-testid=accessKeyB]').type('B');
           //cy.get('[data-testid=btnYes]').type('A');
            i++
          }
          cy.get('.sc-iRbamj > :nth-child(1)').contains('Based on your answers, it looks like you re in good legal health! But if you have a problem, or something worrying you that wasn t covered by the questions in this check-up, do come talk to us at Community Law.');

        })

it('Check up legal app with clicking No button',()=>{

            cy.visit('http://localhost:8000');
            cy.get('.sc-hSdWYo').click();
    
            let i = 0  
            while( i < 28){
                //cy.get('[data-testid=btnYes]').click();
                //cy.get('[data-testid=accessKeyBar]').click();
                cy.get('[data-testid=btnNo]').click()
               //cy.get('[data-testid=btnYes]').type('A');
                i++
              }
              cy.get('.sc-iRbamj > :nth-child(1)').contains('Based on your answers, it looks like you re in good legal health! But if you have a problem, or something worrying you that wasn t covered by the questions in this check-up, do come talk to us at Community Law.');
    


   
})
it('Check the  NotSure button working',()=>{
    cy.visit('http://localhost:8000');
    cy.get('.sc-hSdWYo').click();
    let i = 0  
    while( i < 28){
    cy.get('[data-testid=btnNotSure]').click()

i++
}


})

it('Check up legal app with esc',()=>{
    cy.visit('http://localhost:8000');
    cy.get('.sc-hSdWYo').click();
    let i = 0  
    while( i < 28){
    //cy.get('[data-testid=btnNotSure]').click()
cy.get('[data-testid=accessKeyEsc]').type('esc');
i++
}
})
})