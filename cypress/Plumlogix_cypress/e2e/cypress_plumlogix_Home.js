describe('my2ndtest',()=>{
    it('Does work ',()=>{
    expect(true).to.equal(true)
    
    cy.visit('https://plumlogix.com/')
   
    cy.contains('(888) 318-8883 In').should('have.value','(888) 318-8883')
    console.log("Done! contact verification");
    })

    
   
   
   //cy.contain('Book a Free Demo').should('contain','Button').click()


    })
  
  
  