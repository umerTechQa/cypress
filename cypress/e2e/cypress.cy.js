describe('mytest',()=>{
  it('Does work ',()=>{
  expect(true).to.equal(true)
  
  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('#email1').type('hello@gmail.com').should('have.value','hello@gmail.com')
  cy.get('#password1').type('12345678').focus().should('have.value','12345678').prev().should('have.attr','style','color: orange;')
  cy.get('#fullName1').type('Enter First Name').blur().should('have.value','Enter First Name').prev().should('have.attr','style','color: red;')
  cy.get('#description').type('Clear text').should('have.value','Clear text').clear().should('have.value', '')
})
console.log("Done!");
})