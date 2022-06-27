
it('Learnig assertion', ()=> {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    
    cy.get('#query-btn')
      .should('contain', 'Button')
      .should('have.class', 'query-btn')
      .should('be.visible')
      .should('be.enabled')


      // Explicit assertions

      expect(true).to.be.true

      const name = 'Vinz'
      expect(name).to.be.equal('Vinz')

      assert.equal(4, 4, 'Not equal')

      assert.strictEqual(4, 4, 'Not strictly equal')
})