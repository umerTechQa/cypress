describe('my2ndtest',()=>{
    it('Does work ',()=>{
    expect(true).to.equal(true)
    
    cy.visit('https://www.ellos.us/')
   
    cy.contains('Sign In').should('have.value','').click()
    
    console.log("Done!");
    })
})
    describe('buttons',()=>{
   it('button_functionality',()=>{
   cy.visit('https://www.orangehrm.com/')
   cy.contain('Book a Free Demo').should('contain','Button').click()

})
    })
  
  
  