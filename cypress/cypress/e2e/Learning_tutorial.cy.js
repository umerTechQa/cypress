describe('mytest',()=>{
  before(()=>{
  console.log("Im running my tests!");
})
  beforeEach(()=>{
    cy.visit('https://example.cypress.io/commands/actions')
  })
  // it('Does work ',()=>{
  // expect(true).to.equal(true)
  
  // })
  it('Example viewport',()=>{
    cy.get('#email1').type('hello@gmail.com').should('have.value','hello@gmail.com')
    cy.screenshot()
    cy.get('#password1').type('12345678').focus().should('have.value','12345678').prev().should('have.attr','style','color: orange;')
    cy.screenshot()
  })
  it('AnotherExample',()=>{
  cy.get('#description').type('Clear text').should('have.value','Clear text').clear().should('have.value', '')
  cy.screenshot()
  cy.get('#fullName1').type('Enter First Name').blur().should('have.value','Enter First Name').prev().should('have.attr','style','color: red;')
  cy.screenshot()
})


})