/// <reference types='cypress'/>

it('Google test', ()=> {

  
cy.visit('https://google.com')

cy.get('#W0wltc').click()
cy.get('.gLFyf').type('Disneyland Paris{enter}')

cy.wait(5000)

cy.get('#rso > :nth-child(1)')

cy.contains('Billets').click()
})

it.only('Login test', ()=>{

  cy.visit('https://example.cypress.io/commands/actions')
  cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
  cy.get('.action-form > .btn').click()
})